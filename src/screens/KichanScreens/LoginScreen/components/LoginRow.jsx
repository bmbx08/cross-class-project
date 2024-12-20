import React from "react";
import {StyleSheet, TextInput} from "react-native";

const LoginRow = ({type, setData}) => {
    const handleLoginInput=(event)=>{
        setData(event.nativeEvent.text);
    }

  return (
    <>
      <TextInput
        onChange={handleLoginInput}
        id={`${type}`}
        secureTextEntry={type === "pass" ? true : false}
        placeholder={`${type === "id" ? "아이디" : "비밀번호"}`}
        style={styles.loginRow}
      />
    </>
  );
};

const styles = StyleSheet.create({
  loginRow: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    marginBottom: 10,
    paddingLeft: 10,
  },
});

export default LoginRow;
