import React from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import theme from '../theme';

const Button = ({ onPress, ...props }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View>
        <Text style={styles.button} {...props} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
    color: theme.colors.default,
    fontWeight: theme.fontWeights.bold,
    padding: 12,
    textAlign: 'center',
  },
});

export default Button;
