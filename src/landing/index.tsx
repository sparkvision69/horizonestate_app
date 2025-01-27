import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

const LandingPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Find Your Dream Home</Text>

      <Image
        source={require('../../assets/landing.jpg')}
        style={styles.image}
      />

      <View style={styles.bottomSection}>
        <Text style={styles.subHeading}>Your Perfect Home Awaits</Text>
        <Text style={styles.description}>
          Browse thousands of properties at your fingertips. With easy search and smart filters, find the home that fits your style and budget.
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 20,
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#222',
    textAlign: 'center',
  },
  image: {
    width: '90%',
    height: '33%',
    resizeMode: 'cover',
  },
  bottomSection: {
    width: '100%',
    alignItems: 'center',
    padding: 20,
  },
  subHeading: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 22,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 22,
    elevation: 4,
    shadowColor: '#007BFF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    
    marginTop: 50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LandingPage;
