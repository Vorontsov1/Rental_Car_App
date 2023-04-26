import React from 'react';
import HomeScreen from './screens/HomeScreen';
import CompanyScreen from './screens/CompanyScreen/CompanyScreen';
import LoginScreen from './components/LoginScreen/LoginScreen';
import ForgotPasswordScreen from './components/ForgotPasswordScreen/ForgotPasswordScreen';
import ResetPasswordScreen from './components/ResetPasswordScreen/ResetPasswordScreen';
import RedCar from './screens/RedCar/';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CompanyScreen" component={CompanyScreen} options={{ headerShown: false }} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{headerShown: false}} />
        <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} options={{headerShown: false}}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
