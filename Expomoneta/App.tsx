import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen';
import CreateAccountScreen from './screens/CreateAccountScreen';
import { RootStackParamList } from './screens/types'
import Signup from 'screens/Signup';
import ReedemTokenConfirmScreen from 'screens/RedeemTokenConfirmScreen';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="RedeemToken" component={ReedemTokenConfirmScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
