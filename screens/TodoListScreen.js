import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import AppBar from '../components/AppBar';

export default function TodoListScreen({ navigation }) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // On simule un chargement
    setTimeout(() => {
      setTodos([
        { id: 1, title: 'Faire les courses' },
        { id: 2, title: 'Sortir le chien' },
        { id: 3, title: 'Coder une app RN' },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <Text style={{ fontSize: 20 }}>Chargement...</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <AppBar title="Mes tâches" />

      <View style={styles.container}>
        <FlatList
          data={todos}
          keyExtractor={(i) => i.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() => navigation.navigate('Détails', { id: item.id, title: item.title })}
            >
              <Text style={styles.itemText}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  item: { padding: 12, backgroundColor: '#f2f2f2', marginBottom: 8, borderRadius: 6 },
  itemText: { fontSize: 18 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
