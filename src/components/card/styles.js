import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');
const ratio = 208 / 328;

export const CARD_WIDTH = width * 0.9;
export const CARD_HEIGHT = CARD_WIDTH * ratio;

export const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
  },
  cardItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  viewCardItem: {
    flexDirection: 'row',
  },
  icon: {
    color: '#000',
    marginRight: 5,
  },
  cardItemTitle: {
    fontSize: 18,
    fontWeight: '700',
  },
});
