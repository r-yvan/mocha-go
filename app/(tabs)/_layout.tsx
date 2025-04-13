import { View, Text } from "react-native";
import React from "react";
import { House } from "lucide-react-native";
import {
  IconCategory2,
  IconListDetails,
  IconUserSquareRounded,
} from "@tabler/icons-react-native";
import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          height: 60,
          paddingTop: 3,
          borderRadius: 20,
          marginHorizontal: 5,
          marginBottom: 5,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: () => <House color="#C67C4E" size={32} />,
          tabBarLabelStyle: {
            fontFamily: "Sora-Regular",
            color: "#C67C4E",
          },
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          headerShown: false,
          tabBarLabel: "Menu",
          tabBarIcon: () => <IconCategory2 color="#C67C4E" size={32} />,
          tabBarLabelStyle: {
            fontFamily: "Sora-Regular",
            color: "#C67C4E",
          },
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          headerShown: false,
          tabBarLabel: "Orders",
          tabBarIcon: () => <IconListDetails color="#C67C4E" size={32} />,
          tabBarLabelStyle: {
            fontFamily: "Sora-Regular",
            color: "#C67C4E",
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarLabel: "Profile",
          tabBarIcon: () => <IconUserSquareRounded color="#C67C4E" size={32} />,
          tabBarLabelStyle: {
            fontFamily: "Sora-Regular",
            color: "#C67C4E",
          },
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
