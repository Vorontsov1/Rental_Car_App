import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import SPACING from '../../app/config/SPACING';
import colors from '../../app/config/colors';
import series from '../../app/data/series';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

const logo = require('../../assets/logo/tesla.png');

const CompanyScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: '#FFCE2B'}}>
      <View style={{marginHorizontal: SPACING * 2}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: SPACING * 3,
            }}>
            <Image
              source={logo}
              style={{
                width: SPACING * 7,
                height: SPACING * 13,
              }}
            />
            <Text
              style={{
                marginTop: SPACING * -4,
                color: colors.white,
                fontSize: SPACING * 5,
                fontWeight: '700',
              }}>
              Tesla
            </Text>
            <Text
              style={{
                color: colors['darkgray'],
                marginTop: SPACING,
              }}>
              5 Series
            </Text>
          </View>
          {series.map(item => (
            <LinearGradient
              key={item.id}
              colors={[colors.black, colors['dark_yellow']]}
              style={{
                height: 220,
                borderRadius: SPACING * 2,
                padding: SPACING * 2,
                marginBottom: SPACING * 2,
              }}>
              <Image
                resizeMode="contain"
                style={{
                  width: '100%',
                  height: 125,
                }}
                source={item.image}
              />
              <Text
                style={{
                  color: colors.darkgray,
                  fontSize: SPACING * 1.7,
                  fontWeight: '700',
                  marginBottom: 2,
                }}>
                {item.title}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text style={{color: colors.darkgray}}>
                  {' '}
                  Starting price from ${item.starting_price}
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('ForgotPassword')}
                  style={{
                    overflow: 'hidden',
                    borderRadius: SPACING / 2,
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
        </ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <LinearGradient
            style={{
              padding: SPACING / 5,
              borderRadius: SPACING * 2,
            }}
            colors={[colors.black, colors.dark_yellow]}>
            <LinearGradient
              style={{
                padding: SPACING * 1.6,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: SPACING * 2,
              }}
              colors={[colors['dark'], colors.dark_yellow]}>
              <Text
                style={{
                  color: colors.light,
                  fontSize: SPACING * 1.5,
                  fontWeight: '800',
                }}>
                View All
              </Text>
            </LinearGradient>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CompanyScreen;
