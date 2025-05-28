import { View, Text } from "react-native";
import { Pressable } from "react-native";
import React from "react";

const QuickSearch = ({ text }: { text: string }) => (
  <Pressable>
    <View className="flex py-1 pb-2 bg-[#00000020] rounded-xl px-3">
      <Text className="font-sbold">{text}</Text>
    </View>
  </Pressable>
);

export default QuickSearch;
