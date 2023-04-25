import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  Dimensions,
} from 'react-native';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

import LinearGradient from 'react-native-linear-gradient';
import colors from '../../app/config/colors';
import SPACING from '../../app/config/SPACING';
import cars from '../../app/data/cars';

const avatar = require('../../assets/image/avatar.jpg');
const bmwImage = require('../../assets/cars/bmw-wlcom.png');

const gradient = [colors['dark'], colors.dark_yellow];

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
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
              <Image source={avatar} style={styles.avatar} />
            </TouchableOpacity>
          </LinearGradient>
        </View>
        <View
          style={{
            position: 'relative',
            marginVertical: SPACING * 3,
            justifyContent: 'center',
          }}>
          <TextInput
            style={styles.input}
            placeholder="Search"
            placeholderTextColor={colors['light']}
          />
          <AntDesign
            style={styles.searchIcon}
            name="search1"
            size={SPACING * 2.5}
            color={colors.light}
          />
        </View>
        <LinearGradient colors={gradient} style={styles.bigGradient}>
          <View style={{maxWidth: '50%'}}>
            <Text style={styles.textOnGradientOne}>20%</Text>
            <Text style={styles.textOnGradientTwo}>New Arrival</Text>
            <Text style={styles.textOnGradientThree}>
              Get a new car discount, only valid this friday
            </Text>
          </View>
          <View
            style={{
              width: '50%',
              position: 'relative',
            }}>
            <Image style={styles.bmwImage} source={bmwImage} />
          </View>
        </LinearGradient>
        <View
          style={{
            marginVertical: SPACING * 3,
          }}>
          <Text style={styles.TextTopDeals}>Top Deals</Text>
          <View
            style={{
              marginTop: SPACING * 2,
              flexWrap: 'wrap',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            {cars.map(car => (
              <LinearGradient colors={gradient} style={styles.cars}>
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Entypo
                      name="star"
                      size={SPACING * 1.6}
                      color={colors.red}
                    />
                    <Text
                      style={{
                        color: colors.light,
                        marginLeft: SPACING / 2,
                      }}>
                      {car.rating}
                    </Text>
                  </View>
                </View>
                <Image
                  source={car.image}
                  resizeMode="contain"
                  style={styles.carImage}
                />
                <Text
                  style={{
                    fontSize: SPACING * 1.8,
                    color: colors.light,
                  }}>
                  {car.name}
                </Text>
                <View
                  style={{
                    marginVertical: SPACING,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      color: colors.light,
                      fontSize: SPACING * 1.5,
                    }}>
                    $ {car.price}
                  </Text>
                  <TouchableOpacity
                    style={{
                      borderRadius: SPACING / 2,
                      overflow: 'hidden',
                    }}>
                    <LinearGradient
                      style={{
                        padding: SPACING / 3,
                        paddingHorizontal: SPACING / 2,
                      }}
                      colors={[colors['dark'], colors.dark_yellow]}>
                      <Ionicons
                        name="arrow-forward"
                        size={SPACING * 2}
                        color={colors.light}
                      />
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              </LinearGradient>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
