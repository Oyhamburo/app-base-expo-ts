import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  ActivityIndicator,
  Pressable,
} from "react-native";
import { Link, useRouter } from "expo-router";
import { useAuth } from "../../src/hooks/useAuth";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register, loading } = useAuth(); // Usar el hook
  const router = useRouter();

  const handleRegister = async () => {
    if (name && email && password) {
      try {
        await register(name, email, password);
        router.replace("/home"); // Redirigir después del registro exitoso
      } catch (error) {
        console.error("Error en el registro", error);
      }
    }
  };

  return (
    <View className="flex-1 justify-center items-center p-4">
      <Text className="text-2xl font-bold mb-4">Register</Text>
      <TextInput
        className="border p-2 mb-4 w-full"
        placeholder="Name"
        onChangeText={setName}
        value={name}
      />
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
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Button title="Register" onPress={handleRegister} />
      )}
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
