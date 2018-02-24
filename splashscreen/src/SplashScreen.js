'use strict';

import React, { PureComponent } from 'react'
import { StyleSheet, Text, View, Platform } from 'react-native';
import TimerMixin from 'react-timer-mixin';
import SplashScreenPlugin from 'react-native-splash-screen';

// Na teoria, seria a page inicial
export default class SplashScreen extends PureComponent {
    constructor(props) {
        super(props);
    }
    
    componentWillMount() {
        if (Platform.OS === 'android') {
            TimerMixin.setTimeout(
                () => {
                    console.log('SPLASH SCREEN');
                }, 5000);
        }
	// Utilizar para verificar algum token ou action inicial
    }

    componentDidMount() {
        SplashScreenPlugin.hide();
    }

    render () { 
        return (
            <View style={styles.container}>
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>Splash Screen!</Text>
                </View>
                <View>
                    <Text style={styles.subtitle}>Powered by React Native!</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'cyan',
    },
    titleWrapper: {
        justifyContent: 'center',
        flex: 1,
    },
    title: {
        color: 'black',
        fontSize: 35,
        fontWeight: 'bold'
    },
    subtitle: {
        fontWeight: '200',
        paddingBottom: 20
    },
  });
