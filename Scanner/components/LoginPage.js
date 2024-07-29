import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { UserList } from './DataMahasiswa';
import { AuthContext } from './AuthContext';

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { setUser } = useContext(AuthContext);

  const handleLogin = () => {
    const user = UserList.find(user => user.email === email && user.password === password);
    if (user) {
      Alert.alert("Absensi", `Selamat Datang ${user.username}`);
      setUser(user);
      navigation.reset({
        index: 0,
        routes: [{ name: 'Dashboard' }],
      });
    } else {
      Alert.alert("Gagal Login");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />

        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Password"
            secureTextEntry={!isPasswordVisible}
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
          <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
            <Icon name={isPasswordVisible ? 'visibility' : 'visibility-off'} size={20} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 15,
    width: '100%',
    padding: 20,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
  },
  passwordInput: {
    flex: 1,
    padding: 10,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
  },
  button: {
    width: '100%',
    padding: 10,
    backgroundColor: 'red',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default LoginPage;
