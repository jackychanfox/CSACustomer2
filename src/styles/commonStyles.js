import {
    StyleSheet,
    Dimensions,
    Platform,
  } from 'react-native';
  
  export const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
  export const headerHeight = 80;
  export const menuHeight = 60;
  export const viewHeight = screenHeight - headerHeight - menuHeight;
  
  /*   auth   */
  export const logo                   = require('../../public/images/logo.png');