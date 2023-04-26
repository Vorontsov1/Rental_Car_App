import React from 'react';
import {View, StyleSheet} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import CompanyScreen from './screens/CompanyScreen/CompanyScreen';
import LoginScreen from './components/LoginScreen/LoginScreen';
import ForgotPasswordScreen from './components/ForgotPasswordScreen/ForgotPasswordScreen';
import ResetPasswordScreen from './components/ResetPasswordScreen/ResetPasswordScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: '#FFCE2B',
  },
});

export default App;
