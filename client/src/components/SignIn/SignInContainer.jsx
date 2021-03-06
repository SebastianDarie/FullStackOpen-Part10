import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import FormikTextInput from '../FormikTextInput';
import theme from '../../theme';
import Button from '../Button';

const styles = StyleSheet.create({
  formikView: {
    backgroundColor: theme.colors.default,
    justifyContent: 'space-evenly',
    height: 200,
    paddingHorizontal: 12,
  },
});

const validationSchema = yup.object().shape({
  username: yup.string().trim().required('Username is required'),
  password: yup.string().trim().required('Password is required'),
});

const SignInContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => {
        return (
          <View style={styles.formikView}>
            <FormikTextInput name='username' placeholder='Username' />
            <FormikTextInput
              name='password'
              placeholder='Password'
              secureTextEntry
            />
            <Button onPress={handleSubmit}>Sign in</Button>
          </View>
        );
      }}
    </Formik>
  );
};

export default SignInContainer;
