import 'react-native-gesture-handler';

import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import DashboardScreen from './screens/dashboard';
import LoginScreen from './screens/login';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import DetailsScreen from './screens/detail';

const Stack = createStackNavigator();

function App() {
  const token = AsyncStorage.getItem('@token');

  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Detail" component={DetailsScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
