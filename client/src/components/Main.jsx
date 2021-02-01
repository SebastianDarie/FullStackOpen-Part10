import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';
import RepositoryList from './RepositoryList/index';
import theme from '../theme';
import AppBar from './AppBar';
import SignIn from './SignIn/index';
import RepositoryItem from './RepositoryList/RepositoryItem';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.main,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route exact path='/'>
          <RepositoryList />
        </Route>
        <Route exact path='/sign-in'>
          <SignIn />
        </Route>
        <Route exact path='/create-review'>
          <>hello</>
        </Route>
        <Route path='/:id'>
          <RepositoryItem single />
        </Route>
        <Redirect to='/' />
      </Switch>
    </View>
  );
};

export default Main;
