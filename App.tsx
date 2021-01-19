import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, World! 🎉</Text>
      <StatusBar style="light" />
      <Image style={styles.image} source={require('./assets/world.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5A7A7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff'
  },
  image: {
    width: 500,
    height: 500,
    position: 'absolute',
    bottom: -100,
    right: -150,
    resizeMode: 'cover'
  }
});
