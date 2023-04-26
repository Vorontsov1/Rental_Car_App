import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
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
     <TouchableOpacity
       onPress={() => navigation.navigate('HomeScreen')}
       style={styles.loginBtn}>
       <Text style={styles.loginText}>Reset Password</Text>
     </TouchableOpacity>
   </View>
 );
}

export default ResetPasswordScreen;
