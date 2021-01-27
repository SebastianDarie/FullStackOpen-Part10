import { gql } from '@apollo/react-hooks';

export const IS_AUTH = gql`
  query {
    authorizedUser {
      id
      username
    }
  }
`;
