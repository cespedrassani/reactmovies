import {StyleSheet} from 'react-native';
import {primaryColor, secondaryColor} from '../../styles';

export const styles = StyleSheet.create({
  background: {
    backgroundColor: primaryColor,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: secondaryColor,
    borderBottomStartRadius: 15,
    borderTopEndRadius: 15,
    width: 150,
    justifyContent: 'center',
  },
  btnText: {
    color: primaryColor,
    fontWeight: '700',
  },
});
