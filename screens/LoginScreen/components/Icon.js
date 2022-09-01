import { StyleSheet, Text, View,Image} from 'react-native'
import React from 'react'

const Icon = ({isValid}) => {
  return (
    <View style={styles.iconWrapper}>
              {isValid && (
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