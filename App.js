import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View,Image } from "react-native";
import WelcomeScreen from "./screens/WelcomeScreen";
import LoginScreen from "./screens/LoginScreen";
export default function App() {
  const [isOpened,setIsOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <View style={styles.container}>
      {/* <Image style={styles.logo} source={require("./assets/V2.png")} /> */}
      <LoginScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#193fbd",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },
});
