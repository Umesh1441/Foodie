import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from './src/screen/LoginSignupScreen/WelcomeScreen.js'
import LoginScreen from './src/screen/LoginSignupScreen/LoginScreen.js'
import SignupScreen from './src/screen/LoginSignupScreen/SignupScreen.js'
import HomeScreen from './src/screen/HomeScreen.js';
import Userprofile from './src/screen/Userprofile.js';
import Productpage from './src/screen/Productpage.js';
import UserCart from './src/screen/UserCart.js';
import TrackOrders from './src/screen/TrackOrders.js';
import Placeorder from './src/screen/Placeorder.js'

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='welcomepage'>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="LoginScreen" component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Productpage" component={Productpage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Userprofile" component={Userprofile}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="UserCart" component={UserCart}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Placeorder" component={Placeorder}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="SignupScreen" component={SignupScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="HomeScreen" component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="TrackOrders" component={TrackOrders}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
