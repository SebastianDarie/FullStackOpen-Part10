import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.textPrimary,
    height: 60,
    paddingTop: Constants.statusBarHeight,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to='/' component={AppBarTab}>
          Repositories
        </Link>
        <Link to='/sign-in' component={AppBarTab}>
          Sign In
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;
