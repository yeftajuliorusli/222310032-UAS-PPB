import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Data Users</Text>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome</Text>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Mira Nur Aulia</Text>
        </View>
        <View style={styles.subjectInfo}>
          <Text style={styles.subject}>Bahasa inggris komputer</Text>
          <Text style={styles.teacher}>Morita, S.S., M.Pd.</Text>
        </View>
        <Text style={styles.time}>Jam Masuk</Text>
        <Text style={styles.time}>08:00</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 40,
  },
  content: {
    marginTop: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  userInfo: {
    backgroundColor: '#e0e0e0',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#d32f2f',
  },
  subjectInfo: {
    backgroundColor: '#e0e0e0',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  subject: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  teacher: {
    fontSize: 16,
  },
  time: {
    fontSize: 18,
  },
});

export default UserScreen;
