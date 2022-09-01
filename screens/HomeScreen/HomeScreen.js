import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Container from "./components/Container";
const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
        <Container navigation={navigation}/>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#193fbd",
    alignItems: "center",
    justifyContent: "center",
  },
});
