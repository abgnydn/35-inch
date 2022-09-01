import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <>
    <Text style={styles.loginHeadline}>Login First</Text>
          <Text style={styles.loginSubtext}>
            Hello there, sign in to continue!
          </Text>
    </>
  )
}

export default Header

const styles = StyleSheet.create({
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
})