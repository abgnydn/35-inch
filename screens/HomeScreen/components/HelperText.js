import { StyleSheet, Text, View ,Pressable} from "react-native";
import React from "react";

const HelperText = ({navigation}) => {
  return (
    <View style={styles.haveAccount}>
      <Text style={styles.haveAccountText}>Already have an account?</Text>

      <Pressable onPress={() => navigation.navigate("Login")}>
        <Text style={styles.signInText}>Sign In</Text>
      </Pressable>
    </View>
  );
};

export default HelperText;

const styles = StyleSheet.create({
  haveAccount: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 100,
    marginHorizontal: 50,
  },
  haveAccountText: {
    color: "#7c8698",
    fontSize: 14,
    marginRight: 5,
  },
  signInText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
});
