import React from "react";
import {StyleSheet, Text, TouchableOpacity} from "react-native";

const SubmitButton = ({handleSubmit}) => {


  return (
    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
      <Text style={styles.text}>입력</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems:"center",
    backgroundColor: "#7A7A7A",
    flexDirection: "row",
    backgroundColor: "gray",
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 15,
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

export default SubmitButton;
