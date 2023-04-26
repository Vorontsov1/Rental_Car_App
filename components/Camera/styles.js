import { StyleSheet } from "react-native";
import colors from "../../app/config/colors";
import SPACING  from "../../app/config/SPACING";





const styles = StyleSheet.create({
  customBtn: {
    width: '80%',
    backgroundColor: 'blue',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SPACING * 2,
    marginTop: SPACING * 2,
    marginBottom: SPACING * 2,
  },
  customBtnText: {
    color: colors.white,
    fontSize: SPACING * 2,
    fontWeight: 'bold',
  },
});

export default styles;