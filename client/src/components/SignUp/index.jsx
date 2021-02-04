import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import useSignIn from '../../hooks/useSignIn';
import useSignUp from '../../hooks/useSignUp';
import SignUpContainer from './SignUpContainer';

const SignUp = () => {
  const [signIn] = useSignIn();
  const [signUp] = useSignUp();

  const register = async ({ username, password }) => {
    try {
      await signUp({ username, password });
      await signIn({ username, password });
    } catch (error) {
      console.log(error);
    }
  };

  return <SignUpContainer onSubmit={register} />;
};

export default SignUp;

const styles = StyleSheet.create({});
