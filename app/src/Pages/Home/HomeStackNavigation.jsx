import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Produto from '../Produto/Produto';

const Stack = createStackNavigator();

export default function HomeStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Produto"
        component={Produto}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
