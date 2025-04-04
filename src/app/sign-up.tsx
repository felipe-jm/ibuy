import { router } from "expo-router";
import { View, StyleSheet, Text, TouchableOpacity, Alert } from "react-native";

export default function SignUp() {
  function handleBack() {
    if (!router.canGoBack()) {
      return Alert.alert("Aviso", "Não é possível voltar");
    }

    router.back();
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBack}>
        <Text style={styles.back}>Voltar</Text>
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
  back: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
