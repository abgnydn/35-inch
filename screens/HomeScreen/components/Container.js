import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Buttons from "./Buttons";
import HeadText from './HeadText';
import HelperText from './HelperText';

const Container = ({navigation}) => {
  return (
    <View style={styles.container}>
    <HeadText /> 
    <Buttons />
    <HelperText navigation={navigation} /> 
    </View>
  )
}

export default Container

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-end",
        marginHorizontal: 15,
      },
})