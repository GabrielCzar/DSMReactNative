import React from 'react';

import { Container, Text} from 'native-base';

import { StackNavigator } from 'react-navigation';

export default class ChatScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
      title: `Chat with ${navigation.state.params.user}`,
      headerTintColor: 'lightgrey',
      headerStyle: { backgroundColor: 'deepskyblue', borderBottomColor: 'white' },
    })

    render() {
      const { params } = this.props.navigation.state;

      return (
        <Container>
          <Text>Chat content with {params.user}</Text>
        </Container>
      );
    }
  }