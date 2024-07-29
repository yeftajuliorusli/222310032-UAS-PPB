import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AuthContext } from './AuthContext';

const UserScreen = ({ route }) => {
  const { scannedData } = route.params || {};
  const { user } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
          <Text style={styles.userName}>{user?.username}</Text>
        <View style={styles.subjectInfo}>
          <Text style={styles.subject}>Pemrograman Perangkat Bergerak</Text>
          <Text style={styles.subject}>Febri Damatraseta, S.Kom., M.Kom</Text>
        </View>
        {scannedData && <Text style={styles.scannedData}>Anda Sudah Diabsen</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    marginTop: 20,
    alignItems: 'center',
  },
 
  userName: {
    fontSize: 45,
    fontWeight: 'bold',
    color: '#d32f2f',
  },

  subjectInfo: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },

  subject: {
    fontSize: 18,
  },
  },
);

export default UserScreen;
