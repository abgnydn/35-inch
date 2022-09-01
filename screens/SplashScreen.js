import { View,ActivityIndicator,Image,StyleSheet } from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/V2.png')}/>
      <Progress.Circle size={50} indeterminate={true} color='rgba(255,255,255,1)' thickness={1} borderWidth={6} direction='counter-clockwise' endAngle= {0.6}/>
    </View>
  ) 
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: "center"
    },
    logo:{
        width: 160,
        height: 160,
        marginBottom: 90
    }
});
export default SplashScreen