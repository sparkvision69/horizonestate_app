import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Animated,
} from 'react-native';

const SignupPage = ({ navigation }:any) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(50)).current;

  useEffect(() => {
    Animated.stagger(300, [
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/header-bg1.jpg')}
          style={styles.headerBackground}
          blurRadius={2}
        />
        <View style={styles.overlay} />
        <View style={styles.headerContent}>
          <Image source={require('../../assets/logo.jpg')} style={styles.logo} />
          <Animated.Text
            style={[
              styles.title,
              {
                opacity: fadeAnim,
                transform: [{ translateY }],
              },
            ]}
          >
            Create Your Account
          </Animated.Text>
          <Animated.Text
            style={[
              styles.subtitle,
              {
                opacity: fadeAnim,
                transform: [{ translateY }],
              },
            ]}
          >
            Let's get started
          </Animated.Text>
        </View>
      </View>

      <KeyboardAvoidingView style={styles.formContainer} behavior="padding">
        <Animated.View
          style={{
            opacity: fadeAnim,
            transform: [{ translateY }],
          }}
        >
          <Text style={styles.label}>Full Name</Text>
          <TextInput style={styles.input} placeholder="Enter your full name" />

          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.input} placeholder="Enter your email" />

          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            secureTextEntry
          />

          <Text style={styles.label}>Confirm Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Confirm your password"
            secureTextEntry
          />

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Main')}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>

          <Text style={styles.footerText} onPress={() => navigation.navigate('Login')}>
            Already have an account?{' '}
            <Text style={styles.linkText}>Login</Text>
          </Text>
        </Animated.View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    height: 300,
    position: 'relative',
    flex: 1,
  },
  headerBackground: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  headerContent: {
    position: 'absolute',
    top: 100,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#eee',
    textAlign: 'center',
    marginTop: 10,
  },
  formContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 10,
    marginTop: -20,
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
    marginTop: 15,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#333',
    backgroundColor: '#f9f9f9',
  },
  button: {
    backgroundColor: 'skyblue',
    paddingVertical: 14,
    borderRadius: 20,
    marginTop: 20,
    alignItems: 'center',
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerText: {
    marginTop: 20,
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  linkText: {
    color: '#007BFF',
    fontWeight: '600',
  },
});

export default SignupPage;
