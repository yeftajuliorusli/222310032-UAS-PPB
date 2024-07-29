import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import App from "./AbsensiApp";
import UserScreen from "./UserScreen";
import LoginScreen from "./LoginPage";
import { AuthProvider } from './AuthContext';
import ScannerQR from "./Scan";

export default function RoutesApp() {
  const Stack = createNativeStackNavigator();
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Dashboard" component={App} />
          <Stack.Screen name="User" component={UserScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}
