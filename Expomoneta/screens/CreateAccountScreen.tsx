import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';


import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { RootStackParamList } from './types';

  type SplashScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CreateAccount'>;

// Functional component in TypeScript
const CreateAccountScreen: React.FC = () => {

  const navigation = useNavigation<SplashScreenNavigationProp>();


  return (
    <View style={styles.container}>
      <Text style={styles.logo}>R.</Text>
      <Text style={styles.title}>Let’s create your account</Text>
      <Text style={styles.description}>
        This will be your default wallet in the <Text style={styles.link}>Monsoon</Text> network.
      </Text>
      <Text style={styles.content}>Give it a nickname? (optional)</Text>
      <TextInput style={styles.input} placeholder="Nickname" />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={()=>navigation.navigate('Signup')}>Continue</Text>
      </TouchableOpacity>
      <Text style={styles.footer}>
        By continuing you are agreeing to our{' '}
        <Text style={styles.link}>Terms of Service</Text> and{' '}
        <Text style={styles.link}>Privacy Policy</Text>.
      </Text>
    </View>
  );
};

// Stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#F5F5F5',
  },
  logo: {
    paddingTop: 40,
    fontSize: 60,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#000',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  content: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 20,
  },
  link: {
    color: '#6A0DAD',
    textDecorationLine: 'underline',
  },
  input: {
    padding: 10,
    borderBottomColor: '#777',
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#6A0DAD',
    padding: 20,
    borderRadius: 50,
    alignItems: 'center',
    width: '50%',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    fontSize: 12,
    color: '#777',
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    textAlign: 'center',
  },
});

export default CreateAccountScreen;
