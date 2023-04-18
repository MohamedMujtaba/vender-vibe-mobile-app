import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-row items-center justify-between p-4">
      <TouchableOpacity className="bg-white/50 rounded-full p-2">
        <Ionicons name="ios-notifications-outline" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("cart")}>
        <View className="bg-blue-400 absolute z-50 w-6 aspect-square -right-2 rounded-full -top-2 items-center justify-center">
          <Text className="text-white text-xs">1</Text>
        </View>
        <Ionicons name="ios-cart-outline" size={30} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
