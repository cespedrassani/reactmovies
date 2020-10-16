import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Header, Left, Button, Text, Title, Body, Right} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {MoviesController} from '../../controllers';

function DetailsScreen({route: {params}, navigation}) {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const {item} = params;

  useEffect(() => {
    getMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getMovie = async () => {
    try {
      setLoading(true);
      const response = await MoviesController.getMovie(item.id);
      console.log(response);
      setMovie(response);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setError(e);
    }
  };

  return (
    <View>
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon size={20} name="arrow-back" style={{color: '#fff'}} />
          </Button>
        </Left>
        <Body>
          <Title>{movie.title}</Title>
        </Body>
        <Right />
      </Header>
    </View>
  );
}

export default DetailsScreen;
