import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import Header from './DiaryHeader';
import MainSection from './DiarySection';
import Footer from './DiaryFooter';

export default function DiaryScreen() {
  const [selectedWeather, setSelectedWeather] = useState(null); 
  const weatherIcons = ['☀️', '⛅', '☁️', '🌧️', '❄️'];

  // MainSection에서 사용하는 상태들
  const [locations, setLocations] = useState('');
  const [people, setPeople] = useState('');
  const [purchasedItems, setPurchasedItems] = useState('');
  const [expenses, setExpenses] = useState('');
  const [news, setNews] = useState('');
  const [plans, setPlans] = useState('');
  const [importantTasks, setImportantTasks] = useState(['', '', '', '']);

  const handleWeatherSelect = (icon) => {
    setSelectedWeather(icon);
  };

  const handleTimeChange = (index, text) => {
    const updatedTasks = [...importantTasks];
    updatedTasks[index] = text.trim();
    setImportantTasks(updatedTasks);
  };

  const handleCheckAnswers = () => {
    const isAllFieldsFilled =
      selectedWeather &&
      locations.trim() &&
      people.trim() &&
      purchasedItems.trim() &&
      expenses.trim() &&
      news.trim() &&
      plans.trim() &&
      importantTasks.every((task) => task.trim()); 

    if (!isAllFieldsFilled) {
      Alert.alert('알림', '모든 항목을 입력해주세요!');
    } else {
      Alert.alert('저장 완료', '입력 내용이 저장되었습니다!');
    }
  };

  return (
    <View style={styles.container}>
      <Header 
        selectedWeather={selectedWeather} 
        weatherIcons={weatherIcons} 
        handleWeatherSelect={handleWeatherSelect} 
      />
      <MainSection 
        locations={locations}
        setLocations={setLocations}
        people={people}
        setPeople={setPeople}
        purchasedItems={purchasedItems}
        setPurchasedItems={setPurchasedItems}
        expenses={expenses}
        setExpenses={setExpenses}
        news={news}
        setNews={setNews}
        plans={plans}
        setPlans={setPlans}
        importantTasks={importantTasks}
        handleTimeChange={handleTimeChange}
      />
      <TouchableOpacity style={styles.checkButton} onPress={handleCheckAnswers}>
        <Text style={styles.buttonText}>저장하기</Text>
      </TouchableOpacity>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f9fc',
  },
  checkButton: {
    alignSelf: 'center',
    marginVertical: 10,
    paddingVertical: 12,
    paddingHorizontal: 25,
    backgroundColor: '#007bff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    marginTop: 5,
    marginBottom: -13,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
  },
});
