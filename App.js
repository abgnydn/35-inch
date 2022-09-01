import React, { useState, useEffect, useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AnimatedSplash from "react-native-animated-splash-screen";
import SplashScreen from "./screens/SplashScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  const setAppLoaded = () => {
    setInterval(() => {
      setAppIsReady(true);
    }, 20000);
  };

  return (
    <AnimatedSplash
      translucent={true}
      isLoaded={appIsReady}
      backgroundColor={"#193fbd"}
      customComponent={<SplashScreen />}
    >
      <NavigationContainer onReady={setAppLoaded}>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </AnimatedSplash>
  );
}
