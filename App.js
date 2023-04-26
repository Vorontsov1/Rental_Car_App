import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import CompanyScreen from './screens/CompanyScreen/CompanyScreen';
import LoginScreen from './components/LoginScreen/LoginScreen';
import ForgotPasswordScreen from './components/ForgotPasswordScreen/ForgotPasswordScreen';
import ResetPasswordScreen from './components/ResetPasswordScreen/ResetPasswordScreen';



const App = () => {
  return (
    <View style={styles.container}>
      {/* <HomeScreen /> */}
      {/* <CompanyScreen /> */}
      {/* <LoginScreen /> */}
      {/* <ForgotPasswordScreen /> */}
      <ResetPasswordScreen />
      <StatusBar
        barStyle="light-content"
      />
    </View>
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
