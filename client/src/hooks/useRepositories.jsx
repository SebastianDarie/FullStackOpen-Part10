import { gql, useQuery } from '@apollo/react-hooks';

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

const useRepositories = () => {
  const { data, loading, refetch } = useQuery(GET_REPOS, {
    fetchPolicy: 'cache-and-network',
  });

  let repositories = [];

  if (data) {
    repositories = data.repositories.edges.map(({ node }) => node);
  }

  return { repositories, loading, refetch };
};

export default useRepositories;
