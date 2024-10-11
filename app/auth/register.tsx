import { useState } from "react";
import { View, Text, TextInput, Button, Pressable } from "react-native";
import { Link, useRouter } from "expo-router";

export default function Register() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    // Lógica de registro
    if (email && password) {
      // Simulación de registro exitoso
      router.replace("/home");
    }
  };

  return (
    <View className="flex-1 justify-center items-center p-4">
      <Text className="text-2xl font-bold mb-4">Register</Text>
      <TextInput
        className="border p-2 mb-4 w-full"
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        className="border p-2 mb-4 w-full"
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />
      <Link asChild href="/auth/login">
        <Pressable>
          <Text className="text-blue-500 mt-4">
            Already have an account? Login
          </Text>
        </Pressable>
      </Link>
    </View>
  );
}
