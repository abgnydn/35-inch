import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  Image,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { validate } from "react-email-validator";

const LoginScreen = () => {
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleEmailChange = (email) => {
        setEmail(email)
        validate(email) ? setIsValidEmail(true) : setIsValidEmail(false);
        console.log(isValidEmail);
    }
    const handlePasswordChange = (newPassword) => {
        setPassword(newPassword);
        if(newPassword != ""){
            setIsValidPassword(true);
        }else{
            setIsValidPassword(false);
        }
        console.log(isValidPassword);
    }
  


  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.topSection}>
          <Pressable style={styles.loginButton} onPress={() => {}}>
            <Text style={styles.loginButtonText}>LOG IN</Text>
          </Pressable>
          <Pressable style={styles.signUpButton} onPress={() => {}}>
            <Text style={styles.signUpButtonText}>SIGN UP</Text>
          </Pressable>
        </View>
        <View style={styles.mainSection}>
          <Text style={styles.loginHeadline}>Login First</Text>
          <Text style={styles.loginSubtext}>
            Hello there, sign in to continue!
          </Text>
          <Text style={styles.inputHeadline}>Username of email</Text>

          <View style={styles.inputFieldWrapper}>
            <TextInput
                style={styles.inputField}
                placeholder="Enter your username or email"
                textContentType="emailAddress"
                keyboardType="email-address"
                onChangeText={handleEmailChange}
                value={email}
            />
            <View style={styles.iconWrapper}>
              {isValidEmail && (
                <Image
                  source={require("./checked.png")}
                  style={styles.tickIcon}
                />
              )}
            </View>
          </View>
          <Text style={styles.inputHeadline}>Password</Text>
          <View style={styles.inputFieldWrapper}>
            <TextInput
              style={styles.inputField}
              placeholder="Enter your password"
              textContentType="password"
              secureTextEntry={true}
              onChangeText= {handlePasswordChange}
                value={password}
            />

            <View style={styles.iconWrapper}>
              {isValidPassword && (
                <Image
                  source={require("./checked.png")}
                  style={styles.tickIcon}
                />
              )}
            </View>
          </View>
          <Text style={styles.forgotText}>Forgot Password?</Text>
          <Pressable
            style={
              !(isValidEmail & isValidPassword) ? styles.signInButtonDeactive : styles.signInButtonActive
            }
          >
            <Text
              style={
                !(isValidEmail & isValidPassword)
                  ? styles.signInButtonTextDeactive
                  : styles.signInButtonTextActive
              }
            >
              Sign in
            </Text>
          </Pressable>
          <View style={styles.signUpField}>
            <Text style={styles.haveAccountText}>Don't have an account?</Text>
            <Text onPress={() => {}} style={styles.signUpText}>
              Sign Up
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#193fbd",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "column",
    alignContent: "flex-start",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    justifyContent: "flex-start",
    marginTop: 120,
  },
  topSection: {
    flexDirection: "row",
    marginBottom: 30,
    minWidth: "100%",
  },
  mainSection: {
    minWidth: "100%",
    paddingHorizontal: 30,
  },
  loginButton: {
    borderBottomColor: "#193fbd",
    borderBottomWidth: 3,
    justifyContent: "center",
    alignContent: "center",
    flexGrow: 1,
  },
  signUpButton: {
    justifyContent: "center",
    alignContent: "center",
    flexGrow: 1,
  },
  loginButtonText: {
    color: "#0c2350",
    fontWeight: "bold",
    paddingVertical: 13,
    textAlign: "center",
    fontSize: 16,
  },
  signUpButtonText: {
    color: "#80889b",
    paddingVertical: 13,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  loginHeadline: {
    fontWeight: "800",
    fontSize: 30,
    marginBottom: 5,
  },
  loginSubtext: {
    color: "#80889b",
    fontSize: 16,
    marginBottom: 20,
    fontWeight: "500",
  },
  inputHeadline: {
    fontWeight: "700",
    fontSize: 16,
    color: "#c2c7cf",
    marginBottom: 10,
  },
  inputFieldWrapper: {
    flexDirection: "row",
    marginBottom: 10,
  },
  inputField: {
    backgroundColor: "#f6f7ff",
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    paddingVertical: 14,
    paddingLeft: 18,
    fontSize: 18,
    flex: 1,
  },

  iconWrapper: {
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: "#f6f7ff",
    minWidth: 30,
    minHeight: 30,
  },
  tickIcon: {
    width: 30,
    height: 30,
    marginTop: 10,
    marginRight: 10,
  },
  forgotText: {
    color: "#193fbd",
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 25,
    marginTop: 10,
  },
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
  signUpField: {
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
  },
});
