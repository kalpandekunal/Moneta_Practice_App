import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Alert
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

const ReedemTokenConfirmScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleApprove = () => {
    setModalVisible(false);
    Alert.alert('Tokens redeemed successfully!');
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* First Screen */}
      <View style={styles.card}>
        <Text style={styles.header}>Does this look correct?</Text>

        <Text style={styles.label}>Org name: <Text style={styles.value}>Rainfall</Text></Text>
        <Text style={styles.label}>Profile name: <Text style={styles.value}>Priya</Text></Text>
        <Text style={styles.label}>Display name: <Text style={styles.value}>Priya</Text></Text>
        <Text style={styles.label}>Email address: <Text style={styles.value}>longname@longemail...</Text></Text>
        <Text style={styles.label}>Price: <Text style={styles.value}>25,022.14 RDP</Text></Text>
        <Text style={styles.label}>Vest: <Text style={styles.value}>200 RDP</Text></Text>
        <Text style={styles.label}>Term: <Text style={styles.value}>6</Text></Text>
        <Text style={styles.label}>Lock up period: <Text style={styles.value}>1 year</Text></Text>
        <Text style={styles.label}>Date of purchase: <Text style={styles.value}>Dec 10 2024</Text></Text>

        <Text style={styles.note}>Note that your tokens will be restricted from being transferred or traded during the lock-up period.</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setModalVisible(true)}
        >

          
          <Text style={styles.buttonText}>Yes, it’s correct</Text>
        </TouchableOpacity>

        <Text style={styles.link}>Doesn’t look correct? <Text style={styles.requestChange}>Request a change</Text></Text>
      </View>

      {/* Modal for confirmation */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Are you sure?</Text>
            <Text style={styles.modalSubText}>Redeeming these tokens cannot be reverted.</Text>

            <View style={styles.modalActions}>
              <TouchableOpacity
                style={[styles.modalButton, styles.goBackButton]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>Go back</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.modalButton, styles.approveButton]}
                onPress={handleApprove}
              >
                <Text style={styles.modalButtonText}>Approve</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    width: '90%',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 5 },
  },
  header: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginVertical: 2,
  },
  value: {
    fontWeight: '500',
    color: '#000',
  },
  note: {
    fontSize: 12,
    color: '#666',
    marginTop: 15,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#6A0DAD',
    padding: 20,
    borderRadius: 50,
    alignItems: 'center',
    width: '50%',
    marginBottom: 15
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
  link: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
  requestChange: {
    color: '#6E44FF',
    fontWeight: '500',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  modalSubText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  modalActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    flex: 1,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  goBackButton: {
    backgroundColor: '#777',
  },
  approveButton: {
    backgroundColor: '#6A0DAD',
  },
  modalButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
  },
});

export default ReedemTokenConfirmScreen;
