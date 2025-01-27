import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // You can use any icon library you prefer

const SearchBar = ({ handleSearchChange , query}: any) => {
  
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Ionicons name="search" size={20} color="gray" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Search latest propertys..."
          placeholderTextColor="gray"
          value={query}
          onChangeText={handleSearchChange}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    width: '98%',
    padding: 7,
  },
  icon: {
    marginRight: 8,
    marginLeft: 10
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: '#333',
  },
  text: {
    marginTop: 20,
    fontSize: 16,
    color: '#333',
  },
});

export default SearchBar;
