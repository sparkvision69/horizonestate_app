import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const PropertyData = [
  {
    _id: "64a1bcf0a9c3e124ab1c0f01",
    title: "Luxury Villa",
    location: "New York",
    price: "$120000",
    rating: 4.8,
    category: "villa",
    image: require("../../../assets/property/villa.jpg"),
  },
  {
    _id: "64a1bcf0a9c3e124ab1c0f02",
    title: "Cozy House",
    location: "Los Angeles",
    price: "$85000",
    rating: 4.5,
    category: "house",
    image: require("../../../assets/property/house.jpg"),
  },
  {
    _id: "64a1bcf0a9c3e124ab1c0f03",
    title: "Modern Flat",
    location: "Chicago",
    price: "$60000",
    rating: 4.2,
    category: "flat",
    image: require("../../../assets/property/flat.jpeg"),
  },
  {
    _id: "64a1bcf0a9c3e124ab1c0f04",
    title: "Beachside Villa",
    location: "Miami",
    price: "$150000",
    rating: 4.9,
    category: "villa",
    image: require("../../../assets/property/villa1.jpg"),
  },
  {
    _id: "64a1bcf0a9c3e124ab1c0f05",
    title: "Countryside House",
    location: "Austin",
    price: "$75000",
    rating: 4.4,
    category: "house",
    image: require("../../../assets/property/house1.jpg"),
  },
  {
    _id: "64a1bcf0a9c3e124ab1c0f06",
    title: "Penthouse Flat",
    location: "Seattle",
    price: "$110000",
    rating: 4.7,
    category: "flat",
    image: require("../../../assets/property/flat1.jpg"),
  },
  {
    _id: "64a1bcf0a9c3e124ab1c0f07",
    title: "Garden Villa",
    location: "San Diego",
    price: "$125000",
    rating: 4.6,
    category: "villa",
    image: require("../../../assets/property/villa2.jpg"),
  },
  {
    _id: "64a1bcf0a9c3e124ab1c0f08",
    title: "Suburban House",
    location: "Denver",
    price: "$70000",
    rating: 4.3,
    category: "house",
    image: require("../../../assets/property/house2.jpg"),
  },
  {
    _id: "64a1bcf0a9c3e124ab1c0f09",
    title: "City Center Flat",
    location: "Boston",
    price: "$95000",
    rating: 4.5,
    category: "flat",
    image: require("../../../assets/property/flat2.jpg"),
  },
  {
    _id: "64a1bcf0a9c3e124ab1c0f10",
    title: "Mountain View Villa",
    location: "Salt Lake City",
    price: "$140000",
    rating: 4.7,
    category: "villa",
    image: require("../../../assets/property/villa3.jpg"),
  },
  {
    _id: "64a1bcf0a9c3e124ab1c0f11",
    title: "Modern House",
    location: "Portland",
    price: "$80000",
    rating: 4.5,
    category: "house",
    image: require("../../../assets/property/house3.jpg"),
  },
  {
    _id: "64a1bcf0a9c3e124ab1c0f12",
    title: "Studio Flat",
    location: "Las Vegas",
    price: "$55000",
    rating: 4.1,
    category: "flat",
    image: require("../../../assets/property/flat3.jpg"),
  },
  {
    _id: "64a1bcf0a9c3e124ab1c0f13",
    title: "Private Villa",
    location: "San Francisco",
    price: "$160000",
    rating: 4.8,
    category: "villa",
    image: require("../../../assets/property/villa4.jpg"),
  },
  {
    _id: "64a1bcf0a9c3e124ab1c0f14",
    title: "Family House",
    location: "Phoenix",
    price: "$75000",
    rating: 4.4,
    category: "house",
    image: require("../../../assets/property/house4.jpg"),
  },
  {
    _id: "64a1bcf0a9c3e124ab1c0f15",
    title: "Luxury Flat",
    location: "Dallas",
    price: "$100000",
    rating: 4.6,
    category: "flat",
    image: require("../../../assets/property/flat4.jpg"),
  },
  {
    _id: "64a1bcf0a9c3e124ab1c0f16",
    title: "Oceanfront Villa",
    location: "Santa Monica",
    price: "$170000",
    rating: 4.9,
    category: "villa",
    image: require("../../../assets/property/villa5.jpg"),
  },
  {
    _id: "64a1bcf0a9c3e124ab1c0f17",
    title: "Elegant House",
    location: "Atlanta",
    price: "$85000",
    rating: 4.6,
    category: "house",
    image: require("../../../assets/property/house5.jpg"),
  },
  {
    _id: "64a1bcf0a9c3e124ab1c0f18",
    title: "Compact Flat",
    location: "San Jose",
    price: "$50000",
    rating: 4.2,
    category: "flat",
    image: require("../../../assets/property/flat5.jpg"),
  },
  {
    _id: "64a1bcf0a9c3e124ab1c0f19",
    title: "Secluded Villa",
    location: "Palm Springs",
    price: "$130000",
    rating: 4.7,
    category: "villa",
    image: require("../../../assets/property/villa6.jpg"),
  },
  {
    _id: "64a1bcf0a9c3e124ab1c0f20",
    title: "Ranch House",
    location: "Houston",
    price: "$80000",
    rating: 4.3,
    category: "house",
    image: require("../../../assets/property/house6.jpg"),
  },
  {
    _id: "64a1bcf0a9c3e124ab1c0f21",
    title: "Central Flat",
    location: "Orlando",
    price: "$70000",
    rating: 4.4,
    category: "flat",
    image: require("../../../assets/property/flat6.jpg"),
  },
  {
    _id: "64a1bcf0a9c3e124ab1c0f22",
    title: "Hilltop Villa",
    location: "Boulder",
    price: "$145000",
    rating: 4.8,
    category: "villa",
    image: require("../../../assets/property/villa7.jpg"),
  },
  {
    _id: "64a1bcf0a9c3e124ab1c0f23",
    title: "Colonial House",
    location: "Savannah",
    price: "$70000",
    rating: 4.2,
    category: "house",
    image: require("../../../assets/property/house7.jpeg"),
  },
  {
    _id: "64a1bcf0a9c3e124ab1c0f24",
    title: "Minimalist Flat",
    location: "Minneapolis",
    price: "$65000",
    rating: 4.1,
    category: "flat",
    image: require("../../../assets/property/flat7.jpg"),
  },
  {
    _id: "64a1bcf0a9c3e124ab1c0f25",
    title: "Exclusive Villa",
    location: "Malibu",
    price: "$200000",
    rating: 4.9,
    category: "villa",
    image: require("../../../assets/property/villa8.jpg"),
  },
  {
    _id: "64a1bcf0a9c3e124ab1c0f26",
    title: "Brick House",
    location: "Indianapolis",
    price: "$78000",
    rating: 4.3,
    category: "house",
    image: require("../../../assets/property/house8.jpg"),
  },
  {
    _id: "64a1bcf0a9c3e124ab1c0f27",
    title: "Skyline Flat",
    location: "Charlotte",
    price: "$95000",
    rating: 4.5,
    category: "flat",
    image: require("../../../assets/property/flat8.jpg"),
  },
  {
    _id: "64a1bcf0a9c3e124ab1c0f28",
    title: "Architectural Villa",
    location: "Aspen",
    price: "$185000",
    rating: 4.9,
    category: "villa",
    image: require("../../../assets/property/villa9.jpg"),
  },
  {
    _id: "64a1bcf0a9c3e124ab1c0f29",
    title: "Historic House",
    location: "Charleston",
    price: "$72000",
    rating: 4.4,
    category: "house",
    image: require("../../../assets/property/house9.jpg"),
  },
  {
    _id: "64a1bcf0a9c3e124ab1c0f30",
    title: "Downtown Flat",
    location: "Philadelphia",
    price: "$85000",
    rating: 4.3,
    category: "flat",
    image: require("../../../assets/property/flat9.jpg"),
  },
];

