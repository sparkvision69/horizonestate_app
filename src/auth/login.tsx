import React, { useEffect, useRef, useState } from 'react';
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
  ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginPage = ({ navigation }: any) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(50)).current;
  const [email, setemail] = useState('mahesh@gmail.com');
  const [password, setpassword] = useState('mahesh123');
  const [isLoading, setIsLoading] = useState(false); // Add loading state

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

  const handlelogin = async () => {
    console.log(email, password);
    setIsLoading(true); // Start loading
    try {
      const response = await fetch('https://horizonestate.vercel.app/api/login', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data.user.id);
        await AsyncStorage.setItem('userid', data.user.id);
        navigation.navigate('Main');
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  if (isLoading) {
    // Render loading spinner
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/header-bg.jpg')}
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
            Discover Your Potential
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
            Your journey starts here
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
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={(e) => setemail(e)}
            placeholder="Enter your email"
          />

          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={(e) => setpassword(e)}
            placeholder="Enter your password"
            secureTextEntry
          />
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handlelogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <Text style={styles.footerText} onPress={() => navigation.navigate('Signup')}>
            Don’t have an account? <Text style={styles.linkText}>Sign up</Text>
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
    height: 400,
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
    top: 160,
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
  forgotPassword: {
    marginTop: 10,
    fontWeight: 'bold',
    color: '#007BFF',
    textAlign: 'right',
  },
  button: {
    backgroundColor: 'skyblue',
    paddingVertical: 14,
    borderRadius: 20,
    marginTop: 20,
    alignItems: 'center',
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

export default LoginPage;
