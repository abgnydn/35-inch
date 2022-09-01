import React from 'react'
import InputField from './InputField'
import InputHeadline from './InputHeadline'

const Input = ({isValidEmail,isValidPassword,email,password,handleEmailChange,handlePasswordChange}) => {
  return (
    <>
      <InputHeadline text="Username of email"/>
          <InputField placeholder="Enter your username or email" textContentType="emailAddress" keyboardType="email-address" onChangeText={handleEmailChange} value={email} text="Email" isValid={isValidEmail}/>
          <InputHeadline text="Password"/>
          <InputField placeholder="Enter your password" textContentType="password" secureTextEntry={true} onChangeText={handlePasswordChange} value={password} text="Password" value={password} isValid={isValidPassword}/>
          </>
  )
}

export default Input
