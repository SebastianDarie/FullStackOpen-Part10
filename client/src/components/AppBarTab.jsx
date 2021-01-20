import React from 'react';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.default,
    fontFamily: theme.fonts.main,
    fontSize: theme.fontSizes.body,
    fontWeight: theme.fontWeights.bold,
    padding: 10,
  },
});

const AppBarTab = (props) => {
  return (
    <TouchableWithoutFeedback>
      <Text style={styles.text} {...props} />
    </TouchableWithoutFeedback>
  );
};

export default AppBarTab;
