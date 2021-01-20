import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import FormikTextInput from './FormikTextInput';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  formikView: {
    backgroundColor: theme.colors.default,
    justifyContent: 'space-evenly',
    height: 200,
    paddingHorizontal: 12,
  },

  signText: {
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
    color: theme.colors.default,
    fontWeight: theme.fontWeights.bold,
    padding: 12,
    textAlign: 'center',
  },
});

const validationSchema = yup.object().shape({
  username: yup.string().trim().required('Username is required'),
  password: yup.string().trim().required('Password is required'),
});

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

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
            <TouchableWithoutFeedback onPress={handleSubmit}>
              <Text style={styles.signText}>Sign in</Text>
            </TouchableWithoutFeedback>
          </View>
        );
      }}
    </Formik>
  );
};

export default SignIn;
