import { useState } from "react";
import { View, Text, TextInput, Button, Pressable } from "react-native";
import { Link, useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Lógica de autenticación
    if (email && password) {
      // Simulación de login exitoso
      router.replace("/home");
    }
  };

  return (
    <View className="items-center justify-center flex-1 p-4">
      <Text className="mb-4 text-2xl font-bold">Login</Text>
      <TextInput
        className="w-full p-2 mb-4 border"
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        className="w-full p-2 mb-4 border"
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />
      <Button title="Login" onPress={handleLogin} />
      <Link asChild href="/auth/register">
        <Pressable>
          <Text className="mt-4 text-blue-500">Register</Text>
        </Pressable>
      </Link>
    </View>
  );
}
