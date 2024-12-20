import React from "react";
import {StyleSheet, Text, View} from "react-native";

const ProbResult = ({result}) => {
  return (
    <View style={styles.resultSection}>
      {result === "정답" && (
        <Text style={[styles.resultMsg, styles.correctMsg]}>정답입니다!</Text>
      )}
      {result === "오답" && (
        <Text style={[styles.resultMsg, styles.wrongMsg]}>오답입니다!</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  resultSection: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom:"3%",
  },
  resultMsg: {
    fontWeight: 600,
    textAlign: "center",
    fontSize: 18,
  },
  correctMsg: {
    color: "green",
  },
  wrongMsg: {
    color: "red",
  },
});

export default ProbResult;
