import React from 'react';
import { FlatList, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useHistory } from 'react-router-native';
import RepositoryView from '../RepositoryView';
import SortingMenu from './SortingMenu';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListContainer = ({ repositories, criteria, setCriteria }) => {
  const history = useHistory();

  return (
    <FlatList
      data={repositories}
      keyExtractor={(repo) => repo.id}
      ListHeaderComponent={() => (
        <SortingMenu criteria={criteria} setCriteria={setCriteria} />
      )}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => history.push(`/${item.id}`)}>
          <View>
            <RepositoryView repo={item} />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default RepositoryListContainer;
