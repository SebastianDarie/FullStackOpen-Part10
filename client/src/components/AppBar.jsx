import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';
import { useApolloClient, useQuery } from '@apollo/react-hooks';
import useAuth from '../hooks/useAuth';
import { IS_AUTH } from '../graphql/queries';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.textPrimary,
    height: 60,
    paddingTop: Constants.statusBarHeight,
  },
});

const AppBar = () => {
  const { data } = useQuery(IS_AUTH);
  const authStorage = useAuth();
  const apolloClient = useApolloClient();

  const signOut = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
  };

  const auth =
    data && data.authorizedUser ? (
      <AppBarTab onPress={signOut}>Sign Out</AppBarTab>
    ) : (
      <Link to='/sign-in' component={AppBarTab}>
        Sign In
      </Link>
    );

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to='/' component={AppBarTab}>
          Repositories
        </Link>
        {auth}
      </ScrollView>
    </View>
  );
};

export default AppBar;
