import React from 'react';
import {
  View,
  Thumbnail,
  Left,
  Text,
  Body,
  CardItem,
  Button,
  Right,
} from 'native-base';
import moment from 'moment';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Card = ({item, onPress}) => {
  return (
    <View style={styles.card}>
      <CardItem>
        <Left>
          <Thumbnail source={{uri: item.poster_path}} square />
          <Body>
            <Text style={styles.cardItemTitle}>{item.title}</Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem>
        <Body>
          <Text numberOfLines={4}>{item.overview}</Text>
        </Body>
      </CardItem>
      <CardItem style={styles.cardItem}>
        <Text note>{moment(item.release_date).format('DD/MM/YYYY')}</Text>
        <View style={styles.viewCardItem}>
          <Icon name="star-rate" style={styles.icon} size={16} />
          <Text note>
            {item.vote_average} ({item.vote_count})
          </Text>
        </View>
        <Button onPress={() => onPress(item)} small transparent>
          <Text>Saiba mais</Text>
        </Button>
      </CardItem>
    </View>
  );
};

export default Card;
