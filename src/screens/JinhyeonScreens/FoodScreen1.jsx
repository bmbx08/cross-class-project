import React from "react";
import {Button, Text, View} from "react-native";

export default function FoodScreen1({navigation}) {
  return (
    <View>
      <Text>FoodScreen1</Text>
      <Button
        title="다음 페이지"
        onPress={() => navigation.navigate("Food2")}
      />
    </View>
  );
}
