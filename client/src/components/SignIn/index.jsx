import React from 'react';
import useSignIn from '../../hooks/useSignIn';
import SignInContainer from './SignInContainer';

const SignIn = () => {
  const [signIn] = useSignIn();

  const onSubmit = async ({ username, password }) => {
    try {
      await signIn({ username, password });
    } catch (e) {
      console.log(e);
    }
  };

  return <SignInContainer onSubmit={onSubmit} />;
};

export default SignIn;
