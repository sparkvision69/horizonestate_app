import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';

const PropertyData = [
  {
    _id: "64a1bcf0a9c3e124ab1c0f01",
    title: "Luxury Villa",
    location: "New York",
    price: "$120000",
    rating: 4.8,
    category: "villa",
    disc: "A stunning luxury villa in the heart of New York, featuring spacious interiors, modern amenities, and a prime location close to the city’s best attractions.",
    image: require("../../../assets/property/villa.jpg"),
  },
  {
    _id: "64a1bcf0a9c3e124ab1c0f02",
    title: "Cozy House",
    location: "Los Angeles",
    price: "$85000",
    rating: 4.5,
    category: "house",
    disc: "A charming and cozy house in Los Angeles, perfect for small families. Enjoy a quiet neighborhood and proximity to city hotspots.",
    image: require("../../../assets/property/house.jpg"),
  },
  {
    _id: "64a1bcf0a9c3e124ab1c0f03",
    title: "Modern Flat",
    location: "Chicago",
    price: "$60000",
    rating: 4.2,
    category: "flat",
    disc: "A sleek and stylish flat in Chicago with modern designs and easy access to downtown amenities. Ideal for urban living.",
    image: require("../../../assets/property/flat.jpeg"),
  },
  {
    _id: "64a1bcf0a9c3e124ab1c0f04",
    title: "Beachside Villa",
    location: "Miami",
    price: "$150000",
    rating: 4.9,
    category: "villa",
    disc: "A luxurious beachside villa in Miami offering stunning ocean views, private pools, and a serene environment for relaxation.",
    image: require("../../../assets/property/villa1.jpg"),
  },
  {
    _id: "64a1bcf0a9c3e124ab1c0f05",
    title: "Countryside House",
    location: "Austin",
    price: "$75000",
    rating: 4.4,
    category: "house",
    disc: "A peaceful countryside house in Austin with a large garden and rustic charm, ideal for those seeking a calm and natural lifestyle.",
    image: require("../../../assets/property/house1.jpg"),
  },
  {
    _id: "64a1bcf0a9c3e124ab1c0f06",
    title: "Penthouse Flat",
    location: "Seattle",
    price: "$110000",
    rating: 4.7,
    category: "flat",
    disc: "A premium penthouse flat in Seattle with panoramic city views, spacious living areas, and upscale finishes.",
    image: require("../../../assets/property/flat1.jpg"),
  },
  {
    _id: "64a1bcf0a9c3e124ab1c0f07",
    title: "Garden Villa",
    location: "San Diego",
    price: "$125000",
    rating: 4.6,
    category: "villa",
    disc: "An elegant garden villa in San Diego featuring lush greenery, luxurious interiors, and a tranquil outdoor setting.",
    image: require("../../../assets/property/villa2.jpg"),
  },
  {
    _id: "64a1bcf0a9c3e124ab1c0f08",
    title: "Suburban House",
    location: "Denver",
    price: "$70000",
    rating: 4.3,
    category: "house",
    disc: "A family-friendly suburban house in Denver with a spacious backyard, excellent schools nearby, and a welcoming community.",
    image: require("../../../assets/property/house2.jpg"),
  },
  {
    _id: "64a1bcf0a9c3e124ab1c0f09",
    title: "City Center Flat",
    location: "Boston",
    price: "$95000",
    rating: 4.5,
    category: "flat",
    disc: "A vibrant city-center flat in Boston offering modern conveniences and easy access to cultural and historical attractions.",
    image: require("../../../assets/property/flat2.jpg"),
  },
  {
    _id: "64a1bcf0a9c3e124ab1c0f10",
    title: "Mountain View Villa",
    location: "Salt Lake City",
    price: "$140000",
    rating: 4.7,
    category: "villa",
    disc: "A picturesque mountain view villa in Salt Lake City with stunning scenery and luxurious amenities, perfect for a getaway retreat.",
    image: require("../../../assets/property/villa3.jpg"),
  },
  {
    _id: "64a1bcf0a9c3e124ab1c0f11",
    title: "Modern House",
    location: "Portland",
    price: "$80000",
    rating: 4.5,
    category: "house",
    disc: "A contemporary modern house in Portland with sleek architecture and energy-efficient features, located in a vibrant neighborhood.",
    image: require("../../../assets/property/house3.jpg"),
  },
  {
    _id: "64a1bcf0a9c3e124ab1c0f12",
    title: "Studio Flat",
    location: "Las Vegas",
    price: "$55000",
    rating: 4.1,
    category: "flat",
    disc: "A cozy studio flat in Las Vegas, ideal for individuals or couples looking for an affordable yet modern home close to the action.",
    image: require("../../../assets/property/flat3.jpg"),
  },
  {
    _id: "64a1bcf0a9c3e124ab1c0f13",
    title: "Private Villa",
    location: "San Francisco",
    price: "$160000",
    rating: 4.8,
    category: "villa",
    disc: "A secluded and private villa in San Francisco with exquisite interiors and a peaceful atmosphere, perfect for luxury living.",
    image: require("../../../assets/property/villa4.jpg"),
  },
  {
    _id: "64a1bcf0a9c3e124ab1c0f14",
    title: "Family House",
    location: "Phoenix",
    price: "$75000",
    rating: 4.4,
    category: "house",
    disc: "A spacious family house in Phoenix with a large backyard and family-friendly design, located in a safe and serene neighborhood.",
    image: require("../../../assets/property/house4.jpg"),
  },
  {
    _id: "64a1bcf0a9c3e124ab1c0f15",
    title: "Luxury Flat",
    location: "Dallas",
    price: "$100000",
    rating: 4.6,
    category: "flat",
    disc: "An upscale luxury flat in Dallas offering premium living spaces, high-end finishes, and excellent connectivity to the city.",
    image: require("../../../assets/property/flat4.jpg"),
  },
  {
    _id: "64a1bcf0a9c3e124ab1c0f16",
    title: "Oceanfront Villa",
    location: "Santa Monica",
    price: "$170000",
    rating: 4.9,
    category: "villa",
    disc: "A breathtaking oceanfront villa in Santa Monica featuring stunning views, a private beach, and world-class amenities.",
    image: require("../../../assets/property/villa5.jpg"),
  },
  {
    _id: "64a1bcf0a9c3e124ab1c0f17",
    title: "Elegant House",
    location: "Atlanta",
    price: "$85000",
    rating: 4.6,
    category: "house",
    disc: "An elegant house in Atlanta boasting classic designs, spacious interiors, and a convenient location near shopping and dining.",
    image: require("../../../assets/property/house5.jpg"),
  },
  {
    _id: "64a1bcf0a9c3e124ab1c0f18",
    title: "Compact Flat",
    location: "San Jose",
    price: "$50000",
    rating: 4.2,
    category: "flat",
    disc: "A compact flat in San Jose with a practical layout and modern finishes, perfect for first-time buyers or as a rental investment.",
    image: require("../../../assets/property/flat5.jpg"),
  },
  {
    _id: "64a1bcf0a9c3e124ab1c0f19",
    title: "Secluded Villa",
    location: "Palm Springs",
    price: "$130000",
    rating: 4.7,
    category: "villa",
    disc: "A secluded villa in Palm Springs with stunning architecture and a serene environment for those seeking luxury and privacy.",
    image: require("../../../assets/property/villa6.jpg"),
  },
  {
    _id: "64a1bcf0a9c3e124ab1c0f20",
    title: "Ranch House",
    location: "Houston",
    price: "$80000",
    rating: 4.3,
    category: "house",
    disc: "A traditional ranch-style house in Houston with rustic charm and plenty of outdoor space, ideal for families or animal lovers.",
    image: require("../../../assets/property/house6.jpg"),
  },
  {
    _id: "64a1bcf0a9c3e124ab1c0f21",
    title: "Central Flat",
    location: "Orlando",
    price: "$70000",
    rating: 4.4,
    category: "flat",
    disc: "A central flat in Orlando offering convenient access to local attractions, entertainment venues, and business hubs.",
    image: require("../../../assets/property/flat6.jpg"),
  },
  {
    _id: "64a1bcf0a9c3e124ab1c0f22",
    title: "Hilltop Villa",
    location: "Boulder",
    price: "$145000",
    rating: 4.8,
    category: "villa",
    disc: "A hilltop villa in Boulder offering breathtaking views of the mountains and modern interiors designed for comfort.",
    image: require("../../../assets/property/villa7.jpg"),
  },
  {
    _id: "64a1bcf0a9c3e124ab1c0f23",
    title: "Colonial House",
    location: "Savannah",
    price: "$70000",
    rating: 4.2,
    category: "house",
    disc: "A beautifully preserved colonial-style house in Savannah with vintage charm and a rich historical vibe.",
    image: require("../../../assets/property/house7.jpeg"),
  },
  {
    _id: "64a1bcf0a9c3e124ab1c0f24",
    title: "Minimalist Flat",
    location: "Minneapolis",
    price: "$65000",
    rating: 4.1,
    category: "flat",
    disc: "A minimalist flat in Minneapolis with modern designs and a functional layout for comfortable city living.",
    image: require("../../../assets/property/flat7.jpg"),
  },
  {
    _id: "64a1bcf0a9c3e124ab1c0f25",
    title: "Exclusive Villa",
    location: "Malibu",
    price: "$200000",
    rating: 4.9,
    category: "villa",
    disc: "An exclusive villa in Malibu with breathtaking ocean views, luxury finishes, and top-notch amenities for high-end living.",
    image: require("../../../assets/property/villa8.jpg"),
  },
  {
    _id: "64a1bcf0a9c3e124ab1c0f26",
    title: "Brick House",
    location: "Indianapolis",
    price: "$78000",
    rating: 4.3,
    category: "house",
    disc: "A sturdy brick house in Indianapolis with timeless designs and a warm, inviting interior perfect for families.",
    image: require("../../../assets/property/house8.jpg"),
  },
  {
    _id: "64a1bcf0a9c3e124ab1c0f27",
    title: "Skyline Flat",
    location: "Charlotte",
    price: "$95000",
    rating: 4.5,
    category: "flat",
    disc: "A skyline flat in Charlotte offering stunning views of the city, modern interiors, and easy access to entertainment districts.",
    image: require("../../../assets/property/flat8.jpg"),
  },
  {
    _id: "64a1bcf0a9c3e124ab1c0f28",
    title: "Architectural Villa",
    location: "Aspen",
    price: "$185000",
    rating: 4.9,
    category: "villa",
    disc: "An architectural masterpiece in Aspen with breathtaking designs, luxurious interiors, and proximity to ski resorts.",
    image: require("../../../assets/property/villa9.jpg"),
  },
  {
    _id: "64a1bcf0a9c3e124ab1c0f29",
    title: "Historic House",
    location: "Charleston",
    price: "$72000",
    rating: 4.4,
    category: "house",
    disc: "A historic house in Charleston with vintage details and a warm, welcoming atmosphere perfect for history enthusiasts.",
    image: require("../../../assets/property/house9.jpg"),
  },
  {
    _id: "64a1bcf0a9c3e124ab1c0f30",
    title: "Downtown Flat",
    location: "Philadelphia",
    price: "$85000",
    rating: 4.3,
    category: "flat",
    disc: "A downtown flat in Philadelphia offering modern interiors and easy access to local attractions and cultural spots.",
    image: require("../../../assets/property/flat9.jpg"),
  },
];


