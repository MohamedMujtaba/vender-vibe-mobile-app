import { View, Text, ScrollView } from "react-native";
import React from "react";
import Filter from "../components/Filter";
import HList from "../components/HList";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";

const Home = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Header />
      <Filter />
      <ScrollView className="flex-1">
        <HList title="Hot Sales" />
        <HList title="Women" />
        <HList title="Men" />
        <HList title="Kids" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
