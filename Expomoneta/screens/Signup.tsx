import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as AppleAuthentication from 'expo-apple-authentication';
import { RootStackParamList } from './types';


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
    <Icon name={iconName} size={24} color="black" style={styles.featureIcon} />
    <View style={styles.featureContent}>
      <Text style={styles.featureTitle}>{title}</Text>
      <Text style={styles.featureDescription}>{description}</Text>
    </View>
  </View>
);

// Signup Component
const Signup: React.FC<SignupProps> = ({ navigation }) => {

  type SplashScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Splash'>;
  
  const handleGoBack = (event: GestureResponderEvent) => {
    navigation.goBack();
  };

  // Apple Sign-In Function
  const handleAppleSignIn = async () => {
    try {
      const appleAuthResponse = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      });
  
      console.log('Apple Sign-In Response:', appleAuthResponse);
  
      // Extract user details
      const { user, email, fullName, identityToken } = appleAuthResponse;
      console.log(`User ID: ${user}`);
      console.log(`Email: ${email}`);
      console.log(`Full Name:`, fullName);
      console.log(`Identity Token: ${identityToken}`);
  
      // Use the response (e.g., send data to the backend or authenticate user)
    } catch (error) {
      // Log the full error object to understand the structure
      console.error('Error with Apple Sign-In:', error);
  
      // Check for error code if available
      // if (error?.code === 'ERR_CANCELED') {
      //   console.log('User canceled Apple Sign-In');
      // } else {
      //   // Provide additional error context if the code is not available
      //   console.log('An unexpected error occurred during Apple Sign-In.');
      // }
    }
  };
  

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack} style={styles.iconContainer}>
          <Icon name="arrow-back" size={24} color="black" />
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
      <AppleAuthentication.AppleAuthenticationButton
        buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
        buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
        cornerRadius={8}
        style={styles.appleButton}
        onPress={handleAppleSignIn}
      />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    padding: 20,
    backgroundColor: '#F7F7F7',
    marginTop: 50,
  },
  header: {
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderColor:'black',
    borderWidth:2,
    position: 'relative',
    marginBottom: 40,
  },
  iconContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 50,
    position: 'absolute',
    left: 1,
  },
  headerText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: 'black',
    marginBottom: 40,
    lineHeight: 23,
  },
  features: {
    paddingTop: 20,
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 20,
    marginBottom: 40,
    paddingBottom: 40
  },
  featureItem: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  featureIcon: {
    marginRight: 10,
  },
  featureContent: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  featureDescription: {
    fontSize: 14,
    color: 'gray',
  },
  faqText: {
    textAlign: 'center',
    fontSize: 14,
    marginBottom: 20,
  },
  faqLink: {
    color: '#6C63FF',
    fontWeight: 'bold',
  },
  appleButton: {
    width: '100%',
    height: 50,
  },
  // button: {
  //   backgroundColor: '#6A0DAD',
  //   padding: 20,
  //   borderRadius: 50,
  //   alignItems: 'center',
  //   width: '50%',
  // }
});

export default Signup;
