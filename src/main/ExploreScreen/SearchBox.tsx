import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
  Pressable,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBarWithFilter = ({
  handleSearchChange,
  query,
  isFilterVisible,
  setIsFilterVisible,
  handleFilterSelect,
}:any) => {
  const filters = ['Low to High', 'High to Low', 'Villa', 'Flat', 'Home'];

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Ionicons name="search" size={20} color="gray" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Search properties..."
          placeholderTextColor="gray"
          value={query}
          onChangeText={handleSearchChange}
        />
        <TouchableOpacity
          onPress={() => setIsFilterVisible(true)}
          style={styles.filterIcon}
        >
          <Ionicons name="filter" size={20} color="gray" />
        </TouchableOpacity>
      </View>

      <Modal
        transparent={true}
        visible={isFilterVisible}
        animationType="slide"
        onRequestClose={() => setIsFilterVisible(false)}
      >
        <Pressable
          style={styles.overlay}
          onPress={() => setIsFilterVisible(false)}
        />
        <View style={styles.filterContainer}>
          <Text style={styles.filterHeader}>Filter Options</Text>
          <FlatList
            data={filters}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.filterOption}
                onPress={() => handleFilterSelect(item)}
              >
                <Text style={styles.filterText}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginTop: 25,
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
    marginLeft: 10,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: '#333',
  },
  filterIcon: {
    marginLeft: 10,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  filterContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  filterHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  filterOption: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  filterText: {
    fontSize: 16,
    color: '#333',
  },
});

export default SearchBarWithFilter;