const App = ({ navigation, filterdata  }:any) => {

  const filteredData = PropertyData.filter((data) =>
    data.title.toLowerCase().includes(filterdata.toLowerCase())
  );
  return (
    <>
    <View>
      <Text style={{
        marginLeft: 15,
        fontWeight: 'bold',
        fontSize: 17
      }}>Latest Propertys</Text>
    </View>
    <View style={styles.container}>
      <View style={styles.grid}>
        {filteredData.map((item, index) => (
          <TouchableOpacity key={index} style={styles.card} onPress={() => navigation.navigate('Details', { id: item._id })}>
            <View style={styles.imageWrapper}>
              <Image source={item.image} style={styles.image} />
              <View style={styles.overlay}>
                <Text style={styles.category}>{item.category.toUpperCase()}</Text>
              </View>
            </View>
            <View style={styles.cardContent}>
              <View style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.price}>{item.price}</Text>
              </View>

              <Text style={styles.location}>{item.location}</Text>
              <View style={styles.rating}>
                <Text style={styles.ratingStars}>{'★'.repeat(Math.floor(item.rating))}</Text>
                <Text style={styles.ratingText}>({item.rating})</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5, 
  },
  imageWrapper: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 140,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  overlay: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  category: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',
  },
  cardContent: {
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2d3748', 
  },
  location: {
    color: '#718096', 
    fontSize: 12,
    marginTop: 4,
  },
  price: {
    color: '#2b6cb0', 
    fontSize: 14,
    fontWeight: '900',
    marginTop: 8,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  ratingStars: {
    color: '#ecc94b', 
    fontSize: 14,
  },
  ratingText: {
    color: '#718096', 
    marginLeft: 4,
    fontSize: 12,
  },
});

export default App;
