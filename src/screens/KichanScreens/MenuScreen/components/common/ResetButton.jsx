import React from "react";
import {StyleSheet, Text, TouchableOpacity} from "react-native";

const ResetButton = ({handleReset}) => {


  return (
    <TouchableOpacity style={styles.button} onPress={()=>handleReset(0)}>
      <Text style={styles.text}>초기화</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems:"center",
    flexDirection: "row",
    backgroundColor: "#7a7a7a88",
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 15,
    marginRight: 5,
  },
  text: {
    textAlign: "center",
    color: "white",
    marginRight: 5,
  },
  image: {
    width: 15,
    height: 15,
  },
});

export default ResetButton;
