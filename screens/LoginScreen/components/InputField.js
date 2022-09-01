import { StyleSheet, Text, View,TextInput } from "react-native";
import React from "react";
import Icon from "./Icon";
const InputField = ({
  placeholder,
  textContentType,
  keyboardType,
  onChangeText,
  value,
  text,
  secureTextEntry,
  email,
  password,
  isValid
}) => {
  return (
    <>
      <View style={styles.inputFieldWrapper}>
        <TextInput
          style={styles.inputField}
          placeholder={placeholder}
          textContentType={textContentType}
          keyboardType={keyboardType}
          onChangeText={onChangeText}
          value={email}
          secureTextEntry={secureTextEntry}
        />
        <Icon isValid={isValid}/>
      </View>
    </>
  );
};

export default InputField;

const styles = StyleSheet.create({
  inputFieldWrapper: {
    flexDirection: "row",
    marginBottom: 10,
  },
  inputField: {
    backgroundColor: "#f6f7ff",
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    paddingVertical: 14,
    paddingLeft: 18,
    fontSize: 18,
    flex: 1,
  },
});
