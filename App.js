import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from './src/pages/dashboardPage';
import ForgotPasswordPage from './src/pages/ForgotPasswordPage';
import loginPage from './src/pages/loginPage';
import RegisterPage from './src/pages/registerPage';
import rpgPage from './src/pages/rpgPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="RPG" component={rpgPage} />
      <Stack.Screen name="Login" component={loginPage} />
      <Stack.Screen name="Registro" component={RegisterPage} />
      <Stack.Screen name="Esqueceu-senha" component={ForgotPasswordPage} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );



}