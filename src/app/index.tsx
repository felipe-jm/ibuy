import { router } from "expo-router";

import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Index() {
  function handleSignUp() {
    router.navigate("/sign-up");
  }

  function handleSignIn() {
    router.navigate("/(drawer)/(tabs)");
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.label}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.label}>Criar conta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  button: {
    backgroundColor: "#000",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
});
