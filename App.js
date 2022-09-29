import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import FilmListScreen from './components/FilmListScreen';
import FilmDetailsScreen from './components/FilmDetailsScreen';

const Stack = createNativeStackNavigator();

export default function MainStackApp () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
        />
        <Stack.Screen
          name="FilmListScreen"
          component={FilmListScreen}
        />
        <Stack.Screen
          name="FilmDetailsScreen"
          component={FilmDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  ); 
};

