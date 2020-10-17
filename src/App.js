import 'react-native-gesture-handler';

import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Auth from './auth';
import {DashboardScreen, LoginScreen} from './screens';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth" headerMode="none">
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
          name="Dashboard"
          component={DashboardScreen}
        />
        <Stack.Screen
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
          }}
          name="Login"
          component={LoginScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
