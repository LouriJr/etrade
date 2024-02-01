import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Teste from './Teste';

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
        name="Abacaxi"
        component={Teste}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
