import React, {useEffect, useState} from "react";
import {
  Alert,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import LoginRow from "./components/LoginRow";
import LoginButton from "./components/LoginButton";

const LoginScreen = ({navigation}) => {
  const [userId, setUserId] = useState("");
  const [userPass, setUserPass] = useState("");

  const handleLoginButton=()=>{
    if(userId==="user"&&userPass==="1234"){
      console.log("logged in!!");
      navigation.navigate("Puzzle");
    } else{
      Alert.alert("오류","정보가 일치하지 않습니다.",[{text:"확인"}])
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.loginTitle}>로그인</Text>
      <View style={styles.loginContainer}>
        <LoginRow type="id" setData={setUserId} />
        <LoginRow type="pass" setData={setUserPass} />
        <View style={styles.loginButtonSection}>
          <LoginButton buttonStyle={styles.loginButton} buttonText={styles.loginButtonText} handleLoginButton={handleLoginButton}/>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 2,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 50,
  },
  loginTitle: {
    fontSize: 28,
    marginBottom: 15,
  },
  loginContainer: {
    width: "80%",
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "gray",
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  loginButtonSection:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    marginTop:10,
  },
  loginButton:{
    backgroundColor:"#8D9429",
    justifyContent:"center",
    alignItems:"center",
    paddingHorizontal:20,
    paddingVertical:8,
    borderRadius:10,
  },
  loginButtonText:{
    color:"white",
  },
});

export default LoginScreen;
