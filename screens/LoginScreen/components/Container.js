import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MainSection from './MainSection'
import ScreenTabs from './ScreenTabs'
const Container = () => {
  return (
    <View style={styles.container}>
        <ScreenTabs />
        <MainSection />
      </View>
  )
}

export default Container

const styles = StyleSheet.create({
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
})