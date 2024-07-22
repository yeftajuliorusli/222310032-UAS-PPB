import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import App from "./AbsensiApp";
import UserScreen from "./UserScreen";
import LoginScreen from "./LoginPage";


export default function RoutesApp() {
    const Stack = createNativeStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={LoginScreen} options={{headerTitle: ""}} />
          <Stack.Screen name="Dashboard" component={App} options={{headerTitle: ""}}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }