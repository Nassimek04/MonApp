import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function DetailsScreen({ route }) {
  const { id } = route.params;

  return (
    <View style={styles.container}>
      <Ionicons name="document-text" size={60} color="skyblue" />

      <Text style={styles.title}>Écran des détails</Text>
      <Text style={styles.subtitle}>ID reçu : {id}</Text>
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
    fontWeight: "600",
    marginVertical: 15,
  },
  subtitle: {
    fontSize: 20,
    color: "gray",
  },
});
