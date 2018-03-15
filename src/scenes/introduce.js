'use strict';

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TextInput,
    TouchableOpacity,
    Alert,
    StatusBar,
} from 'react-native';


import { Actions } from 'react-native-router-flux';

import * as commonStyles from '../styles/commonStyles'
import * as commonColors from '../styles/commonColors'
import { screenWidth, screenHeight } from '../styles/commonStyles';

import Cache from '../utils/cache'

import azureService from '../services/azureService'

export default class Introduce extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: 'Welcome to ROCKtree',
            description: 'Lorem lpsum is imply dummy text of the printing and type setting industry. Lorem lpsum has been the industry`s standard dummy text ever since the 1500s.',
            url: 'https://www.trade.gov.sg'
        };
    }

    componentDidMount(){
        //azureService.getCSAData((err, res)=>{
            // console.log(err, res);
            // this.setState({
            //     title: res.title,
            //     description: res.description,
            //     url: res.url
            // })
        //})
    }

    goMainView(){
        Actions.WebViewer({url:this.state.url})
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image source={commonStyles.logo} style={styles.logo}/>
                </View>
                <View style={styles.body}>
                    <Text style={styles.title}>{this.state.title}</Text>
                    <Text style={styles.description}>{this.state.description}</Text>
                </View>
                <View style={styles.bottomContainer}>
                    <TouchableOpacity activeOpacity={0.7} style={styles.bottomButton} onPress={()=>this.goMainView()}>
                        <Text style={styles.buttonText}>Enter</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(255, 255, 255)',
    },
    logoContainer:{
        marginTop:60,
        justifyContent: 'center',
        alignItems:'center',
    },
    logo:{
        width: 240,
        height: 150,
        resizeMode: 'contain',
    },
    body:{
        flex:1,
        marginTop:20,
        alignItems: 'center',
        padding: 20,
    },
    title:{
        fontSize:32,
        color: 'black',
        textAlign: 'center',
    },
    description:{
        marginTop:20,
        fontSize:18,
        color: commonColors.textColor2,
        textAlign: 'center',
    },
    bottomContainer:{
        position: 'absolute',
        bottom: 20,
        width:'100%',
        height:50,
        paddingHorizontal: 20,
    },
    bottomButton:{
        backgroundColor: commonColors.theme,
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 3,
        flex:1,
    },
    buttonText:{
        fontSize:15,
        color: 'white',
    }
});
