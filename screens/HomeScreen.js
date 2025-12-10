import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Ionicons name="home" size={60} color="brown" />

      <Text style={styles.title}>Écran d'accueil</Text>

      <Button
        title="ALLER AUX DÉTAILS"
        onPress={() => navigation.navigate("Details", { id: 42 })}
        color="#1E90FF"
      />
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
    fontSize: 26,
    marginVertical: 20,
    fontWeight: "600",
  },
});
