import React, { Component } from 'react';

import Splash from './src/SplashScreen'
import Home from './src/HomeScreen'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Splash />
    );
  }
}

