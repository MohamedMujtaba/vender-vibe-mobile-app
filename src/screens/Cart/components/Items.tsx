import { ScrollView, View } from "react-native";
import { cartInterface } from "../../../redux/cartSlice";
import CartItem from "./CartItem";

interface ItemsProps extends cartInterface {}

const Items: React.FC<ItemsProps> = ({ cart }) => {
  return (
    <View className="h-64">
      <ScrollView
        className="w-full "
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        {cart.map((i, index) => {
          return <CartItem key={index} item={i} />;
        })}
      </ScrollView>
    </View>
  );
};

export default Items;
