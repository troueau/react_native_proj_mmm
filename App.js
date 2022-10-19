import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './components/HomeScreen';
import FilmListScreen from './components/FilmListScreen';
import FilmDetailsScreen from './components/FilmDetailsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function MainStackApp () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ title: 'Home' }}
      />
      <Stack.Screen
        name="FilmListScreen"
        component={FilmListScreen}
        options={{ title: 'Film List' }}
      />
      <Stack.Screen
        name="FilmDetailsScreen"
        component={FilmDetailsScreen}
        options={{ title: 'Film Detail' }}
      />
    </Stack.Navigator>
    </NavigationContainer>
  ); 
};

