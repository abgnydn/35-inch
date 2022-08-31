import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import Logo from '../35-inch/components/Logo'
const OpeningScreen = ({styles, loading}) => {
  return (
    <View styles={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/V2.png')}
      />
    </View>
  )
}

export default OpeningScreen

