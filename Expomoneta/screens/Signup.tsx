import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
  const handleGoBack = (event: GestureResponderEvent) => {
    navigation.goBack();
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
      <TouchableOpacity style={styles.appleButton}>
        <Icon name="apple" size={24} color="white" />
        <Text style={styles.appleButtonText}>Continue with Apple</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F7F7F7',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
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
    color: 'gray',
    marginBottom: 40,
    lineHeight: 23,
  },
  features: {
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 20,
    marginBottom: 40,
  },
  featureItem: {
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6C63FF',
    borderRadius: 8,
    padding: 15,
  },
  appleButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default Signup;
