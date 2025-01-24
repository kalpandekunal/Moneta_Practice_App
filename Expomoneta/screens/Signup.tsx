import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RootStackParamList } from './types';

// Screen dimensions
const { width, height } = Dimensions.get('window');

// Scale utilities
const scale = (size: number) => (width / 375) * size; // Assuming 375 is the base width
const verticalScale = (size: number) => (height / 812) * size; // Assuming 812 is the base height

// Define Props for FeatureItem
interface FeatureItemProps {
  iconName: string;
  title: string;
  description: string;
}

// Define Props for Signup
interface SignupProps {
  navigation: {
    goBack: () => void;
  };
}

// FeatureItem Component
const FeatureItem: React.FC<FeatureItemProps> = ({ iconName, title, description }) => (
  <View style={styles.featureItem}>
    <Icon name={iconName} size={scale(24)} color="black" style={styles.featureIcon} />
    <View style={styles.featureContent}>
      <Text style={styles.featureTitle}>{title}</Text>
      <Text style={styles.featureDescription}>{description}</Text>
    </View>
  </View>
);

// Signup Component
const Signup: React.FC<SignupProps> = ({ navigation }) => {
  const handleGoBack = (event: GestureResponderEvent) => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack} style={styles.iconContainer}>
          <Icon name="arrow-back" size={scale(24)} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Create Account</Text>
      </View>

      {/* Title and Description */}
      <Text style={styles.title}>Create your account</Text>
      <Text style={styles.description}>
        To create your account, you will need to verify who you are using your existing Apple account.
      </Text>

      {/* Features Section */}
      <View style={styles.features}>
        <FeatureItem
          iconName="key"
          title="Fast and easy"
          description="Create a secure account using the Apple account you already have."
        />
        <FeatureItem
          iconName="privacy-tip"
          title="Respecting your privacy"
          description="Information is used for a one-time verification only and is never saved."
        />
        <FeatureItem
          iconName="lock"
          title="Secure and safe"
          description="Unique passkeys are created on your phone and stored in your keychain."
        />
      </View>

      {/* FAQ Link */}
      <Text style={styles.faqText}>
        Have further questions? <Text style={styles.faqLink}>View FAQ</Text>
      </Text>

      {/* Apple Button */}
      <TouchableOpacity style={styles.appleButton}>
        <Icon name="apple" size={scale(24)} color="white" />
        <Text style={styles.appleButtonText}>Continue with Apple</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: verticalScale(60),
    paddingHorizontal: scale(20),
    backgroundColor: '#F7F7F7',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: verticalScale(40),
    marginBottom: verticalScale(40),
  },
  iconContainer: {
    backgroundColor: 'white',
    padding: scale(10),
    borderRadius: 50,
    position: 'absolute',
    left: scale(10),
  },
  headerText: {
    fontSize: scale(16),
    fontWeight: 'bold',
  },
  title: {
    fontSize: scale(22),
    fontWeight: 'bold',
    marginBottom: verticalScale(20),
  },
  description: {
    fontSize: scale(16),
    color: 'black',
    marginBottom: verticalScale(40),
    lineHeight: verticalScale(23),
  },
  features: {
    paddingVertical: verticalScale(20), // Ensure proper padding for vertical space
    paddingHorizontal: scale(20),
    backgroundColor: 'white',
    borderRadius: scale(30),
    marginBottom: verticalScale(40),
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: verticalScale(20), // Adjust spacing between items
    overflow: 'hidden', // Prevent any child overflow
  },
  featureContent: {
    flex: 1, // Ensure content does not exceed container
  },
  featureIcon: {
    marginRight: scale(10),
  },
  featureTitle: {
    fontSize: scale(16),
    fontWeight: 'bold',
    marginBottom: verticalScale(5),
  },
  featureDescription: {
    fontSize: scale(14),
    color: 'gray',
  },
  faqText: {
    textAlign: 'center',
    fontSize: scale(14),
    marginBottom: verticalScale(20),
  },
  faqLink: {
    color: '#6C63FF',
    fontWeight: 'bold',
  },
  appleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6A0DAD',
    borderRadius: scale(50),
    padding: verticalScale(20),
  },
  appleButtonText: {
    color: 'white',
    fontSize: scale(16),
    fontWeight: 'bold',
    marginLeft: scale(10),
  },
});

export default Signup;
