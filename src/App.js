import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import './config/ReactotronConfig';

import Main from './pages/Main';
import User from './pages/User';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#7159c1',
          },
          headerTintColor: '#FFF',
          headerTitleStyle: {
            // fontWeight: 'bold',
            textAlign: 'center',
          },
        }}
      >
        <Stack.Screen
          name="Main"
          component={Main}
          options={Main.navigationOptions}
        />
        <Stack.Screen
          name="User"
          component={User}
          options={User.navigationOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
