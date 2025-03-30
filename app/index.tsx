import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Onboarding = () => {
  return (
    <View className="flex-1 justify-end h-full w-full bg-[#050505]">
      <Image
        source={require("~/assets/images/onboarding-image.png")}
        className="w-full absolute top-0"
      />
      <LinearGradient
        colors={["#00000000", "#000", "#000", "#000"]}
        className="absolute bottom-0 w-full h-1/2"
      />
      <View className="w-full h-1/2 justify-center items-center bg-gradient-to-t from-black to-transparent">
        <Text className="text text-white text-4xl text-center font-sbold">
          Fall in love with Coffee in a blissful delight
        </Text>
        <TouchableOpacity>
          
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Onboarding;
