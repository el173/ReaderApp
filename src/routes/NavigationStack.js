import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MainView from '../screens/MainView';
import DetailView from '../screens/DetailView';

const mainScreens = {
  home: {screen: MainView, title: 'Home'},
  detailView: {screen: DetailView, title: 'detailView'},
};

const Stack = createNativeStackNavigator();

export function MainStack() {
  let screens = [];
  for (let key in mainScreens) {
    if (mainScreens.hasOwnProperty(key)) {
      screens.push(
        <Stack.Screen
          key={key}
          name={key}
          component={mainScreens[key].screen}
        />,
      );
    }
  }
  return (
    <Stack.Navigator
      initialRouteName={'home'}
      screenOptions={{
        gestureEnabled: false,
        headerShown: false,
      }}>
      {screens}
    </Stack.Navigator>
  );
}
