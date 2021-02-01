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
});

const RepositoryItem = ({ repo = {}, repoID, single = false }) => {
  const [repoData, setRepoData] = useState(repo);
  const [getRepo, { data, loading }] = useLazyQuery(GET_REPO);
  const { id: idFromParams } = useParams();

  useEffect(() => {
    if (Object.keys(repoData).length === 0) {
      getRepo({ variables: { id: repoID || idFromParams } });
    }

    if (data && data.repository) {
      setRepoData(data.repository);
    }
  }, [data?.repository]);

  if (loading) {
    <Text>loading...</Text>;
  }

  return Object.keys(repoData).length !== 0 ? (
    <View style={!single && styles.mainContainer}>
      <SingleRepository repo={repoData} single={single} />
    </View>
  ) : null;
};

export default RepositoryItem;
