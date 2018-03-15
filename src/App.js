import React, { Component } from 'react';
import {
    Platform,
    Text,
    View,
} from 'react-native';

import { Actions, ActionConst, Scene, Router } from 'react-native-router-flux';


import Introduce from './scenes/introduce'
import WebViewer from './scenes/webViewer'

export default class App extends Component{
  constructor(props) {
      super(props);
      Text.defaultProps.allowFontScaling=false
  }

  render() {
      const scenes = Actions.create(
          <Scene key="root">
              <Scene key="Introduce" component={Introduce} hideNavBar initial={true} hideNavBar  />
              <Scene key="WebViewer" component={WebViewer} hideNavBar /> 
          </Scene>
      )

      return (
          <Router hideNavBar scenes={scenes} />
      );
  }
}