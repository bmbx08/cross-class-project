import React from "react";
import {Button, Text, View} from "react-native";

const PuzzleScreen = ({navigation}) => {
  return (
    <View>
      <Text>PuzzleScreen</Text>
      <Button
        title="다음 페이지"
        onPress={() => navigation.navigate("Menu")}
      />
    </View>
  );
};

export default PuzzleScreen;
