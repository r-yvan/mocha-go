import { View, Text } from "react-native";
import React from "react";
import QuickSearch from "~/components/QuickSearch";
import Advertisement from "~/components/Advertisement";

const Home = () => {
  return (
    <View className="flex-1 bg-[#f9f9f9]">
      <Advertisement />
      <Text>Home</Text>
      <View className="flex w-full flex-row gap-1">
        <QuickSearch text="Machiato" />
        <QuickSearch text="Latte" />
        <QuickSearch text="Caffe Mocha" />
      </View>
    </View>
  );
};

export default Home;
