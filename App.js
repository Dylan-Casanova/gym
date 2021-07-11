import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/test';
import Test1 from './components/navbar';

export default function App() {
  return (
    <View style={styles.container}>
     <Test1 />
      <Text>Hello world! Dylan is better than Tim at fifa</Text>
      <Header />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
