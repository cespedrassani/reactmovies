import {Dimensions, StyleSheet} from 'react-native';
import {primaryColor, secondaryColor} from '../../styles';

const {width} = Dimensions.get('window');
const ratio = 208 / 328;

export const CARD_WIDTH = width * 0.9;
export const CARD_HEIGHT = CARD_WIDTH * ratio;

export const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 10,
  },
  cardItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    borderBottomStartRadius: 25,
  },
  cardItemTitle: {
    backgroundColor: primaryColor,
    borderTopEndRadius: 25,
  },
  viewCardItem: {
    flexDirection: 'row',
  },
  icon: {
    color: '#000',
    marginRight: 5,
  },
  cardItemTextTitle: {
    color: secondaryColor,
    fontSize: 18,
    fontWeight: '700',
  },
  btnText: {
    fontWeight: '700',
    fontSize: 15,
    color: primaryColor,
  },
  cardItemText: {
    fontWeight: '700',
    fontSize: 15,
  },
  cardItemBodyText: {
    textAlign: 'justify',
  },
});
