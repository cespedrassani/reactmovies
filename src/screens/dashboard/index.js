import React, {useEffect, useState} from 'react';
import {MoviesController} from '../../controllers';
import {Animated, FlatList, View} from 'react-native';
import WalletCard from '../../components/walletCard';
import {Header, Body, Left, Right, Title, Button} from 'native-base';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

function DashboardScreen({navigation}) {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const getMovies = async () => {
    try {
      setLoading(true);
      const response = await MoviesController.getMovies(page);
      console.log(response);
      setMovies([...movies, ...response.results]);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setError(e);
    }
  };

  const y = new Animated.Value(0);
  const onScroll = Animated.event([{nativeEvent: {contentOffset: {y}}}], {
    useNativeDriver: true,
  });

  const onPress = (item) => {
    navigation.navigate('Detail', {item});
  };

  return (
    <View style={styles.viewContainer}>
      <Header>
        <Left />
        <Body>
          <Title>Filmes</Title>
        </Body>
        <Right>
          <Button transparent onPress={() => console.log('teste')}>
            <Icon size={20} name="language" style={{color: '#fff'}} />
          </Button>
        </Right>
      </Header>
      <AnimatedFlatList
        scrollEventThrottle={16}
        bounces={false}
        data={movies}
        renderItem={({index, item}) => (
          <WalletCard {...{y, item, index, onPress}} />
        )}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={() => {
          setPage(page + 1);
        }}
        onEndReachedThreshold={0.1}
        {...{onScroll}}
      />
    </View>
  );
}

export default DashboardScreen;
