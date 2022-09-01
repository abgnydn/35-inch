import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ForgotText = () => {
  return (
    <Text style={styles.forgotText}>Forgot Password?</Text>
  )
}

export default ForgotText

const styles = StyleSheet.create({
    forgotText: {
        color: "#193fbd",
        fontWeight: "bold",
        fontSize: 15,
        marginBottom: 25,
        marginTop: 10,
      },
})