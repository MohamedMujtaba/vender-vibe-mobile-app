import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

interface ItemProps {
  item: {};
}

const Item: React.FC<ItemProps> = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("product")}>
      <View className="bg-blue-200 w-40 aspect-square mr-2 rounded-lg">
        <View className="w-8 h-8 bg-white/70 absolute top-2 right-3 items-center justify-center rounded-full">
          <Ionicons name="ios-heart-outline" size={20} color="red" />
        </View>
      </View>
      <View className="pt-1">
        <Text className="font-semibold">The Title</Text>
        <Text className="text-base">250,000</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Item;
