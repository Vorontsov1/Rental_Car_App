import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  imageBackground: {
    width: 40,
    height: 40,
    borderRadius: 20,

    overflow: 'hidden',
  },
  iconOverlay: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    position: 'absolute'
  },
  button: {
    margin: 15,
    backgroundColor: 'lightgrey',
    borderRadius: 30,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    margin: 10,
    backgroundColor: 'lightgrey',
    borderRadius: 30,
    padding: 15,
    fontSize: 15,
  },
  linearGradientContainer: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  linearGradient: {
    height: 160,
    width: '95%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  textWrap: {
    marginTop: 20,

    maxWidth: '50%',
    paddingLeft: 23,
  },
  text: {
    fontSize: 15,
    color: 'lightgrey',
  },
  textOne: {
    fontSize: 35,
    fontWeight: '800',
    marginBottom: 10,
  },
  textTwo: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
  },
  textThree: {},
  imageWrap: {
    width: '50%',
    position: 'relative',
  },
  image: {
    marginTop: 23,
    marginLeft: 25,
    width: '67%',
    height: 100,
  },
  textDeals: {
    color: 'white',
    fontSize: 25,
    fontWeight: '600',
    marginLeft: 35,
  },
  imageWrapper: {
    position: 'relative',
  },

  svgDots: {
    position: 'absolute',
    top: 2, // Adjust the position as needed
    left: 2,
    borderRadius: 100,
    padding: 5, // Adjust the position as needed
  },
});

export default styles;
