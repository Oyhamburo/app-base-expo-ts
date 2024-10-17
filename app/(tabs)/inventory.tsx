import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function Home2() {
  const router = useRouter();

  const handleLogout = () => {
    // Lógica de logout
    router.replace("/auth/login");
  };

  return (
    <View className="flex-1 justify-center items-center p-4">
      <Text className="text-2xl font-bold mb-4">Welcome to Homezxczxc</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}
