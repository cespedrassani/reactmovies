import React from 'react';
import {View, Thumbnail, Left, Text, Body, CardItem, Button} from 'native-base';
import moment from 'moment';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Card = ({item, onPress}) => (
  <View style={styles.card}>
    <CardItem button onPress={() => onPress(item)} style={styles.cardItemTitle}>
      <Left>
        <Thumbnail source={{uri: item.poster_path}} />
        <Body>
          <Text style={styles.cardItemTextTitle}>{item.title}</Text>
        </Body>
      </Left>
    </CardItem>
    <CardItem button onPress={() => onPress(item)}>
      <Body>
        <Text style={styles.cardItemBodyText} numberOfLines={4}>
          {item.overview}
        </Text>
      </Body>
    </CardItem>
    <CardItem button onPress={() => onPress(item)} style={styles.cardItem}>
      <Text style={styles.cardItemText}>
        {moment(item.release_date).format('DD/MM/YYYY')}
      </Text>
      <View style={styles.viewCardItem}>
        <Icon name="star-rate" style={styles.icon} size={16} />
        <Text style={styles.cardItemText}>
          {item.vote_average} ({item.vote_count})
        </Text>
      </View>
      <Button onPress={() => onPress(item)} small transparent>
        <Text style={styles.btnText}>Saiba mais</Text>
      </Button>
    </CardItem>
  </View>
);

export default Card;
