import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Ionicons name="settings" size={60} color="lightblue" />
      <Text style={styles.title}>Paramètres</Text>
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
    marginTop: 20,
    fontWeight: "600",
  },
});
