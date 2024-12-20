import React, {useEffect, useState} from "react";
import {Button, Image, ScrollView, StyleSheet, Text, View} from "react-native";
import plant from "../../../assets/images/plant.png";
import ProbContainer from "./components/ProbContainer";
import NextButton from "./components/NextButton";

const PuzzleScreen = ({navigation}) => {
  const [probComplete1, setProbComplete1] = useState(false);
  const [probComplete2, setProbComplete2] = useState(false);
  const [probComplete3, setProbComplete3] = useState(false);

  const wordsArray = [
    ["낮말은", "새가", "듣고", "밤말은", "쥐가", "듣는다"],
    ["길고", "짧은", "것은", "대어", "보아야", "안다"],
    ["발", "없는", "말이", "천", "리", "간다"],
  ];

  useEffect(() => {
    console.log(probComplete2);
  }, [probComplete2]);

  return (
    <ScrollView contentContainerStyle={styles.pageContainer}>
      <Text style={styles.probInfo}>
        <Image source={plant} style={styles.plantIcon} />
        다음 글자들을 옳은 순서로 선택하여 속담을 완성해보세요.
      </Text>

      {wordsArray.map((array, index) => (
        <ProbContainer
          wordArray={array}
          probNum={index + 1}
          key={index+1}
          setProbComplete={
            (index === 0 && setProbComplete1) ||
            (index === 1 && setProbComplete2) ||
            (index === 2 && setProbComplete3)
          }
        />
      ))}

      {probComplete1 && probComplete2 && probComplete3 && (
      <View style={styles.nextButtonSection}>
        <NextButton navigation={navigation} />
      </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    backgroundColor: "#fff",
    paddingHorizontal: "5%",
    paddingBottom:"20%",
  },
  probInfo: {
    paddingTop: "6%",
    fontSize: 18,
    marginBottom: 10,
  },
  plantIcon: {
    width: 20,
    height: 20,
  },
  nextButtonSection:{
    justifyContent:"center",
    alignItems:"center",
    marginTop: 20,
    marginBottom: "10%",
  },
});

export default PuzzleScreen;
