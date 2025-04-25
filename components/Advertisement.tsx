import { View, Text } from "react-native";
import React from "react";
import { ImageBackground } from "react-native";

const Advertisement = () => {
  return (
    <ImageBackground
      className="w-[400] p-5 pl-8 h-48 rounded-[30] gap-5 overflow-hidden"
      source={require("~/assets/images/advertisement-image.png")}
    >
      <View className="bg-[#ed5151] p-1 px-3 rounded-xl self-start">
        <Text className="text-white text-lg font-sbold">Promo</Text>
      </View>
      <View className="gap-2">
        <Text className="text-white tracking-tighter font-sbold text-4xl bg-[#222222] self-start">Buy one</Text>
        <Text className="text-white tracking-tighter font-sbold text-4xl bg-[#222222] self-start">get one Free</Text>
      </View>
    </ImageBackground>
  );
};

export default Advertisement;
