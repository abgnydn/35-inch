import { StyleSheet, Text, View,Image,ActivityIndicator } from 'react-native'
import React from 'react'

const LoadingScreen = ({styles, loading}) => {
  return (
    <View styles={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/V1.png')}
      />
      <ActivityIndicator size="small" color="#ffffff" />
    </View>
  )
}

export default LoadingScreen

