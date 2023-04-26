import { StyleSheet, Dimensions } from 'react-native';
import SPACING from '../../app/config/SPACING';
import colors from '../../app/config/colors';


const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: '#FFCE2B',
  },
  circleGradient: {
    height: SPACING * 4,
    width: SPACING * 4,
    borderRadius: SPACING * 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  entypoIcon: {
    height: SPACING * 3,
    width: SPACING * 3,
    backgroundColor: colors.black,
    borderRadius: SPACING * 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerGradient: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: SPACING * 2,
  },
  input: {
    backgroundColor: colors['darkgray'],
    padding: SPACING * 1.5,
    borderRadius: SPACING * 2,
    color: colors.white,
    fontSize: SPACING * 2,
    paddingLeft: SPACING * 4,
  },
  searchIcon: {
    position: 'absolute',
    left: SPACING * 1,
  },
  bigGradient: {
    padding: SPACING * 3,
    height: 160,
    borderTopLeftRadius: SPACING * 2,
    borderTopRightRadius: SPACING * 2,
    flexDirection: 'row',
  },
  textOnGradientOne: {
    color: colors.dark,
    fontSize: SPACING * 3.5,
    fontWeight: '800',
    marginBottom: SPACING,
  },
  textOnGradientTwo: {
    color: colors.dark,
    fontSize: SPACING * 2.5,
    fontWeight: '700',
    marginBottom: SPACING,
  },
  textOnGradientThree: {
    color: colors.dark,
    fontSize: 13,
  },
  bmwImage: {
    width: '100%',
    height: 100,
    aspectRatio: 4 / 3,
  },
  TextTopDeals: {
    color: colors.white,
    fontSize: SPACING * 2,
    fontWeight: '600',
  },
  cars: {
    height: 220,
    width: width / 2 - SPACING * 3,
    borderRadius: SPACING * 2,
    marginBottom: SPACING * 2,
    padding: SPACING,
  },
  carImage: {
    width: '100%',
    height: 100,
  },
});

export default styles;
