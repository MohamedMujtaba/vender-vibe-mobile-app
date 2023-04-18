import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Filter = () => {
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="w-full  px-4  mb-2"
      >
        <FilterItem title="All" />
        <FilterItem title="Women" />
        <FilterItem title="Men" />
        <FilterItem title="Kids" />
      </ScrollView>
    </View>
  );
};

interface FilterItemProps {
  title: string;
}

const FilterItem: React.FC<FilterItemProps> = ({ title }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("seeAll", { title })}
      activeOpacity={0.5}
      className="px-4 mr-3 rounded-md border border-gray-200 py-2 items-center justify-center "
    >
      <Text className="text-base font-semibold text-gray-400">{title}</Text>
    </TouchableOpacity>
  );
};

export default Filter;
