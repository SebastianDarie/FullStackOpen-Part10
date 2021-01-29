import { useQuery } from '@apollo/react-hooks';
import { GET_REPOS } from '../graphql/queries';

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
