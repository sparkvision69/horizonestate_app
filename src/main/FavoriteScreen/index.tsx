import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';

const Index = () => {
  const [favorites, setFavorites] = useState<any>([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      const savedFavorites = await AsyncStorage.getItem('favorites');
      if (savedFavorites) {
        setFavorites(JSON.parse(savedFavorites));
      }
    };
    
    fetchFavorites();
  }, []);

  const handleDelete = async (id:string) => {
    const updatedFavorites = favorites.filter((item: { _id: string; }) => item._id !== id);
    setFavorites(updatedFavorites);
    await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const renderFavoriteItem = ({ item }:any) => {
    return (
      <View style={styles.card}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.location}>{item.location}</Text>
          <Text style={styles.price}>{item.price}</Text>
          <TouchableOpacity onPress={() => handleDelete(item._id)} style={styles.deleteIcon}>
            <Ionicons name="trash-bin" size={24} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={favorites}
      renderItem={renderFavoriteItem}
      keyExtractor={(item) => item._id}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 10,
    marginTop: 25
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  infoContainer: {
    padding: 10,
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  location: {
    fontSize: 14,
    color: '#777',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2ecc71',
  },
  deleteIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default Index;
