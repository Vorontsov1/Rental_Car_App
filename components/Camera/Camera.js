import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';




const Camera = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFCE2B',
      }}>
      <TouchableOpacity
        onPress={() => navigation.navigate('HomeScreen')}
        style={[styles.customBtn,  {backgroundColor: 'orangered'}]}>
        <Text style={styles.customBtnText}>Camera</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('HomeScreen')}
        style={styles.customBtn}>
        <Text style={styles.customBtnText}>Go Home</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Camera;
