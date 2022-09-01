import { View, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import ForgotText from './ForgotText'
import SignInButton from './SignInButton'
import Header from './Header'
import HelperText from './HelperText'
import Input from './Input'
import { validate } from "react-email-validator";
const MainSection = () => {
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (email) => {
    setEmail(email);
    validate(email) ? setIsValidEmail(true) : setIsValidEmail(false);
  };
  const handlePasswordChange = (newPassword) => {
    setPassword(newPassword);
    if (newPassword != "") {
      setIsValidPassword(true);
    } else {
      setIsValidPassword(false);
    }
  };
  useEffect(() => {
    isValidEmail & isValidPassword ? setIsValid(true) : setIsValid(false);
  }, [isValidEmail, isValidPassword]);

  return (
    <View style={styles.mainSection}>
          <Header />
          <Input
            isValidEmail={isValidEmail}
            isValidPassword={isValidPassword}
            email={email}
            password={password}
            handleEmailChange={handleEmailChange}
            handlePasswordChange={handlePasswordChange}

          />
          <ForgotText />
          <SignInButton active={isValid} />
          <HelperText />
    </View>
  )
}

export default MainSection

const styles = StyleSheet.create({
    mainSection: {
        minWidth: "100%",
        paddingHorizontal: 30,
      },
})