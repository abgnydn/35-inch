import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const InputHeadline = ({text}) => {
  return (
    <Text style={styles.inputHeadline}>{text}</Text>

  )
}

export default InputHeadline

const styles = StyleSheet.create({
    inputHeadline: {
        fontWeight: "700",
        fontSize: 16,
        color: "#c2c7cf",
        marginBottom: 14,
      },
      
})