import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const ForgotPasswordScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFCE2B',
      }}>
      <Text>Forgot Password Screen</Text>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Forgot Password? </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPasswordScreen;
