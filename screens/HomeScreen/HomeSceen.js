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
import SvgDots from '../../SvgDots';

import LinearGradient from 'react-native-linear-gradient';

const image = require('../../assets/image/avatar.jpg');

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity style={styles.button}>
          <ImageBackground
            source={require('../../assets/image/angryimg.png')}
            style={styles.imageBackground}
          />
          <SvgDots style={styles.svgDots} color="#FFFFFF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <ImageBackground source={image} style={styles.imageBackground} />
        </TouchableOpacity>
      </View>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor={'grey'}
        />
      </View>

      <View style={styles.linearGradientContainer}>
        <LinearGradient
          colors={['#000000', '#ffce2b']}
          style={styles.linearGradient}>
          <View style={styles.textWrap}>
            <Text style={[styles.text, styles.textOne]}>20%</Text>
            <Text style={[styles.text, styles.textTwo]}>New Arrival</Text>
            <Text style={[styles.text, styles.textThree]}>
              Get a new car discount, only valid this friday
            </Text>
          </View>
          <View style={styles.imageWrap}>
            <Image
              style={styles.image}
              source={require('../../assets/image/cars/bmw-wlcom.png')}
            />
          </View>
        </LinearGradient>
      </View>
      <View style={{}}>
        <Text style={styles.textDeals}>Top Deals</Text>
      </View>
      <View></View>
    </SafeAreaView>
  );
}
