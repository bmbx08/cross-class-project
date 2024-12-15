import React from "react";
import { Button, StatusBar, StyleSheet, Text, View } from "react-native";

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>LoginScreen</Text>
      <StatusBar style="auto" />
      <Button
        title="다음 페이지"
        onPress={() => navigation.navigate('Puzzle')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoginScreen;
