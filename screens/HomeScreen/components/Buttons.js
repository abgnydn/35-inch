import { StyleSheet, Text, View,Pressable } from "react-native";
import React from "react";

const Button = () => {
  return (
    <>
      <Pressable title="Sign In With Google" style={styles.buttonGoogle}>
        <Text style={styles.googleButtonText}>Sign in with Google</Text>
      </Pressable>
      <Pressable title="Create New Account" style={styles.buttonNewAccount}>
        <Text style={styles.newAccountText}>Create New Account</Text>
      </Pressable>
    </>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonGoogle: {
    paddingVertical: 15,
    paddingHorizontal: 90,
    backgroundColor: "white",
    borderRadius: 10,
    marginVertical: 10,
    width: "100%",
  },
  googleButtonText: {
    color: "#193fbd",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonNewAccount: {
    paddingVertical: 15,
    paddingHorizontal: 82,
    backgroundColor: "#193fbd",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "white",
    width: "100%",
    marginBottom: 20,
  },
  newAccountText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
