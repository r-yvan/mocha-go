import { View, Text, Image } from "react-native";
import React from "react";
import { IconPlus } from "@tabler/icons-react-native";

const CoffeCard = () => {
  return (
    <View className="bg-blue-400 p-4 gap-3 w-56 rounded-2xl">
      <Image
        source={require("~/assets/images/coffee-1.png")}
        resizeMode="contain"
        className="w-48 h-48 rounded-2xl overflow-hidden"
      />
      <View>
        <Text className="font-sbold text-2xl">Caffe Mocha</Text>
        <Text className="font-sregular">Deep Foam</Text>
      </View>
      <View className="flex-row justify-between items-center">
        <View>
          <Text className="text-3xl font-sbold">$4.5</Text>
        </View>
        <View className="bg-[#c67c4e] justify-center items-center rounded-2xl p-2">
          <IconPlus size={30} color="#FFF" />
        </View>
      </View>
    </View>
  );
};

export default CoffeCard;
