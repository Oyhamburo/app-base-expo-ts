import { Slot } from "expo-router";
import { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "../src/hooks/useAuth";

export default function Layout() {
  const router = useRouter();
  const { isAuthenticated, loading } = useAuth();

  useEffect(() => {
    if (!loading) {
      if (!isAuthenticated) {
        router.replace("/auth/login");
      } else {
        router.replace("/home");
      }
    }
  }, [loading, isAuthenticated]);

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  // El Slot siempre debe ser renderizado
  return <Slot />;
}
