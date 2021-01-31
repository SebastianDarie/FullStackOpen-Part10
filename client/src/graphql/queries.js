import { gql } from '@apollo/react-hooks';
import { REPO_DATA, REPO_REVIEW } from './fragments';

export const GET_REPOS = gql`
  query {
    repositories {
      edges {
        node {
          ...repoData
        }
      }
    }
  }

  ${REPO_DATA}
`;

export const GET_REPO = gql`
  query getRepo($id: ID!) {
    repository(id: $id) {
      ...repoData
      ...repoReview
    }
  }

  ${REPO_DATA}
  ${REPO_REVIEW}
`;

export const IS_AUTH = gql`
  query {
    authorizedUser {
      id
      username
    }
  }
`;
