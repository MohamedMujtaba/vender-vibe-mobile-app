import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Platform,
  Button,
  Dimensions,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Dash from "react-native-dash";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import {
  cartInterface,
  changeQuantity,
  decrementItemQuantity,
  increaseItemQuantity,
} from "../../redux/cartSlice";
import Party from "./components/Party";
import DeliverTo from "./components/DeliverTo";
import Items from "./components/Items";
import CouponCode from "./components/CouponCode";
import CheckOut from "./components/CheckOut";
const Cart = () => {
  const [show, setShow] = useState(false);
  const { cart } = useSelector((state: RootState) => state.cart);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAwareScrollView
        extraHeight={135}
        extraScrollHeight={70}
        automaticallyAdjustContentInsets={true}
        enableOnAndroid={true}
        keyboardShouldPersistTaps="handled"
        className="flex-1 "
        scrollEnabled={false}
      >
        {show && <Party show={show} setShow={setShow} />}
        <DeliverTo />
        <Items cart={cart} />
        <CouponCode />
        <CheckOut setShow={setShow} />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Cart;
