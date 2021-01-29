import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import useRepositories from '../hooks/useRepositories';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { repositories } = useRepositories();

  return <RepositoryListContainer repositories={repositories} />;
};

export const RepositoryListContainer = ({ repositories }) => {
  return (
    <FlatList
      data={repositories}
      keyExtractor={(repo) => repo.id}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem repo={item} />}
    />
  );
};

export default RepositoryList;
