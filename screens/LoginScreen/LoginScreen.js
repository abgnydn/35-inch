import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  Image,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Container from "./components/Container";

const LoginScreen = () => {
  
  return (
    <SafeAreaView style={styles.safeArea}>
      <Container />
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  //Safe Area
  safeArea: {
    flex: 1,
    backgroundColor: "#193fbd",
    alignItems: "center",
    justifyContent: "center",
  },
});