const Index = ({ route, navigation }: any) => {
  const { id } = route.params;
  const property = PropertyData.find((item) => item._id === id); 

  const [isFavorited, setIsFavorited] = useState(false);
  if (!property) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>Property not found!</Text>
      </View>
    );
  }
  const saveToFavorites = async () => {
    try {
      const existingFavorites = await AsyncStorage.getItem('favorites');
      const favorites = existingFavorites ? JSON.parse(existingFavorites) : [];

      // Check if the property is already in favorites
      if (!favorites.some((fav: any) => fav._id === property._id)) {
        favorites.push(property);
        await AsyncStorage.setItem('favorites', JSON.stringify(favorites));
        setIsFavorited(true);  // Update the state to reflect the favorite status
      }
    } catch (error) {
      console.error('Error saving to favorites:', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={property.image} style={styles.image} />
        <TouchableOpacity onPress={saveToFavorites} style={styles.heartIcon}>
          <Ionicons
            name={isFavorited ? 'heart' : 'heart-outline'}
            size={30}
            color={isFavorited ? 'red' : '#fff'}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{property.title}</Text>
        <Text style={styles.description}>{property.disc}</Text>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>📍 Location:</Text>
          <Text style={styles.infoValue}>{property.location}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>💵 Price:</Text>
          <Text style={styles.infoValue}>{property.price}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>⭐ Rating:</Text>
          <Text style={styles.infoValue}>{property.rating} / 5</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>🏠 Category:</Text>
          <Text style={styles.infoValue}>{property.category}</Text>
        </View>

        <View style={{
          padding: 20,
          backgroundColor: '#f7f7f7',
          borderRadius: 8,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowRadius: 5,
          elevation: 5,
          marginTop: 20,
        }}>
          <Text style={{
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 15,
            color: '#333',
          }}>
            Owner Details
          </Text>
          <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 15,
          }}>
            <Image source={require('../../../assets/profile.png')} style={{
              width: 80,
              height: 80,
              borderRadius: 40,
              borderWidth: 2,
              borderColor: '#6200ee',
            }} />
          </View>
          <Text style={{
            fontSize: 20,
            fontWeight: '500',
            marginBottom: 8,
            color: '#222',
            textAlign: 'center',

          }}>
            Name: Mahesh Bhatiya
          </Text>

          <Text style={{
            fontSize: 16,
            marginBottom: 18,
            color: '#777',
            textAlign: 'center',
          }}>
            Email: maheshbhatiya304@gmail.com
          </Text>

          <TouchableOpacity onPress={() => navigation.navigate('Chat')} style={{
            backgroundColor: '#f58a42',
            paddingVertical: 12,
            paddingHorizontal: 25,
            borderRadius: 30,
            shadowColor: '#000',
            shadowOpacity: 0.2,
            shadowRadius: 4,
            elevation: 3,
          }}>
            <Text style={{
              color: '#fff',
              fontSize: 16,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
              Send Message
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.bookNowButton}>
          <Text style={styles.bookNowText}>📖 Book Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f5f7fa',
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 20,
  },
  detailsContainer: {
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 20,
    borderRadius: 20,
    marginHorizontal: 3,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#7f8c8d',
    marginBottom: 15,
    lineHeight: 24,
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#34495e',
    width: 100,
  },
  infoValue: {
    fontSize: 16,
    color: '#7f8c8d',
  },
  bookNowButton: {
    marginTop: 20,
    backgroundColor: '#4caf50',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  bookNowText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold',
  },
  imageContainer: {
    position: 'relative',
    width: '95%',
    height: 250,
    marginTop: 10,
    marginBottom: 20,
  },
  heartIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 25,
    padding: 5,
  },
});

export default Index;
