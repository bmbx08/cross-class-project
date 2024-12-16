import React from "react";
import {Button, Text, View} from "react-native";

const MenuScreen = ({navigation}) => {
  return (
    <View>
      <Text>MenuScreen</Text>
      <Button
        title="다음 페이지"
        onPress={() => navigation.navigate("Food1")}
      />
    </View>
  );
};

export default MenuScreen;
