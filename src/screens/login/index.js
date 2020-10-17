import React, {useEffect, useState} from 'react';
import {Button, Text, View} from 'native-base';
import {styles} from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import {Animated, StatusBar} from 'react-native';
import {primaryColor} from '../../styles';
import {LoginController} from '../../controllers';

function LoginScreen({navigation}) {
  const [offset] = useState(new Animated.ValueXY({x: 0, y: 95}));
  const [opacity] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const login = async () => {
    try {
      console.log(LoginController);
      const response = await LoginController.requestToken();
      await AsyncStorage.setItem('@token', JSON.stringify(response));
      navigation.navigate('Dashboard');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.background}>
      <StatusBar barStyle="default" backgroundColor={primaryColor} />
      <Animated.View
        style={[
          styles.container,
          {
            opacity,
            transform: [{translateY: offset.y}],
          },
        ]}>
        <Button style={styles.btn} onPress={login}>
          <Text style={styles.btnText}>Entrar</Text>
        </Button>
      </Animated.View>
    </View>
  );
}

export default LoginScreen;
