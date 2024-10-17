// Importaciones necesarias
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Slot, Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

const TabLayout = ({ title }: { title: string }) => {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: () => <Ionicons name="planet" size={24} color="gray" />,
        }}
      />
      <Tabs.Screen
        name="inventory"
        options={{
          title: "Inventory",
          tabBarIcon: () => <Ionicons name="home" size={24} color="gray" />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: () => <Ionicons name="person" size={24} color="gray" />,
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
