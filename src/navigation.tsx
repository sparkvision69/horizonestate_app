import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

import Landing from './landing/index';
import SignupPage from './auth/singup';
import LoginPage from './auth/login';

import HomePage from './main/HomeScreen';
import ExplorePage from './main/ExploreScreen/index';
import ProfilePage from './main/ProfileScreen';
import Chat from './main/ChatScreen/index'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator, View } from 'react-native';
import Details from './main/DetailsScreen/index';
import FavoriteScreen from './main/FavoriteScreen/index'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: any;
          // Define different icon types for different routes
          if (route.name === 'Home') iconName = 'home';
          else if (route.name === 'Explore') iconName = 'compass';
          else if (route.name === 'Favorite') iconName = 'favorite'; // MaterialIcons icon for favorite
          else if (route.name === 'Profile') iconName = 'person-circle-sharp';

          // Return appropriate icon component (Ionicons or MaterialIcons)
          if (route.name === 'Favorite') {
            return <MaterialIcons name={iconName} size={size} color={color} />;
          } else {
            return <Ionicons name={iconName} size={size} color={color} />;
          }
        },
        tabBarActiveTintColor: '#f58a42',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Explore" component={ExplorePage} />
      <Tab.Screen name="Favorite" component={FavoriteScreen} />
      <Tab.Screen name="Profile" component={ProfilePage} />
    </Tab.Navigator>
  );
}

export default function AppNavigation() {
  const [userid, setUserid] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const storedUserId = await AsyncStorage.getItem('userid');
        setUserid(storedUserId);
      } catch (error) {
        console.error('Error fetching user ID:', error);
      } finally {
        setIsLoading(false); 
      }
    };

    fetchUserId();
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#f58a42" />
      </View>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={userid ? 'Main' : 'Login'}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Signup" component={SignupPage} />
        <Stack.Screen name="Main" component={Tabs} />
        <Stack.Screen name='Chat' component={Chat}/>
        <Stack.Screen name='Details' component={Details} options={{
          headerShown: true,
          headerTitle: "Property Details"
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
