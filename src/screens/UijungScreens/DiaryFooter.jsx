import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const DiartFooter = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>
        🧠 새로운 것을 배우고 경험하세요. 컴퓨터, 그림 그리기, 노래 부르기 등의 활동은 인지기능을 높일 수 있습니다.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#e6f7ff',
    borderRadius: 8,
  },
  footerText: {
    fontSize: 14,
    color: '#444',
    textAlign: 'center',
  },
});

export default DiartFooter;
