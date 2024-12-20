import React from "react";
import {StyleSheet, Text, View} from "react-native";

const OutputSection = ({clickedArray}) => {
  return (
    <View style={styles.outputRow}>
      <Text style={styles.openBracket}>(</Text>
      <View style={styles.outputSection}>
        {clickedArray.map((word) => (
            <Text style={styles.outputText}>{word}</Text>
        ))}
      </View>
      <Text style={styles.closeBracket}>)</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  outputRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: "3%",
  },
  outputSection:{
    flexDirection: "row",
    justifyContent: "center",
    width:"80%",
  },
  outputText: {
    textAlign: "left",
    marginHorizontal: "5",
    fontSize: 16,
  },
  openBracket:{
    fontSize: 16,
  },
  closeBracket:{
    fontSize: 16,
  }
});

export default OutputSection;
