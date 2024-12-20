import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Header from './Header';
import Footer from './Footer';
import SpecialItem from './SpecialItem';

const specialItems = [
  { id: '1', name: '고추', image: require('./assets/chili.jpg') },
  { id: '2', name: '밤', image: require('./assets/chestnuts.jpg') },
  { id: '3', name: '잣', image: require('./assets/pine-nuts.jpg') },
  { id: '4', name: '사과', image: require('./assets/apple.jpg') },
  { id: '5', name: '옥수수', image: require('./assets/corn.jpg') },
  { id: '6', name: '쌀', image: require('./assets/rice.jpg') },
  { id: '7', name: '치즈', image: require('./assets/cheese.jpg') },
  { id: '8', name: '곶감', image: require('./assets/persimmon.jpg') },
  { id: '9', name: '소고기', image: require('./assets/beef.jpg') },
  { id: '10', name: '감자', image: require('./assets/potato.jpg') },
  { id: '11', name: '꼼장어', image: require('./assets/fish.jpg') },
  { id: '12', name: '매실', image: require('./assets/blue-plum.jpg') },
  { id: '13', name: '고구마', image: require('./assets/sweetpotato.jpg') },
  { id: '14', name: '대파', image: require('./assets/green-onions.jpg') },
  { id: '15', name: '귤', image: require('./assets/orange.jpg') },
  { id: '16', name: '흑돼지', image: require('./assets/wild-boar.jpg') },
];

const correctAnswers = [
  '6', '3', '9', '5', '7', '14', '8', '11', '2', '1', '15', '16',
];

export default function FoodScreen3({ navigation }) {

  const [selectedItems, setSelectedItems] = useState([]);

  const toggleSelectItem = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleCheckAnswers = () => {
    if (selectedItems.length === 0) {
      alert('아무것도 선택하지 않았습니다!');
      return;
    }

    const incorrectItems = selectedItems.filter((item) => !correctAnswers.includes(item));
    const correctCount = selectedItems.length - incorrectItems.length;

    if (incorrectItems.length === 0 && selectedItems.length === correctAnswers.length) {
      alert('정답입니다!');
    } else {
      alert(`틀린 갯수: ${incorrectItems.length}`);
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={specialItems}
        renderItem={({ item }) => (
          <SpecialItem
            item={item}
            selected={selectedItems.includes(item.id)}
            onSelect={toggleSelectItem}
          />
        )}
        keyExtractor={(item) => item.id}
        numColumns={4}
        contentContainerStyle={styles.list}
      />
      <Footer
        onCheckAnswers={handleCheckAnswers}
        onNextPage={() => navigation.navigate('Diary')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 10,
  },
  list: {
    alignItems: 'center',
    paddingBottom: 20,
  },
});