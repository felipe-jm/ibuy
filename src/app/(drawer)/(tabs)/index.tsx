import { router } from "expo-router";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Products() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de produtos</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.navigate("/(drawer)/(tabs)/product/1")}
      >
        <Text style={styles.buttonText}>Abrir produto</Text>
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
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});
