import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import { StatusBar } from 'expo-status-bar';

// import HomeScreen from './screen/HomeScreen/HomeScreen';
// import SecondScreen from './screen/SecondScreen/SecondScreen';
// import ThirdScreen from './screen/ThirdScreen/ThirdScreen';
import BottomTab from './screen/Navigation/BottomTab';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name='Home' component={HomeScreen}></Stack.Screen>
    //     <Stack.Screen name='Second' component={SecondScreen}></Stack.Screen>
    //     <Stack.Screen name='Third' component={ThirdScreen}></Stack.Screen>
    //   </Stack.Navigator>
    // </NavigationContainer>
    <View style={{flex: 1}}>
      {/* <StatusBar style="auto" /> */}
      <BottomTab />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
