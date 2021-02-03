import { useQuery } from '@apollo/react-hooks';
import { GET_REPO } from '../graphql/queries';

const useSingleRepo = (id) => {
  const { data, loading, refetch } = useQuery(GET_REPO, {
    fetchPolicy: 'cache-and-network',
    variables: { id },
  });

  let repo;

  if (data) {
    repo = data.repository;
  }

  return { repo, loading, refetch };
};

export default useSingleRepo;
