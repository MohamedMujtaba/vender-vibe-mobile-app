import { useRef, useState } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { AppDispatch } from "../../../redux/store";
import { useDispatch } from "react-redux";
import {
  decrementItemQuantity,
  increaseItemQuantity,
} from "../../../redux/cartSlice";
import { Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";

interface CartItemProps {
  item: {
    id: string;
    name: string;
    price: number;
    image: string;
    color?: string;
    quantity?: number;
  };
}
const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const [state, setState] = useState(item.quantity);
  const incTimer = useRef(null);
  const decTimer = useRef(null);
  const y = useSharedValue(0);
  const dispatch: AppDispatch = useDispatch();
  // const { language } = useSelector((state: RootState) => state.);

  const nStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: y.value }],
    };
  });

  const inc = () => {
    // setState((prev) => prev + 1);
    dispatch(increaseItemQuantity({ id: item.id }));
    y.value = withSpring(-15);
    incTimer.current = setTimeout(inc, 300);
  };

  const dec = () => {
    dispatch(decrementItemQuantity({ id: item.id }));
    y.value = withSpring(-15);
    // setState((prev) => {
    //   if (prev == 0) {
    //     return 0;
    //   }
    //   if (prev > 0) {
    //     return prev - 1;
    //   }
    // });
    decTimer.current = setTimeout(dec, 300);
  };
  // useEffect(() => {
  //   dispatch(changeQuantity({ id: item.id, quantity: state }));
  // }, [state]);

  const incStopTimer = () => {
    clearTimeout(incTimer.current);
    y.value = withTiming(0);
  };
  const decStopTimer = () => {
    clearTimeout(decTimer.current);
    y.value = withTiming(0);
  };
  return (
    <View className=" px-4 py-2 flex-row">
      <View className="bg-gray-200 w-28 rounded-lg aspect-square "></View>
      <View className="p-2 flex-1 justify-between">
        <View>
          <Text className="font-semibold">{item.name}</Text>
          <Text className="text-base font-bold">{item.price}</Text>
        </View>
        <View className="flex-row items-end justify-end gap-4">
          <TouchableOpacity
            onPressIn={() => dec()}
            onPressOut={decStopTimer}
            className="border border-blue-400 rounded-md w-6 h-6 items-center justify-center text-center"
          >
            <Feather name="minus" size={14} color="#60a5fa" />
          </TouchableOpacity>
          <Animated.View
            className="w-6 h-6 items-center justify-center "
            style={nStyle}
          >
            <Text>{item.quantity}</Text>
          </Animated.View>
          <TouchableOpacity
            onPressIn={() => inc()}
            onPressOut={incStopTimer}
            className="bg-blue-400 rounded-md w-6 h-6 items-center justify-center "
          >
            <Feather name="plus" size={14} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartItem;
