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
