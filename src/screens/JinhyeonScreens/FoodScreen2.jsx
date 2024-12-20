import React, { useState } from "react";
import { Text, View, TextInput, Image, Button, StyleSheet, ScrollView } from "react-native";

export default function FoodScreen2({ navigation }) {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");
  const [text5, setText5] = useState("");
  const [text6, setText6] = useState("");

  const answers = {
    text1: ["잣, 쌀", "쌀, 잣"],
    text2: ["한우, 옥수수", "옥수수, 한우"],
    text3: ["고추, 밤", "밤, 고추"],
    text4: ["곶감, 꼼장어", "꼼장어, 곶감"],
    text5: ["치즈, 대파", "대파, 치즈"],
    text6: ["감귤, 흑돼지", "흑돼지, 감귤"]
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>각 도별 특산물 입력하기</Text>
      <Image
        source={require("./지도.png")}
        style={styles.mapImage}
        resizeMode="contain"
      />

      <View style={styles.inputContainer}>
        <Text style={styles.label}>경기도:</Text>
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
        <Text style={styles.label}>강원도:</Text>
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
        <Text style={styles.label}>충청도:</Text>
        <TextInput
          style={styles.input}
          value={text3}
          onChangeText={setText3}
        />
        {text3 && (
                  <Text style={[styles.result, text1 === answers.text3 ? styles.correct : styles.incorrect]}>
                    {text3 === answers.text3 ? "정답입니다!" : "오답입니다."}
                  </Text>
                )}
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>경상도:</Text>
        <TextInput
          style={styles.input}
          value={text4}
          onChangeText={setText4}
        />
        {text4 && (
                  <Text style={[styles.result, text1 === answers.text4 ? styles.correct : styles.incorrect]}>
                    {text4 === answers.text4 ? "정답입니다!" : "오답입니다."}
                  </Text>
                )}
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>전라도:</Text>
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

      <View style={styles.inputContainer}>
        <Text style={styles.label}>제주도:</Text>
        <TextInput
          style={styles.input}
          value={text6}
          onChangeText={setText6}
        />
        {text6 && (
                  <Text style={[styles.result, text1 === answers.text6 ? styles.correct : styles.incorrect]}>
                    {text6 === answers.text6 ? "정답입니다!" : "오답입니다."}
                  </Text>
                )}
      </View>

      <Button
        title="다음 페이지"
        onPress={() => navigation.navigate("Food3")}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  mapImage: {
    width: "100%",
    height: 200,
    marginBottom: 20,
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
