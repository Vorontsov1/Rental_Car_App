import React from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import styles from './styles';



const ResetPasswordScreen = ({navigation}) => {
 return (
   <View
     style={{
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: '#FFCE2B',
     }}>
     <Text>Reset Password Screen</Text>
     <TouchableOpacity style={styles.loginBtn}>
       <Text style={styles.loginText}>Reset Password</Text>
     </TouchableOpacity>
     <TouchableOpacity
       onPress={() => navigation.navigate('HomeScreen')}
       style={styles.customBtn}>
       <Text style={styles.customBtnText}>Go Home</Text>
     </TouchableOpacity>
   </View>
 );
}

export default ResetPasswordScreen;
