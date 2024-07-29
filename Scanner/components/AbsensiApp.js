import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Button, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import UserScreen from './UserScreen';
import ScannerQR from './Scan';

const AbsensiApp = () => {
  const schedule = [
    { day: 'Kamis', subject: 'Bahasa inggris komputer', lecturer: 'Morita, S.S., M.Pd.' },
    { day: 'Kamis', subject: 'Metodologi Penelitian', lecturer: 'Edi Nurachmad, S.Kom., M.Kom.' },
    { day: 'Jumat', subject: 'Pengantar Data Mining', lecturer: 'Isnan Mulia, S.Kom., M.Kom.' },
    { day: 'Kamis', subject: 'Kecerdasan Buatan', lecturer: 'Enok Tuti Alawiah, S.Kom., M.Kom.' },
    { day: 'Selasa', subject: 'Rekayasa Perangkat Lunak', lecturer: 'Anton Sukamto, S.Kom., M.Kom.' },
    { day: 'Selasa', subject: 'Sistem Operasi', lecturer: 'Septian Cahyadi, S.Kom., M.Kom.' },
    { day: 'Jumat', subject: 'Pemrograman Perangkat Bergerak', lecturer: 'Febri Damatraseta, S.Kom., M.Kom.' },
    { day: 'Sabtu', subject: 'Pemrograman Web', lecturer: 'Febri Damatraseta, S.Kom., M.Kom.' },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {schedule.map((item, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.day}>{item.day}</Text>
            <Text style={styles.subject}>{item.subject}</Text>
            <Text style={styles.lecturer}>{item.lecturer}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: true,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Dashboard') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Scan') {
              iconName = focused ? 'camera' : 'camera-outline';
            } else if (route.name === 'User') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: { display: 'flex' },
        })}
      >
        <Tab.Screen name="Dashboard" component={AbsensiApp} options={{headerTitle: "Dashboard"}}/>
        <Tab.Screen name="Scan" component={ScannerQR} options={{headerTitle: "Scan"}}/>
        <Tab.Screen name="User" component={UserScreen} options={{headerTitle: "User"}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#d3d3d3',
  },
  scrollViewContainer: {
    padding: 20,
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    width: '100%',
    marginBottom: 20,
  },
  day: {
    fontWeight: 'bold',
  },
  subject: {
    fontSize: 18,
    marginVertical: 10,
  },
  lecturer: {
    color: '#555',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical : 150
  },
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
});
