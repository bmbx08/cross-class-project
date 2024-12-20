import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function Header() {
  return (
    <View style={styles.titleContainer}>
      <Image source={require('./assets/flower.png')} style={styles.icon} />
      <Text style={styles.title}>12가지 특산물 기억하기</Text>
      <Text style={styles.description}>
        앞서 기억해 둔 12가지 특산물을 모두 찾아 보세요.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    width: 30,
    height: 30,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  description: {
    textAlign: 'center',
    fontSize: 15,
    color: '#555',
    marginBottom: 20,
  },
});
