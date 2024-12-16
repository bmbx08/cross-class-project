import React from "react";
import {Button, Text, View} from "react-native";

export default function FoodScreen2({navigation}) {
  return (
    <View>
      <Text>FoodScreen2</Text>
      <Button
        title="다음 페이지"
        onPress={() => navigation.navigate("Food3")}
      />
    </View>
  );
}
