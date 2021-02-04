import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import FormikTextInput from '../FormikTextInput';
import theme from '../../theme';
import Button from '../Button';

const styles = StyleSheet.create({
  formikView: {
    backgroundColor: theme.colors.default,
    justifyContent: 'space-evenly',
    height: 300,
    paddingHorizontal: 12,
  },
});

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(1, 'Username is too short')
    .max(30, 'Username is too long')
    .required('Username is required'),
  password: yup
    .string()
    .min(4, 'Password is too short')
    .max(40, 'Password is too long')
    .required('Password is required'),
  confirmation: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .required('Password confirmation is required'),
});

const SignUpContainer = ({ onSubmit }) => {
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
            <FormikTextInput
              name='confirmation'
              placeholder='Password confirmation'
              secureTextEntry
            />
            <Button onPress={handleSubmit}>Sign up</Button>
          </View>
        );
      }}
    </Formik>
  );
};

export default SignUpContainer;
