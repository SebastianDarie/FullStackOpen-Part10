import { gql } from '@apollo/react-hooks';
import { REPO_DATA, REPO_REVIEW } from './fragments';

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
        ...repoReview
      }
    }
  }

  ${REPO_DATA}
  ${REPO_REVIEW}
`;

export const IS_AUTH = gql`
  query getAuthorizedUser($includeReviews: Boolean = false) {
    authorizedUser {
      id
      username
      reviews @include(if: $includeReviews) {
        ...repoReview
      }
    }
  }

  ${REPO_REVIEW}
`;
