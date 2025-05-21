import { View, Text } from "react-native";
import React from "react";
import QuickSearch from "~/components/QuickSearch";
import Advertisement from "~/components/Advertisement";
import CoffeCard from "~/components/CoffeCard";

const Home = () => {
  return (
    <View className="flex-1 bg-[#f9f9f9]">
      <View className="items-center">
        <Advertisement />
      </View>
      <View className="flex w-full flex-row gap-1">
        <QuickSearch text="Machiato" />
        <QuickSearch text="Latte" />
        <QuickSearch text="Caffe Mocha" />
      </View>
      <View>
        <CoffeCard />
      </View>
    </View>
  );
};

export default Home;
