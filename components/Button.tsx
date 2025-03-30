import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Button = ({ text }: { text: string }) => {
  return (
    <TouchableOpacity>
      <View className="bg-[#C67C48]">
        <Text className="text-white tex-lg font-sbold">{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
