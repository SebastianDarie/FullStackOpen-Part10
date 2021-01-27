import { gql, useApolloClient, useMutation } from '@apollo/react-hooks';
import useAuth from './useAuth';

const SIGN_IN = gql`
  mutation Authorize($username: String!, $password: String!) {
    authorize(credentials: { username: $username, password: $password }) {
      accessToken
    }
  }
`;

const useSignIn = () => {
  const [authorize, result] = useMutation(SIGN_IN);
  const authStorage = useAuth();
  const apolloClient = useApolloClient();

  const signIn = async ({ username, password }) => {
    const { data } = await authorize({ variables: { username, password } });

    if (data && data.authorize) {
      await authStorage.setAccessToken(data.authorize.accessToken);
      await apolloClient.resetStore();
    }
    return data;
  };

  return [signIn, result];
};

export default useSignIn;
