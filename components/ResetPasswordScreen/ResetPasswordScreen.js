import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';



const ResetPasswordScreen = () => {
 return (
   <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
     <Text>Reset Password Screen</Text>
     <TouchableOpacity style={styles.loginBtn}>
       <Text style={styles.loginText}>Reset Password</Text>
     </TouchableOpacity>
   </View>
 );
}

export default ResetPasswordScreen;
