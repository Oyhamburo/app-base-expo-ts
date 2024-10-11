import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();

  const handleLogout = () => {
    // Lógica de logout, por ejemplo, eliminando el token de usuario
    router.replace("/auth/login");
  };

  return (
    <View className="flex-1 justify-center items-center p-4">
      <Text className="text-2xl font-bold mb-4">Welcome to Home</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}
