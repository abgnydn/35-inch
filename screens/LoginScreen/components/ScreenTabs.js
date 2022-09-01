import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const ScreenTabs = () => {
  return (
    <View style={styles.topSection}>
          <Pressable style={styles.loginButton} onPress={() => {}}>
            <Text style={styles.loginButtonText}>LOG IN</Text>
          </Pressable>
          <Pressable style={styles.signUpButton} onPress={() => {}}>
            <Text style={styles.signUpButtonText}>SIGN UP</Text>
          </Pressable>
        </View>
  )
}

export default ScreenTabs

const styles = StyleSheet.create({
    topSection: {
        flexDirection: "row",
        marginBottom: 30,
        minWidth: "100%",
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
})