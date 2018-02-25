'use strict';

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  AsyncStorage  
} from 'react-native';

import Repo from './src/components/RepositoryComponent'
import NewModal from './src/components/ModalComponent'

export default class App extends Component {
  state = {
    modalVisible: false,
    repos: [],
  };

  async componentDidMount() {
    const repos = JSON.parse(await AsyncStorage.getItem('repositories')) || [];

    this.setState({ repos });
  }

  openModal = () => {
    this.setState({ modalVisible: true });
  };

  _addRepository = async (name) => {
    const repoCall = await fetch(`https://api.github.com/repos/${name}`);
    const response = await repoCall.json();

    const repository = {
      id: response.id,
      thumbnail: response.owner.avatar_url,
      title: response.name,
      author: response.owner.login,
    };

    this.setState({
      modalVisible: false,
      repos: [
        ...this.state.repos,
        repository,
      ],
    });

    await AsyncStorage.setItem('repositories', JSON.stringify(this.state.repos));
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>
            Minicurso Gonative! 
          </Text>

          <TouchableOpacity onPress={this.openModal}>
            <Text style={styles.headerButton}>+</Text>
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={styles.repoList}>
          { this.state.repos.map(repo => <Repo key={repo.id} repo={repo}/> ) }
        </ScrollView>

        <NewModal 
          visible={this.state.modalVisible} 
          onCancel={() => this.setState({ modalVisible: false })} 
          onAdd={name => this._addRepository(name)}
          />
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
  },
  headerButton: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black'
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  repoList: {
    padding: 20
  },
});
