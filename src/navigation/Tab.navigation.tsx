import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "../screens/Home.screen";

const TabStack = createBottomTabNavigator();

const Tab = () => {
  return (
    <TabStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <TabStack.Screen name="home" component={Home} />
    </TabStack.Navigator>
  );
};

export default Tab;
