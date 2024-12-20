import React from "react";
import {Image, StyleSheet, Text, TouchableOpacity} from "react-native";
import redo from "../../../../assets/images/redo.png";
import redo2 from "../../../../assets/images/redo2.png";

const RedoButton = ({setCurrentIndex,setClickedArray}) => {
  const handleRedoButton=()=>{
    setCurrentIndex(0);
    setClickedArray([]);
  }

  return (
    <TouchableOpacity style={styles.button} onPress={handleRedoButton}>
      <Text style={styles.text}>다시풀기</Text>
      <Image source={redo} style={styles.image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems:"center",
    backgroundColor: "gray",
    flexDirection: "row",
    backgroundColor: "gray",
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 10,
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

export default RedoButton;
