import { useApolloClient, useMutation } from '@apollo/react-hooks';
import { useHistory } from 'react-router-native';
import { SIGN_IN } from '../graphql/mutations';
import useAuth from './useAuth';

const useSignIn = () => {
  const [authorize, result] = useMutation(SIGN_IN);
  const authStorage = useAuth();
  const apolloClient = useApolloClient();
  const history = useHistory();

  const signIn = async ({ username, password }) => {
    const { data } = await authorize({ variables: { username, password } });

    if (data?.authorize) {
      await authStorage.setAccessToken(data.authorize.accessToken);
      await apolloClient.resetStore();
      history.push('/');
    }
    return data;
  };

  return [signIn, result];
};

export default useSignIn;
