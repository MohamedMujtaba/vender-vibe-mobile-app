import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SeeAll from "../screens/SeeAll";
import Tab from "./Tab.navigation";
import Product from "../screens/Product";
import Cart from "../screens/Cart/Cart";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="tab" component={Tab} />
      <Stack.Screen name="seeAll" component={SeeAll} />
      <Stack.Screen name="cart" component={Cart} />
      <Stack.Screen
        name="product"
        component={Product}
        options={{
          presentation: "modal",
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
