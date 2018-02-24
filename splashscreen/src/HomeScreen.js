import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class SplashScreen extends Component {
    render () {
        return (
            <View style={styles.container}>
                <Text>Welcome!</Text>
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
    title: {
        color: 'black',
        fontSize: 35,
        fontWeight: 'bold'
    },
  });