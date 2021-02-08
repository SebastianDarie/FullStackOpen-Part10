import { gql } from 'apollo-boost';

export const REPO_DATA = gql`
  fragment repoData on Repository {
    id
    fullName
    ratingAverage
    reviewCount
    stargazersCount
    forksCount
    ownerAvatarUrl
    description
    language
    url
  }
`;

export const REPO_REVIEW = gql`
  fragment repoReview on ReviewConnection {
    edges {
      node {
        id
        text
        rating
        repositoryId
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
`;
