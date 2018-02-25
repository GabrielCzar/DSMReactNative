'use strict';

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Platform
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>
            Minicurso Gonative!
          </Text>
        </View>

        <ScrollView style={styles.repoList}>
          <View style={styles.repo} />
          <View style={styles.repo} />
          <View style={styles.repo} />
          <View style={styles.repo} />
          <View style={styles.repo} />
          <View style={styles.repo} />
          <View style={styles.repo} />
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
  header: {
    height: (Platform.OS === 'ios') ? 70 : 50,
    paddingTop: (Platform.OS === 'ios') ? 20: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF'
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  repoList: {
    padding: 20
  },
  repo: {
    padding: 20,
    backgroundColor: '#FFF',
    height: 120,
    marginBottom: 20,
    borderRadius: 5
  }
});
