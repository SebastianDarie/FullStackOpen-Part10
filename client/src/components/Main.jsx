import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';
import RepositoryList from './RepositoryList/index';
import theme from '../theme';
import AppBar from './AppBar';
import SignIn from './SignIn/index';
import SingleRepository from './RepositoryList/SingleRepository';
import ReviewForm from './ReviewForm';
import SignUp from './SignUp';
import UserReviews from './UserReviews';

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
        <Route path='/sign-in'>
          <SignIn />
        </Route>
        <Route path='/sign-up'>
          <SignUp />
        </Route>
        <Route path='/create-review'>
          <ReviewForm />
        </Route>
        <Route path='/my-reviews'>
          <UserReviews />
        </Route>
        <Route path='/:id'>
          <SingleRepository />
        </Route>
        <Redirect to='/' />
      </Switch>
    </View>
  );
};

export default Main;
