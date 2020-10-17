import {Dimensions, StyleSheet} from 'react-native';
import {CARD_HEIGHT as DEFAULT_CARD_HEIGHT} from '../card/styles';

const {height: wHeight} = Dimensions.get('window');

export const MARGIN = 16;
export const CARD_HEIGHT = DEFAULT_CARD_HEIGHT + MARGIN * 2;
export const height = wHeight - 64;

export const styles = StyleSheet.create({
  card: {
    marginVertical: MARGIN,
    alignSelf: 'center',
  },
});
