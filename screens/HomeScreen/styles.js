import { StyleSheet } from 'react-native';
import SPACING from '../../app/config/SPACING';
import colors from '../../app/config/colors';

const styles = StyleSheet.create({
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
  image: {
    width: '100%',
    height: '100%',
    borderRadius: SPACING * 2,
  },
});

export default styles;
