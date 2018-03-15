'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    StatusBar,
    WebView,
    View,
} from 'react-native';


import { Actions } from 'react-native-router-flux';

import * as commonStyles from '../styles/commonStyles'
import * as commonColors from '../styles/commonColors'
import { screenWidth, screenHeight } from '../styles/commonStyles';

export default class WebViewer extends Component {
    constructor(props) {
        super(props);
        this.state={
            url: props.url,
        }
        console.log(props.url)
    }

    render() {
        return (
            <View style={styles.container}>
                <WebView 
                    source={{uri: this.state.url}}
                    startInLoadingState={true}
                    style={{marginTop:20}}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(255, 255, 255)',
    },
});
