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

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading } = useAuth(); // Usar el hook
  const router = useRouter();

  const handleLogin = async () => {
    if (email && password) {
      try {
        await login(email, password);
        router.replace("/home");
      } catch (error) {
        console.error("Error en el inicio de sesión", error);
      }
    }
  };

  return (
    <View className="flex-1 justify-center items-center p-4">
      <Text className="text-2xl font-bold mb-4">Login</Text>
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
        <Button title="Login" onPress={handleLogin} />
      )}

      <Link asChild href="/auth/register">
        <Pressable>
          <Text className="text-blue-500 mt-4">Registrarse</Text>
        </Pressable>
      </Link>
    </View>
  );
}
