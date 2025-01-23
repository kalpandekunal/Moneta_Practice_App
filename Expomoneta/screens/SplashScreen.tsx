import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './types'; // Import your types

type SplashScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Splash'>;

const SplashScreen: React.FC = () => {
  const navigation = useNavigation<SplashScreenNavigationProp>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('CreateAccount'); // Now TypeScript knows this is valid
    }, 3000); // 3 seconds delay
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>R.</Text>
      <Text style={styles.subtitle}>Wallet</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingTop: 200,
    borderColor: '#6A0DAD', // Sets the border color
  },
  logo: {
    fontSize: 100,
    fontWeight: 'bold',
    color: '#000',
  },
  subtitle: {
    fontSize: 44,
    fontWeight: '400',
    color: '#000',
  },
});

export default SplashScreen;
