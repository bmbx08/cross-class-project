import React from "react";
import {Image, StyleSheet, Text, TouchableOpacity} from "react-native";

const ProbButton = ({prob, item, handleAnswer}) => {
  return (
    <TouchableOpacity
      onPress={() => handleAnswer(item?.name)}
      style={
        (prob === "A" && styles.probButton) ||
        (prob === "B" && styles2.probButton)
      }
    >
      <Image source={item?.img} style={
        (prob==="A" && styles.buttonImage)||
        (prob==="B" && styles2.buttonImage)} />
      <Text style={styles.buttonText}>{item?.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  probButton: {
    width: "31%",
    maxHeight: 75,
    paddingVertical: "4%",
    backgroundColor: "#DADEAA",
    alignItems: "center",
    borderRadius: 12,
  },
  buttonImage: {
    width: 30,
    height: 30,
    marginBottom: "5%",
  },
  buttonText: {
    textAlign: "center",
    color: "white",
  },
});

const styles2 = StyleSheet.create({
  probButton: {
    width: "47%",
    paddingVertical: "4%",
    backgroundColor: "#DADEAA",
    alignItems: "center",
    borderRadius: 12,
  },
  buttonImage:{
    width: 40,
    height: 30,
    marginBottom: "5%",
  },
});

export default ProbButton;
