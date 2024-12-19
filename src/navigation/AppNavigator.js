import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from '../screens/MainScreen';
import QRCodeScreen from '../screens/QRCodeScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainScreen} options={{ title: 'Accueil' }} />
        <Stack.Screen name="QRCode" component={QRCodeScreen} options={{ title: 'QR Code' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
