import { gql } from '@apollo/react-hooks';
import { REPO_DATA } from './fragments';

export const GET_REPOS = gql`
  query getRepos(
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
  ) {
    repositories(orderBy: $orderBy, orderDirection: $orderDirection) {
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
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }

  ${REPO_DATA}
`;

export const IS_AUTH = gql`
  query {
    authorizedUser {
      id
      username
    }
  }
`;
