import { StyleSheet, Text, View,Pressable } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome</Text>
      <Text style={styles.stream}>Stream Million Songs</Text>
      <Text style={styles.everything}>Everything is Really Free!</Text>
        <Pressable title="Sign In With Google" style={styles.buttonGoogle}><Text style={styles.googleButtonText}>Sign in with Google</Text></Pressable>
        <Pressable title="Create New Account"style={styles.buttonNewAccount}><Text style={styles.newAccountText}>Create New Account</Text></Pressable>
        <View style={styles.haveAccount}><Text style={styles.haveAccountText}>Already have an account?</Text><Text onPress={()=>{}} style={styles.signInText}>Sign In</Text></View>
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        marginHorizontal: 15
    },
    welcome:{
        fontSize: 30,
        marginBottom: 30,
        fontWeight: '900',
        color: 'white'
    },
    stream:{
        fontSize: 20,
        color: 'white',
        fontWeight: '600',
        marginBottom: 5

    },
    everything:{
        fontSize: 23,
        fontWeight: '800',
        color: 'white',
        marginBottom: 30
    },
    buttonGoogle:{
        paddingVertical: 15,
        paddingHorizontal: 90,
        backgroundColor: 'white',
        borderRadius: 10,
        marginVertical: 10,
        width: '100%'
        
    },
    googleButtonText:{
        color:'#193fbd',
        fontSize: 18,
        fontWeight: 'bold'

    },
    buttonNewAccount:{
        paddingVertical: 15,
        paddingHorizontal: 82,
        backgroundColor: '#193fbd',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'white',
        width: '100%',
        marginBottom: 20
    },
    newAccountText:{
        color:'white',
        fontSize: 18,
        fontWeight: 'bold',
        
    },
    haveAccount:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 100,
        marginHorizontal: 50

    },
    haveAccountText:{
        color: '#7c8698',
        fontSize: 14,
        marginRight: 5
    
    },
    signInText: {
        color: "white",
        fontSize: 14,
        fontWeight: 'bold',
        
    }
})