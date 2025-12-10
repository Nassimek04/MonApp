import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function ArticleItem({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f5f5f5",
    padding: 20,
    borderRadius: 10,
    marginVertical: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
  },
});
