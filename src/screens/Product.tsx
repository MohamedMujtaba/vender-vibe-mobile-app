import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const Product = () => {
  return (
    <SafeAreaView className="flex-1 bg-white p-0">
      <ScrollView className="flex-1 pb-10" showsVerticalScrollIndicator>
        <View className="w-full aspect-square bg-gray-200"></View>
        <View className="p-4">
          {/* top */}
          <View className="flex-row items-center  justify-between pb-2 ">
            <View className="bg-blue-400 py-1 px-2 rounded-lg">
              <Text className="text-xs text-white">Free Shipping</Text>
            </View>
            <View>
              <Ionicons name="heart-circle-outline" size={35} color="#d1d5db" />
            </View>
          </View>
          <Text className="text-2xl font-semibold pb-3">Title Here</Text>
          <Text className="text-gray-500 pb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            eius. Ad quia mollitia quidem quos assumenda quam quod? Quo, odit.
          </Text>
          <View>
            <Text className="text-2xl font-semibold pb-3 text-blue-600">
              150,000
            </Text>
            <View className="pb-3">
              <Text className="text-base font-semibold">Color</Text>
              <View className="flex-row pt-3">
                <View className="w-10 h-10 rounded-full bg-red-100 mr-2"></View>
                <View className="w-10 h-10 rounded-full bg-green-100 mr-2"></View>
                <View className="w-10 h-10 rounded-full bg-blue-100 mr-2"></View>
                <View className="w-10 h-10 rounded-full bg-yellow-100 mr-2"></View>
                <View className="w-10 h-10 rounded-full bg-teal-100 mr-2"></View>
              </View>
            </View>
            <View>
              <Text className="text-base font-semibold">Size</Text>
              <View className="flex-row pt-3">
                <View className="w-10 h-10 rounded-full bg-zinc-100 mr-2 items-center justify-center">
                  <Text className="test-base font-semibold">S</Text>
                </View>
                <View className="w-10 h-10 rounded-full bg-zinc-100 mr-2 items-center justify-center">
                  <Text className="test-base font-semibold">M</Text>
                </View>
                <View className="w-10 h-10 rounded-full bg-zinc-900 mr-2 items-center justify-center">
                  <Text className="test-base font-semibold text-white">L</Text>
                </View>
                <View className="w-10 h-10 rounded-full bg-zinc-100 mr-2 items-center justify-center">
                  <Text className="test-base font-semibold">XL</Text>
                </View>
                <View className="w-10 h-10 rounded-full bg-zinc-100 mr-2 items-center justify-center">
                  <Text className="test-base font-semibold">2XL</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View className="px-4">
        <TouchableOpacity className="w-full rounded-lg mt-4 bg-blue-400 p-4 items-center">
          <Text className="text-white text-base font-bold ">Add to cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Product;
