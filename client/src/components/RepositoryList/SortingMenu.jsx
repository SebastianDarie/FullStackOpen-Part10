import React from 'react';
import RNPickerSelect from 'react-native-picker-select';

const SortingMenu = ({ criteria, setCriteria }) => {
  return (
    <RNPickerSelect
      value={criteria}
      onValueChange={(value) => setCriteria(value)}
      items={[
        { label: 'Latest repositories', value: 'latest_repos' },
        { label: 'Highest rated repositories', value: 'highest_rated' },
        { label: 'Lowest rated repositories', value: 'lowest_rated' },
      ]}
    />
  );
};

export default SortingMenu;
