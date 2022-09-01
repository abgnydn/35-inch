import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HeadText = () => {
  return (
    <>
    <Text style={styles.welcome}>Welcome</Text>
    <Text style={styles.stream}>Stream Million Songs</Text>
    <Text style={styles.everything}>Everything is Really Free!</Text>
    </>
  )
}

export default HeadText

const styles = StyleSheet.create({
    welcome: {
        fontSize: 30,
        marginBottom: 30,
        fontWeight: "900",
        color: "white",
      },
      stream: {
        fontSize: 20,
        color: "white",
        fontWeight: "600",
        marginBottom: 5,
      },
      everything: {
        fontSize: 23,
        fontWeight: "800",
        color: "white",
        marginBottom: 30,
      },
})