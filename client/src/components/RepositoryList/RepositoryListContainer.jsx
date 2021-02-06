import React, { Component } from 'react';
import { FlatList, View, StyleSheet, TouchableOpacity } from 'react-native';
import { withRouter } from 'react-router-native';
import RepositoryView from '../RepositoryView';
import FilterInput from './FilterInput';
import SortingMenu from './SortingMenu';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

class RepositoryListContainer extends Component {
  renderHeaderComponent = () => {
    const { criteria, setCriteria, filter, setFilter } = this.props;
    return (
      <>
        <FilterInput filter={filter} setFilter={setFilter} />
        <SortingMenu criteria={criteria} setCriteria={setCriteria} />
      </>
    );
  };

  render() {
    const { history, repositories } = this.props;

    return (
      <FlatList
        data={repositories}
        keyExtractor={(repo) => repo.id}
        ListHeaderComponent={this.renderHeaderComponent}
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
  }
}

export default withRouter(RepositoryListContainer);
