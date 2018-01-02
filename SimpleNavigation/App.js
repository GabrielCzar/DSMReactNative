import React from 'react';

import { StackNavigator } from 'react-navigation';

import HomeScreen from './pages/HomePage'
import ChatScreen from './pages/ChatPage'

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
});

export default App;