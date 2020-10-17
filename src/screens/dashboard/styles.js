import {StyleSheet} from 'react-native';
import {secondaryColor} from '../../styles';

export const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: secondaryColor,
  },
  headerBody: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    width: 20,
  },
  modal: {
    backgroundColor: 'transparent',
    borderRadius: 40,
  },
});
