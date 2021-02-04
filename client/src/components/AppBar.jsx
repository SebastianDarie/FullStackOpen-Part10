import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Link, useHistory } from 'react-router-native';
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
  const authStorage = useAuth();
  const apolloClient = useApolloClient();
  const history = useHistory();
  const { data } = useQuery(IS_AUTH);

  const signOut = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
    history.push('/');
  };

  const auth = data?.authorizedUser ? (
    <>
      <Link to='/create-review' component={AppBarTab}>
        Create a review
      </Link>
      <AppBarTab onPress={signOut}>Sign Out</AppBarTab>
    </>
  ) : (
    <>
      <Link to='/sign-in' component={AppBarTab}>
        Sign in
      </Link>
      <Link to='/sign-up' component={AppBarTab}>
        Sign up
      </Link>
    </>
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
