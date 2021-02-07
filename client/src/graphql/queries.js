import { gql } from '@apollo/react-hooks';
import { REPO_DATA } from './fragments';

export const GET_REPOS = gql`
  query getRepos(
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $filter: String
    $first: Int
    $after: String
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $filter
      first: $first
      after: $after
    ) {
      edges {
        node {
          ...repoData
        }
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        totalCount
        hasNextPage
      }
    }
  }

  ${REPO_DATA}
`;

export const GET_REPO = gql`
  query getRepo($id: ID!, $first: Int, $after: String) {
    repository(id: $id) {
      ...repoData
      reviews(first: $first, after: $after) {
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
          cursor
        }
        pageInfo {
          endCursor
          startCursor
          totalCount
          hasNextPage
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
