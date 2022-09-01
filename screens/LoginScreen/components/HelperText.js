import { StyleSheet, Text, View ,Pressable} from "react-native";
import React from "react";

const HelperText = () => {
  return (
    <View style={styles.signUpHelper}>
      <Text style={styles.haveAccountText}>Don't have an account?</Text>
      <Pressable onPress={() => {}}>
        <Text style={styles.signUpText}>Sign Up</Text>
      </Pressable>
    </View>
  );
};

export default HelperText;

const styles = StyleSheet.create({  
    signUpHelper: {
    flexDirection: "row",
    marginTop: 50,
    justifyContent: "center",
  },

  haveAccountText: {
    color: "#7c8698",
    fontSize: 14,
    marginRight: 5,
  },
  signUpText: {
    color: "#193fbd",
    fontSize: 14,
    fontWeight: "bold",
  },});
