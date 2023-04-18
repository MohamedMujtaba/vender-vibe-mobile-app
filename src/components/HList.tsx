import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import Item from "./Item";
import { useNavigation } from "@react-navigation/native";

interface HListProps {
  title: string;
}

const HList: React.FC<HListProps> = ({ title }) => {
  const navigation = useNavigation();
  return (
    <View className="w-full bg-red-0 py-2 ">
      <View className="flex-row items-center justify-between px-4">
        <Text className="text-base font-semibold">{title}</Text>
        <TouchableOpacity
          className="py-2"
          onPress={() => navigation.navigate("seeAll", { title })}
        >
          <Text className="font-semibold text-gray-400">See More</Text>
        </TouchableOpacity>
      </View>
      <View className="mt-2 pl-4">
        <FlatList
          data={[1, 2, 3, 4, 5, 6]}
          renderItem={(item) => <Item item={item} />}
          keyExtractor={(index: Number) => index.toString()}
          horizontal
          className=""
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default HList;
