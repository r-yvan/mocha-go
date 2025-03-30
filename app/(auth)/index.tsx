import { View, Text } from "react-native";
import React from "react";
import { useFonts } from "expo-font";

const index = () => {
  const [areFontsLoaded] = useFonts({
    "Poppins-Regular": require("~/assets/fonts/poppins/Poppins-Regular.ttf"),
    "Poppins-Bold": require("~/assets/fonts/poppins/Poppins-Bold.ttf"),
    "Poppins-Light": require("~/assets/fonts/poppins/Poppins-Light.ttf"),
    "Poppins-Thin": require("~/assets/fonts/poppins/Poppins-Thin.ttf"),
    "Poppins-ExtraLight": require("~/assets/fonts/poppins/Poppins-ExtraLight.ttf"),
    "Poppins-SemiBold": require("~/assets/fonts/poppins/Poppins-SemiBold.ttf"),
    "Sora-Regular": require("~/assets/fonts/sora/Sora-Regular.ttf"),
    "Sora-Bold": require("~/assets/fonts/sora/Sora-Bold.ttf"),
    "Sora-Light": require("~/assets/fonts/sora/Sora-Light.ttf"),
    "Sora-Thin": require("~/assets/fonts/sora/Sora-Thin.ttf"),
    "Sora-ExtraLight": require("~/assets/fonts/sora/Sora-ExtraLight.ttf"),
    "Sora-ExtraBold": require("~/assets/fonts/sora/Sora-ExtraBold.ttf"),
  });

  return (
    <View>
      <Text>index</Text>
    </View>
  );
};

export default index;
