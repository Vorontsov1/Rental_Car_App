import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';

import LinearGradient from 'react-native-linear-gradient';
import colors from '../../app/config/colors';
import SPACING from '../../app/config/SPACING';

const image = require('../../assets/image/avatar.jpg');

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View style={styles.containerGradient}>
        <LinearGradient
          style={styles.circleGradient}
          colors={[colors.light, colors['dark-gray']]}>
          <TouchableOpacity style={styles.entypoIcon}>
            <Entypo
              name="dots-three-horizontal"
              size={SPACING * 2.5}
              color={colors.light}
            />
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient
          style={styles.circleGradient}
          colors={[colors.light, colors['dark-gray']]}>
          <TouchableOpacity style={styles.entypoIcon}>
           <Image source={image} style={styles.image} />
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
}
