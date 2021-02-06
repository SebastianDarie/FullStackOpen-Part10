import React, { useEffect, useState } from 'react';
import TextInput from '../TextInput';

const FilterInput = ({ filter, setFilter }) => {
  const [input, setInput] = useState(filter);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFilter(input);
    }, 500);

    return () => clearInterval(timer);
  }, [input]);

  return (
    <TextInput
      placeholder='Filter repositories'
      value={input}
      onChangeText={setInput}
    />
  );
};

export default FilterInput;
