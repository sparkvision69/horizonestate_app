import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import Toppropertys from './toppropertys'
import SearchBox from './SearchBox'
import LatestPropertys from './LatestPropertys';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({ navigation }: any) => {
  const [query, setQuery] = useState('');

  const handleSearchChange = (text: any) => {
    setQuery(text);
  };

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const userid = await AsyncStorage.getItem("userid");
        console.log("User ID:", userid);
      } catch (error) {
        console.error("Error fetching user ID:", error);
      }
    };

    fetchUserId();
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <View style={styles.leftContainer}>
          <Text style={styles.appName}>HorizonEstate</Text>
        </View>
        <View style={styles.rightContainer}>
          <Image
            source={require('../../../assets/profile.png')}
            style={styles.profileImage}
          />
        </View>
      </View>
      <Toppropertys navigation={navigation}  />
      <SearchBox handleSearchChange={handleSearchChange} query={query} />
      <LatestPropertys navigation={navigation} filterdata={query} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginTop: 20,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 30,
    height: 30,
    marginLeft: 10
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E3A8A',
    fontFamily: 'Roboto',
    letterSpacing: 2,
  },
  rightContainer: {
    padding: 5,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
});

export default HomeScreen;
