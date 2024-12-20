import React from "react";
import {StyleSheet, Text, TouchableOpacity} from "react-native";

const NextButton = ({navigation}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Menu")} style={styles.loginButton}>
      <Text style={styles.loginButtonText}>다음</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  loginButton: {
    backgroundColor: "#8D9429",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: "40%",
    paddingVertical: 8,
    borderRadius: 10,
  },
  loginButtonText: {
    color: "white",
  },
});

export default NextButton;