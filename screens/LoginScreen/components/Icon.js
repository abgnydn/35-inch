import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Icon = ({isValidEmail}) => {
  return (
    <View style={styles.iconWrapper}>
              {isValidEmail && (
                <Image
                  source={require("../../../assets/checked.png")}
                  style={styles.tickIcon}
                />
              )}
            </View>
  )
}

export default Icon

const styles = StyleSheet.create({
    iconWrapper: {
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        backgroundColor: "#f6f7ff",
        minWidth: 30,
        minHeight: 30,
      },
      tickIcon: {
        width: 30,
        height: 30,
        marginTop: 10,
        marginRight: 10,
      }
})