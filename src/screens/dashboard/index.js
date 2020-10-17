import React, {useEffect, useState} from 'react';
import {MoviesController} from '../../controllers';
import {Animated, FlatList, RefreshControl, View} from 'react-native';
import {Body, Container, Fab, Left, Right, Title} from 'native-base';
import {styles} from './styles';
import Modal from 'react-native-modal';
import {Header, ListCards, Loader} from '../../components';
import DetailsScreen from '../detail';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {primaryColor} from '../../styles';
import AsyncStorage from '@react-native-community/async-storage';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

function DashboardScreen({navigation}) {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({});
  const [visible, setVisible] = useState(false);
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
    setMovie(item);
    // navigation.navigate('Detail', {item});
    setVisible(true);
  };

  const logout = async () => {
    await AsyncStorage.clear();
    navigation.navigate('Login');
  };

  return (
    <View style={styles.viewContainer}>
      <Header>
        <Body style={styles.headerBody}>
          <Title>Filmes</Title>
        </Body>
      </Header>
      <Loader visible={loading} />
      <AnimatedFlatList
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={getMovies} />
        }
        scrollEventThrottle={16}
        bounces={false}
        data={movies}
        renderItem={({index, item}) => (
          <ListCards {...{y, item, index, onPress}} />
        )}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={() => {
          setPage(page + 1);
        }}
        onEndReachedThreshold={0.1}
        {...{onScroll}}
      />
      <Modal
        onBackdropPress={() => setVisible(false)}
        isVisible={visible}
        onBackButtonPress={() => setVisible(false)}
        onDismiss={() => setVisible(false)}
        animationIn="zoomInUp"
        animationInTiming={300}
        animationOut="zoomOut"
        animationOutTiming={300}>
        <View style={styles.modal}>
          <DetailsScreen
            item={movie}
            navigation={navigation}
            onExit={() => setVisible(false)}
          />
        </View>
      </Modal>
      <Fab
        active={true}
        // direction="up"
        containerStyle={{marginBottom: '15%'}}
        style={{backgroundColor: primaryColor}}
        position="bottomLeft"
        onPress={logout}>
        <Icon name="logout" />
      </Fab>
    </View>
  );
}

export default DashboardScreen;
