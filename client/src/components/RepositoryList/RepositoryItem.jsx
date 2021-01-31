import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { useLazyQuery } from '@apollo/react-hooks';
import { GET_REPO } from '../../graphql/queries';
import { useParams } from 'react-router-native';
import theme from '../../theme';
import SingleRepository from './SingleRepository';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: theme.colors.default,
  },

  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
  },

  buttonContainer: {
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
    justifyContent: 'center',
    margin: 8,
    padding: 12,
  },

  buttonText: {
    color: theme.colors.default,
    fontWeight: theme.fontWeights.bold,
  },
});

const RepositoryItem = ({ repo = {}, repoID, single = false }) => {
  const [repoData, setRepoData] = useState(repo);
  const [getRepo, { data, loading }] = useLazyQuery(GET_REPO);
  const { id: idFromParams } = useParams();

  useEffect(() => {
    if (!Object.keys(repoData).length) {
      getRepo({ variables: { id: repoID || idFromParams } });
    }

    if (data && data.repository) {
      setRepoData(data?.repository);
    }
  }, [data?.repository]);

  if (loading) {
    <Text>loading...</Text>;
  }

  return !Object.keys(repoData).length ? (
    <View style={!single && styles.mainContainer}>
      <SingleRepository repo={repoData} single={single} />
    </View>
  ) : null;
};

export default RepositoryItem;
