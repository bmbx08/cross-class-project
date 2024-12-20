import React, {useEffect, useState} from "react";
import {Alert, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import check from "../../../../assets/images/check.png"
import RedoButton from "./RedoButton";
import OutputSection from "./OutputSection";

const ProbContainer = ({wordArray, probNum,setProbComplete}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [clickedArray, setClickedArray] = useState([]);


  const handleWordPress = (word) => {
    console.log(word);
    if (word === wordArray[currentIndex]) {
        if(currentIndex===wordArray.length-1){
            Alert.alert("정답!","정답입니다!",[{text:"확인"}])
            setProbComplete(true);
        }
      setCurrentIndex(currentIndex + 1);
      setClickedArray([...clickedArray, word]);
    } else {
      setCurrentIndex(0);
      setClickedArray([]);
      Alert.alert("오답", "다시 시도하세요", [{text: "확인"}]);
    }
  };

  useEffect(() => {
    console.log("current Index",currentIndex);
  }, [currentIndex]);

  useEffect(() => {
    console.log("clickedArray",clickedArray);
  }, [clickedArray]);

  return (
    <View style={probStyles.probSection}>
      <Text style={probStyles.probNumber}>{probNum}</Text>
      <View style={probStyles.probContainer}>
        {wordArray.map((word, index) => (
            <View key={index} style={
              probNum===1&&[locStyles1[`word${index + 1}`],probStyles.word,probStyles.checkContainer] ||
              probNum===2&&[locStyles2[`word${index + 1}`],probStyles.word,probStyles.checkContainer] ||
              probNum===3&&[locStyles3[`word${index + 1}`],probStyles.word,probStyles.checkContainer]
              }>
                {currentIndex>index?
                (
                    <Image source={check} style={probStyles.check}/>
                ):(
                    <TouchableOpacity
                    onPress={() => handleWordPress(word)}            
                    >
                        <Text style={probStyles.text}>{word && word}</Text>
                    </TouchableOpacity>
                )}
            </View>
        ))}
      </View>

      <OutputSection clickedArray={clickedArray}/>
      
      <View style={probStyles.buttonSection}>
        <RedoButton setCurrentIndex={setCurrentIndex} setClickedArray={setClickedArray}/>
      </View>
    </View>
  );
};

const probStyles = StyleSheet.create({
  probSection: {
    width: "100%",
    alignItems: "left",
  },
  probNumber: {
    textAlign: "left",
    fontWeight: 600,
    fontSize: 20,
  },
  probContainer: {
    position: "relative",
    width: "100%",
    height: 240,
    borderWidth: 2,
    borderColor: "gray",
    borderRadius: 15,
  },
  buttonSection:{
    justifyContent:"center",
    alignItems:"flex-end",
    marginTop: 10,
  },
  text: {
    fontSize: 24,
  },
  word: {
    position: "absolute",
  },
  checkContainer:{
    justifyContent:"center",
    alignItems:"center",
    width: "20%",
  },
  check:{
    width: 30,
    height: 30,
    justifyContent:"center",
    alignItems:"center",
  },
});

const locStyles1 = StyleSheet.create({
  word1: {
    top: "25%",
    left: "75%",
  },
  word2: {
    top: "65%",
    left: "15%",
  },
  word3: {
    top: "62%",
    left: "39%",
  },
  word4: {
    top: "21%",
    left: "12%",
  },
  word5: {
    top: "5%",
    left: "59%",
  },
  word6: {
    top: "69%",
    left: "68%",
  },
});

const locStyles2 = StyleSheet.create({
  word1: {
    top: "5%",
    left: "15%",
  },
  word2: {
    top: "80%",
    left: "35%",
  },
  word3: {
    top: "47%",
    left: "15%",
  },
  word4: {
    top: "55%",
    left: "75%",
  },
  word5: {
    top: "10%",
    left: "45%",
  },
  word6: {
    top: "50%",
    left: "45%",
  },
});

const locStyles3 = StyleSheet.create({
  word1: {
    top: "82%",
    left: "75%",
  },
  word2: {
    top: "5%",
    left: "15%",
  },
  word3: {
    top: "80%",
    left: "50%",
  },
  word4: {
    top: "72%",
    left: "8%",
  },
  word5: {
    top: "45%",
    left: "70%",
  },
  word6: {
    top: "15%",
    left: "75%",
  },
});

export default ProbContainer;
