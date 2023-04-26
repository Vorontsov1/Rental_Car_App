import {useState} from 'react';
import {View, TextInput, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import colors from '../../app/config/colors';
import SPACING from '../../app/config/SPACING';

const LoginScreen = ({navigation}) => {
  const [change, setChange] = useState({
    email: '',
    password: '',
  });

  
  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text style={styles.title}> Login Screen</Text>
        <View style={styles.input}>
          <TextInput
            style={styles.inputText}
            placeholder="Email"
            placeholderTextColor={colors['white']}
            onChangeText={text => setChange({...change, email: text})}
          />
        </View>
        <View style={styles.input}>
          <TextInput
            style={styles.inputText}
            placeholder="Password"
            placeholderTextColor={colors['white']}
            secureTextEntry={true}
            onChangeText={text => setChange({...change, password: text})}
          />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('ForgotPassword')}
          style={styles.forgotPasswordButton}>
          <Text style={styles.forgotAndSignUpText}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('HomeScreen')}
          style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.forgotAndSignUpText}>Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
