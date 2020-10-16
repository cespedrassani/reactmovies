import React from 'react';
import {Animated} from 'react-native';
import Card from '../card';
import {CARD_HEIGHT, height, styles} from './styles';

const WalletCard = ({item, y, index, onPress}) => {
  const position = Animated.subtract(index * CARD_HEIGHT, y);
  const isDisappearing = -CARD_HEIGHT;
  const isTop = 0;
  const isBottom = height - CARD_HEIGHT;
  const isAppearing = height;
  const translateY = Animated.add(
    Animated.add(
      y,
      y.interpolate({
        inputRange: [0, 1 + index * CARD_HEIGHT],
        outputRange: [0, -index * CARD_HEIGHT],
        extrapolateRight: 'clamp',
      }),
    ),
    position.interpolate({
      inputRange: [isBottom, isAppearing],
      outputRange: [0, -CARD_HEIGHT / 4],
      extrapolate: 'clamp',
    }),
  );
  const scale = position.interpolate({
    inputRange: [isDisappearing, isTop, isBottom, isAppearing],
    outputRange: [0.5, 1, 1, 0.5],
    extrapolate: 'clamp',
  });
  const opacity = position.interpolate({
    inputRange: [isDisappearing, isTop, isBottom, isAppearing],
    outputRange: [0.5, 1, 1, 0.5],
  });
  return (
    <Animated.View
      style={[
        styles.card,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          opacity,
          marginBottom: index === 0 ? 0 : 20,
          transform: [{translateY}, {scale}],
        },
      ]}
      key={index}>
      <Card {...{item, onPress}} />
    </Animated.View>
  );
};

export default WalletCard;
