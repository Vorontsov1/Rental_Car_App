import {StyleSheet} from 'react-native';
import colors from '../../app/config/colors';
import SPACING from '../../app/config/SPACING';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFCE2B',
  },
  loginContainer: {
    width: '90%', 
    alignItems: 'center',
    justifyContent: 'center',
   },
  title: {
    fontWeight: '600',
    fontSize: 40,
    color: '#fb5b5a',
    marginBottom: 40,
  },
  input: {
    backgroundColor: colors['darkgray'],
    width: '100%',
    height: 50,
    padding: SPACING * 1.5,
    borderRadius: SPACING * 2,
    color: colors.white,
    fontSize: SPACING * 2,
    paddingLeft: SPACING * 2,
    marginBottom: SPACING * 2,
    justifyContent: 'center',
  },
  inputText: {
    fontWeight: '700',
    height: 50,
    color: 'white',
  },
  forgotAndSignUpText: {
    color: colors.dark,
    fontSize: SPACING * 2,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: colors.red,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SPACING * 2,
    marginTop: SPACING * 2,
    marginBottom: SPACING * 2,
  },
  loginText: {
    color: colors.white,
    fontSize: SPACING * 2,
    fontWeight: '700',
  },
});
