import React, { useState } from 'react';
import { View } from 'react-native';
import SearchBar from './SearchBox'
import Propetys from './Propertys'

const Index = ({navigation}:any) => {
  const [query, setQuery] = useState('');
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('');

  const handleSearchChange = (text:string) => {
    setQuery(text);
  };

  const handleFilterSelect = (filter:string) => {
    setSelectedFilter(filter);
    setIsFilterVisible(false);
  };

  return (
    <View>
      <SearchBar
        handleSearchChange={handleSearchChange}
        query={query}
        isFilterVisible={isFilterVisible}
        setIsFilterVisible={setIsFilterVisible}
        handleFilterSelect={handleFilterSelect}
      />
      <Propetys navigation={navigation} filterdata={query} selectedFilter={selectedFilter} />
    </View>
  );
};

export default Index;
