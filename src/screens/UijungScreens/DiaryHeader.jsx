import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

const DiaryHeader = ({ selectedWeather, weatherIcons, handleWeatherSelect }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>일기</Text>
      <View style={styles.dateRow}>
        <TextInput style={styles.dateInput} placeholder="년" keyboardType="numeric" />
        <TextInput style={styles.dateInput} placeholder="월" keyboardType="numeric" />
        <TextInput style={styles.dateInput} placeholder="일" keyboardType="numeric" />
        <TextInput style={styles.dateInput} placeholder="요일" />
        <Text style={styles.dateLabel}>날씨</Text>
      </View>
      <View style={styles.weatherIcons}>
        {weatherIcons.map((icon, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.weatherIcon,
              selectedWeather === icon && styles.selectedWeatherIcon,
            ]}
            onPress={() => handleWeatherSelect(icon)}
          >
            <Text style={styles.weatherText}>{icon}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 13,
    color: '#333',
  },
  dateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  dateInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 8,
    marginHorizontal: 5,
    textAlign: 'center',
    backgroundColor: '#fff',
  },
  dateLabel: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
    color: '#555',
  },
  weatherIcons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  weatherIcon: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  selectedWeatherIcon: {
    borderColor: '#007bff',
  },
  weatherText: {
    fontSize: 20,
  },
});

export default DiaryHeader;
