import React, { useState } from "react";
import {Button, Image, ScrollView, StyleSheet, Text, View} from "react-native";
import plant from "../../../assets/images/plant.png";
import imageObject from "./components/imageObject";
import MenuBox from "./components/MenuBox";
import ProblemA from "./components/ProblemA";
import ProblemB from "./components/ProblemB";
import NextButton from "./components/common/NextButton";

const MenuScreen = ({navigation}) => {
  const [probAComplete,setProbAComplete]=useState(false);
  const [probBComplete,setProbBComplete]=useState(false);

  const menuData = [
    {
      name: "매실차",
      img: imageObject.plum,
      effects: ["소화 촉진", "변비 예방"],
      price: "4,500",
    },
    {
      name: "녹차",
      img: imageObject.green,
      effects: ["스트레스 해소", "비만, 당뇨 예방"],
      price: "4,900",
    },
    {
      name: "도라지차",
      img: imageObject.balloon,
      effects: ["기관지 케어"],
      price: "5,300",
    },
    {
      name: "대추차",
      img: imageObject.jujube,
      effects: ["스트레스 해소", "수면질 향상"],
      price: "7,800",
    },
    {
      name: "감잎차",
      img: imageObject.persimmon,
      effects: ["비타민C 함유", "피부 케어"],
      price: "7,600",
    },
    {
      name: "오미자차",
      img: imageObject.omija,
      effects: ["혈액순환 증진", "치매 예방"],
      price: "8,700",
    },
  ];

  return (
    <ScrollView contentContainerStyle={pageStyles.pageContainer}>
     {/* style={pageStyles.pageContainer}> */}
      <View style={pageStyles.probInfoSection}>
      <Image source={plant} style={pageStyles.plantIcon} />
        <Text style={pageStyles.probInfo}>다음 메뉴판을 보고 문제를 풀어보세요.</Text>
      </View>

      <View style={pageStyles.menuBoxContainer}>
        <MenuBox menuData={menuData}/>
      </View>
      
      <View style={pageStyles.problemContainer}>
        <ProblemA menuData={menuData} setProbComplete={setProbAComplete}/>
        <ProblemB menuData={menuData} setProbComplete={setProbBComplete}/>
      </View>

      <View style={pageStyles.nextButtonSection}>
        <NextButton navigation={navigation} />
      </View>
    </ScrollView>
  );
};

const pageStyles = StyleSheet.create({
  pageContainer: {
    paddingHorizontal: "5%",
    paddingTop:"8%",
    paddingBottom: "70%",
  },
  probInfoSection:{
    flexDirection:"row",
    alignItems:"center",
    marginBottom: 10,
  },
  probInfo: {
    fontSize: 18,
  },
  plantIcon: {
    width: 24,
    height: 24,
    marginBottom:5,
    marginRight:2,
  },
  menuBoxContainer:{
    alignItems:"center",
  },
  problemContainer:{

  },
  nextButtonSection:{
    justifyContent:"center",
    alignItems:"center",
    // marginTop: 20,
  },
});

export default MenuScreen;
