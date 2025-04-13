import { View, Text } from "react-native";
import React from "react";
import { ImageBackground } from "react-native";

const Advertisement = () => {
  return (
    <ImageBackground
      className="w-6/7 h-48 rounded-3xl overflow-hidden"
      source={require("~/assets/images/advertisement-image.png")}
    >
      <Text>Advertisement</Text>
    </ImageBackground>
  );
};

export default Advertisement;
