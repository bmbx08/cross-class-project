import React from 'react';
import { StyleSheet, TouchableOpacity, Image, Text } from 'react-native';

export default function SpecialItem({ item, selected, onSelect }) {
  return (
    <TouchableOpacity
      style={[
        styles.itemContainer,
        selected && styles.selectedItem,
      ]}
      onPress={() => onSelect(item.id)}
    >
      <Image source={item.image} style={styles.image} />
      <Text style={styles.text}>{item.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    width: 80,
    height: 100,
    margin: 7,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  selectedItem: {
    borderColor: '#ff6347',
    borderWidth: 2,
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  text: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: '600',
  },
});
