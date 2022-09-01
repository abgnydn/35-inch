import { StyleSheet, Text, View,Pressable } from "react-native";
import React from "react";

const SignInButton = ({active}) => {
  return (
    <Pressable
      style={!active ? styles.signInButtonDeactive : styles.signInButtonActive}
    >
      <Text
        style={
          !active
            ? styles.signInButtonTextDeactive
            : styles.signInButtonTextActive
        }
      >
        Sign in
      </Text>
    </Pressable>
  );
};

export default SignInButton;

const styles = StyleSheet.create({
    signInButtonDeactive: {
        backgroundColor: "#dde2f5",
        paddingVertical: 10,
        paddingHorizontal: 100,
        borderRadius: 10,
      },
      signInButtonTextDeactive: {
        color: "white",
        fontSize: 20,
        fontWeight: "700",
        textAlign: "center",
      },
    
      signInButtonActive: {
        backgroundColor: "#e7ebf8",
        paddingVertical: 10,
        paddingHorizontal: 100,
        borderRadius: 10,
      },
      signInButtonTextActive: {
        color: "#193fbd",
        fontSize: 20,
        fontWeight: "700",
        textAlign: "center",
      },
});
