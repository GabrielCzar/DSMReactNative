import React, { PureComponent } from 'react'
import { StyleSheet, Text, View, Platform } from 'react-native';
import TimerMixin from 'react-timer-mixin';
import SplashScreenPlugin from 'react-native-splash-screen';

export default class SplashScreen extends PureComponent {
    constructor(props) {
        super(props);
    }
    
    componentWillMount() {
      if (Platform.OS === 'android') {
        SplashScreenPlugin.hide();
        TimerMixin.setTimeout(() => {
            console.log('Init Splash Screen');
        }, Platform.OS === 'android' ? 5000 : 10500);
      }
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