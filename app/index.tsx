import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

const Onboarding = () => {
  const router = useRouter();
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
      <View className="w-full h-1/2 justify-center px-4 items-center bg-gradient-to-t from-black to-transparent">
        <Text className="text text-white text-4xl text-center font-sbold mb-3">
          Fall in love with Coffee in a blissful delight
        </Text>
        <Text className="text-white/50 font-slight px-5 text-center mb-10">
          Welcome to our cozy coffee corner, where every cup is delightful for
          you!!
        </Text>
        <TouchableOpacity onPress={() => router.push("/(tabs)")}>
          <View className="bg-[#C67C48] px-20 py-4 pb-5 rounded-3xl">
            <Text className="text-white tex-lg font-sbold">Get Started</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Onboarding;
