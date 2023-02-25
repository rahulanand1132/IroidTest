import React from 'react';

import MainNavigator from './src/navigation/mainNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import Store from './src/store/store';


export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </Provider>
  );
}