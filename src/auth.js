import React, {useEffect} from 'react';

import AsyncStorage from '@react-native-community/async-storage';
import {View} from 'native-base';

function Auth({navigation}) {
  useEffect(() => {
    bootstrapAsync();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('@token');
    navigation.navigate(userToken ? 'Dashboard' : 'Login');
  };

  return <View />;
}

export default Auth;
