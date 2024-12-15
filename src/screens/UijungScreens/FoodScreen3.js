import React from "react";
import {Button, Text, View} from "react-native";

export default function FoodScreen3({navigation}) {
  return (
    <View>
      <Text>FoodScreen3</Text>
      <Button title="다음 페이지" onPress={() => navigation.navigate("Diary")} />
    </View>
  );
}
