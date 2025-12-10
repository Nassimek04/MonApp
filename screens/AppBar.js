import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AppBar() {
  return (
    <SafeAreaView>
      <View style={styles.appBar}>
        <Text style={styles.title}>Mon Application</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appBar: {
    height: 56,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
