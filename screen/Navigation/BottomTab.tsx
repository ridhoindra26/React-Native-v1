import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../HomeScreen/HomeScreen';
import SecondScreen from '../SecondScreen/SecondScreen';
import ThirdScreen from '../ThirdScreen/ThirdScreen';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return <Home />;
};

const Second = () => {
  return <SecondScreen />;
};

const Third = () => {
  return <ThirdScreen />;
};

const App = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: string;

          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Second':
              iconName = 'arm-flex';
              break;
            case 'Third':
              iconName = 'account';
              break;
            default:
              iconName = 'home'; // default icon if none matches
              break;
          }

          return <MaterialCommunityIcons name={iconName} color={color} size={size} />;
        },
        tabBarActiveTintColor: 'blue',
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="Second"
        component={Second}
        options={{
          tabBarLabel: 'Second',
        }}
      />
      <Tab.Screen
        name="Third"
        component={Third}
        options={{
          tabBarLabel: 'Third',
        }}
      />
    </Tab.Navigator>
  );
};

const BottomTab = () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};

export default BottomTab;

const styles = StyleSheet.create({});
