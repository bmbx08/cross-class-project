import React, { useState } from "react";
import { Button, Text, TextInput, View, StyleSheet, ScrollView } from "react-native";

export default function FoodScreen1({ navigation }) {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');
  const [text4, setText4] = useState('');
  const [text5, setText5] = useState('');

  const answers = {
    text1: "밤, 잣",
    text2: "치즈",
    text3: "꼼장어, 한우, 흑돼지", 
    text4: "감귤, 고추, 곶감, 대파",
    text5: "쌀, 옥수수",
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>12가지 특산물</Text>

      <View style={styles.wordsContainer}>
        <View style={styles.wordBox}><Text style={styles.wordText}>잣</Text></View>
        <View style={styles.wordBox}><Text style={styles.wordText}>밤</Text></View>
        <View style={styles.wordBox}><Text style={styles.wordText}>쌀</Text></View>
        <View style={styles.wordBox}><Text style={styles.wordText}>한우</Text></View>
        <View style={styles.wordBox}><Text style={styles.wordText}>옥수수</Text></View>
        <View style={styles.wordBox}><Text style={styles.wordText}>고추</Text></View>
        <View style={styles.wordBox}><Text style={styles.wordText}>곶감</Text></View>
        <View style={styles.wordBox}><Text style={styles.wordText}>꼼장어</Text></View>
        <View style={styles.wordBox}><Text style={styles.wordText}>치즈</Text></View>
        <View style={styles.wordBox}><Text style={styles.wordText}>대파</Text></View>
        <View style={styles.wordBox}><Text style={styles.wordText}>감귤</Text></View>
        <View style={styles.wordBox}><Text style={styles.wordText}>흑돼지</Text></View>
      </View>

      <Text style={styles.subHeader}>12가지 특산물을 알맞게 분류하세요.</Text>
      <Text style={styles.subHeader}>(한글순으로 입력)</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>지방[유지, 견과 및 당류]:</Text>
        <TextInput
          style={styles.input}
          value={text1}
          onChangeText={setText1}
        />
        {text1 && (
                  <Text style={[styles.result, text1 === answers.text1 ? styles.correct : styles.incorrect]}>
                    {text1 === answers.text1 ? "정답입니다!" : "오답입니다."}
                  </Text>
                )}
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>칼슘[우유 및 유제품]:</Text>
        <TextInput
          style={styles.input}
          value={text2}
          onChangeText={setText2}
        />
        {text2 && (
          <Text style={[styles.result, text2 === answers.text2 ? styles.correct : styles.incorrect]}>
            {text2 === answers.text2 ? "정답입니다!" : "오답입니다."}
          </Text>
        )}
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>단백질[고기 및 어육류]:</Text>
        <TextInput
          style={styles.input}
          value={text3}
          onChangeText={setText3}
        />
        {text3 && (
          <Text style={[styles.result, text3 === answers.text3 ? styles.correct : styles.incorrect]}>
            {text3 === answers.text3 ? "정답입니다!" : "오답입니다."}
          </Text>
        )}
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>비타민과 무기질[채소 및 과일류]:</Text>
        <TextInput
          style={styles.input}
          value={text4}
          onChangeText={setText4}
        />
        {text4 && (
          <Text style={[styles.result, text4 === answers.text4 ? styles.correct : styles.incorrect]}>
            {text4 === answers.text4 ? "정답입니다!" : "오답입니다."}
          </Text>
        )}
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>탄수화물[곡류 및 전분류]:</Text>
        <TextInput
          style={styles.input}
          value={text5}
          onChangeText={setText5}
        />
        {text5 && (
          <Text style={[styles.result, text5 === answers.text5 ? styles.correct : styles.incorrect]}>
            {text5 === answers.text5 ? "정답입니다!" : "오답입니다."}
          </Text>
        )}
      </View>

      <Button
        title="다음 페이지"
        onPress={() => navigation.navigate("Food2")}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexGrow: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  subHeader: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 5,
    color: "#555",
  },
  wordsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  wordBox: {
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "blue",
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: "#fff",
  },
  wordText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "blue",
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 35,
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    backgroundColor: "#FFF",
  },
  result: {
    marginTop: 5,
    fontSize: 14,
  },
  correct: {
    color: "green",
  },
  incorrect: {
    color: "red",
  },
});
