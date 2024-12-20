import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import LoginScreen from '../screens/KichanScreens/LoginScreen';
import PuzzleScreen from '../screens/KichanScreens/PuzzleScreen';
import MenuScreen from '../screens/KichanScreens/MenuScreen';
import FoodScreen1 from '../screens/JinhyeonScreens/FoodScreen1';
import FoodScreen2 from '../screens/JinhyeonScreens/FoodScreen2';
import FoodScreen3 from '../screens/UijungScreens/FoodScreen3';
import DiaryScreen from '../screens/UijungScreens/DiaryScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Food3'>
      <Stack.Screen name="Login" component={LoginScreen}/>
      <Stack.Screen name="Puzzle" component={PuzzleScreen}/>
      <Stack.Screen name="Menu" component={MenuScreen}/>
      <Stack.Screen name="Food1" component={FoodScreen1}/>
      <Stack.Screen name="Food2" component={FoodScreen2}/>
      <Stack.Screen name="Food3" component={FoodScreen3}/>
      <Stack.Screen name="Diary" component={DiaryScreen}/>
    </Stack.Navigator>
  )
}

export default StackNavigator
