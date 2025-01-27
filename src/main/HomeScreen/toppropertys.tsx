import React, { useRef, useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, FlatList, Dimensions, Animated, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';


const { width: screenWidth } = Dimensions.get('window');

const images = [
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
    image: require("../../../assets/property/villa6.jpg"),
  },
];

const ImageCarousel = ({ navigation }:any) => {
  const scrollX = useRef(new Animated.Value(1)).current;
  const flatListRef = useRef<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const renderItem = ({ item, index }:any) => {
    return (
      <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate("Details", {id : item._id}) }>
        <Image source={item.image} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.price}>{item.price}</Text>
          <View style={styles.locationContainer}>
            <FontAwesome5 name="map-marker-alt" size={14} color="#fff" />
            <Text style={styles.location}>{item.location}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);

  useEffect(() => {
    flatListRef.current?.scrollToIndex({ index: currentIndex, animated: true });
  }, [currentIndex]);

  return (
    <View style={styles.container}>
      <Animated.FlatList
        ref={flatListRef}
        data={images}
        renderItem={renderItem}
        keyExtractor={(item) => item._id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      />

      <View style={styles.indicatorContainer}>
        {images.map((_, index) => {
          const dotWidth = scrollX.interpolate({
            inputRange: [
              (index - 1) * screenWidth,
              index * screenWidth,
              (index + 1) * screenWidth,
            ],
            outputRange: [10, 20, 10],
            extrapolate: 'clamp',
          });
          return <Animated.View key={index} style={[styles.indicator, { width: dotWidth }]} />;
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: screenWidth - 0,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: screenWidth - 30,
    height: 280,
    borderRadius: 10,
  },
  textContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 15,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  price: {
    fontSize: 18,
    color: '#FFD700',
    marginBottom: 5,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  location: {
    marginLeft: 5,
    fontSize: 14,
    color: '#fff',
  },
  indicatorContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  indicator: {
    height: 10,
    borderRadius: 5,
    backgroundColor: '#000',
    marginHorizontal: 5,
  },
});

export default ImageCarousel;
