import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Button, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { BarCodeScanner } from 'expo-barcode-scanner';

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

function User() {
  return (
    <View style={styles.centered}>
        <View style={styles.container}>
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
    </View>
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
        <Tab.Screen name="Scan" component={Scan2} options={{headerTitle: "Scan"}}/>
        <Tab.Screen name="User" component={User} options={{headerTitle: "User"}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function Scan2(){
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing} barcodeScannerSettings={{
    barcodeTypes: ["qr"],
  }}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
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
