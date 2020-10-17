import React, {useEffect, useState} from 'react';
import {View, Button, Text} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {MoviesController} from '../../controllers';
import {Image} from 'react-native';
import {styles} from './styles';
import moment from 'moment';

function DetailsScreen({item, onExit}) {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    getMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toHour = (num) => {
    var hours = Math.floor(num / 60);
    var minutes = num % 60;
    return hours + ':' + minutes;
  };

  const getMovie = async () => {
    try {
      const response = await MoviesController.getMovie(item.id);
      console.log(response);
      setMovie(response);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View>
      <View>
        <Image style={styles.img} source={{uri: movie.backdrop_path}} />
      </View>
      <View style={styles.viewText}>
        <Text style={styles.viewTextTitle}>{movie.title}</Text>
        <Text style={styles.viewTextSubTitle}>{movie.tagline}</Text>
        <Text style={styles.viewTextOverview}>{movie.overview}</Text>
        <View style={styles.viewInfo}>
          <View style={styles.viewInfoView}>
            <Icon name="star-rate" size={16} />
            <Text style={styles.viewInfoText}>{movie.vote_average}</Text>
          </View>
          <View style={styles.viewInfoView}>
            <Icon name="today" size={16} />
            <Text style={styles.viewInfoText}>
              {moment(movie.release_date).format('DD/MM/YYYY')}
            </Text>
          </View>
          <View style={styles.viewInfoView}>
            <Icon name="access-time" size={16} />
            <Text style={styles.viewInfoText}>{toHour(movie.runtime)}</Text>
          </View>
        </View>
      </View>
      <View>
        <Button small style={styles.btn} onPress={onExit}>
          <Icon style={styles.btnIcon} name="keyboard-arrow-down" />
        </Button>
      </View>
    </View>
  );
}

export default DetailsScreen;
