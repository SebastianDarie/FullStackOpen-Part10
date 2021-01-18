import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  textInput: {
    borderColor: theme.colors.main,
    borderRadius: 4,
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 12,
  },

  errorInput: {
    borderColor: theme.colors.error,
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [styles.textInput, error && styles.errorInput, style];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
