import { gql } from '@apollo/react-hooks';

export const GET_REPOS = gql`
  query {
    repositories {
      edges {
        node {
          id
          fullName
          ratingAverage
          reviewCount
          stargazersCount
          forksCount
          ownerAvatarUrl
          description
          language
        }
      }
    }
  }
`;

export const IS_AUTH = gql`
  query {
    authorizedUser {
      id
      username
    }
  }
`;
