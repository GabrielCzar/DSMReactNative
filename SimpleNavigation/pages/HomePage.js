import React from 'react';

import { 
  Container, 
  Content, 
  Button, 
  Text, 
  List, 
  ListItem, 
  Title, 
   } from 'native-base';

import { StackNavigator } from 'react-navigation';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
      title: 'Welcome to Chat',
      headerTintColor: 'lightgrey',
      headerStyle: { backgroundColor: 'black' },
    };
    render() {
      const { navigate } = this.props.navigation;

      var items = ['Simon Mignolet','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can'];

      return (
        <Container>
            <Content>
              <List dataArray={items}
                  renderRow={(item) =>
                    <ListItem onPress={() => navigate('Chat', { user: item })} last>
                      <Text>{ item }</Text>
                    </ListItem>
                  }>
              </List>
            </Content>
        </Container>
      );
    }
  }