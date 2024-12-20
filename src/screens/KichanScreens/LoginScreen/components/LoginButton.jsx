import React from "react";
import {Text, TouchableOpacity} from "react-native";

const LoginButton = ({buttonStyle,buttonText,handleLoginButton}) => {
  return (
    <TouchableOpacity
      title="로그인"
      onPress={handleLoginButton}
      style={buttonStyle}
    >
        <Text style={buttonText}>
            로그인
        </Text>

    </TouchableOpacity>
  );
};

export default LoginButton;
