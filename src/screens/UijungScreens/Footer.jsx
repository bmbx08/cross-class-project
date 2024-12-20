import React from 'react';
import { StyleSheet, Text, Button, TouchableOpacity } from 'react-native';

export default function Footer({ onCheckAnswers, onNextPage }) {
  return (
    <>
      <TouchableOpacity style={styles.button} onPress={onCheckAnswers}>
        <Text style={styles.buttonText}>정답확인</Text>
      </TouchableOpacity>
      <Text style={styles.footerText}>
        각 지역의 특산물을 맛보러 가족들과 함께 국내 여행을 떠나보세요.
      </Text>
      <Button title="다음 페이지" onPress={onNextPage} />
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ff6347',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
    marginTop: 20,
  },
});
