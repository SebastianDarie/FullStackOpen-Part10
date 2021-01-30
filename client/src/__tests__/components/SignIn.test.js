import React from 'react';
import { render, fireEvent, waitFor, act } from '@testing-library/react-native';
import SignInContainer from '../../components/SignIn/SignInContainer';

const credentials = {
  username: 'kalle',
  password: 'password',
};

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      const onSubmit = jest.fn();

      const { getByPlaceholderText, getByText } = render(
        <SignInContainer onSubmit={onSubmit} />
      );

      fireEvent.changeText(
        getByPlaceholderText('Username'),
        credentials.username
      );
      fireEvent.changeText(
        getByPlaceholderText('Password'),
        credentials.password
      );

      await act(async () => {
        await fireEvent.press(getByText('Sign in'));
      });

      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit.mock.calls[0][0]).toEqual(credentials);
      });
    });
  });
});
