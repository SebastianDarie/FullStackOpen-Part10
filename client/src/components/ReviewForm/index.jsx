import React from 'react';
import { TouchableWithoutFeedback, Text, View } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useMutation } from '@apollo/react-hooks';
import { CREATE_REVIEW } from '../../graphql/mutations';
import { useHistory } from 'react-router-native';
import FormikTextInput from '../FormikTextInput';
import theme from '../../theme';
import Button from '../Button';

const validationSchema = yup.object().shape({
  ownerName: yup.string().trim().required('Repository owner name is required'),
  repositoryName: yup.string().trim().required('Repository name is required'),
  rating: yup
    .number()
    .min(0, 'Minimum rating is 0')
    .max(100, 'Maximum rating is 100')
    .required('Rating is required'),
  review: yup.string().trim(),
});

const ReviewForm = () => {
  const [createReview] = useMutation(CREATE_REVIEW, {
    async onCompleted(data) {
      history.push(`/${data.createReview.repositoryId}`);
    },
  });
  const history = useHistory();

  const submitReview = async (input) => {
    try {
      createReview({
        variables: { ...input, rating: parseInt(input.rating) },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={{
        ownerName: '',
        repositoryName: '',
        rating: '',
        text: '',
      }}
      onSubmit={submitReview}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => {
        return (
          <View
            style={{
              backgroundColor: theme.colors.default,
              justifyContent: 'space-evenly',
              height: 400,
              paddingHorizontal: 12,
              paddingVertical: 8,
            }}
          >
            <FormikTextInput
              name='ownerName'
              placeholder='Repository owner name'
            />
            <FormikTextInput
              name='repositoryName'
              placeholder='Repository  name'
            />
            <FormikTextInput
              name='rating'
              placeholder='Rating'
              keyboardType='numeric'
            />
            <FormikTextInput name='text' placeholder='Review' multiline />
            <Button onPress={handleSubmit}>Create a review</Button>
          </View>
        );
      }}
    </Formik>
  );
};

export default ReviewForm;
