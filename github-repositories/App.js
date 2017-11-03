import React, { Component } from 'react';

import { 
  Container
, Content 
, Header
, Tabs
, Tab
, Body
, Title
, List
, ListItem
, Left
, Right
, Thumbnail
, Text
} from 'native-base'; 

export default class App extends Component {
  state = {
    repos = [],
    users = [],
  };

  async componentDidMount() {
    const baseURL = 'https://api.github.com';
    const opts = {
      header: {
        'User-Agent': 'GithubApp'
      },
    };

    const userResponse = await fetch(`${baseURL}/orgs/rocketseat/members`, opts);
    const reposResponse = await fetch(`${baseURL}/orgs/rocketseat/repos`, opts);

    this.setState({
      repos: await reposResponse.json(),
      users: await userResponse.json(),
    });
  }

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Github</Title>
          </Body>
        </Header>

        <Tabs>
          <Tab heading="Repósitorios">
            <Content>
              <List>
                { this.state.repos.map(repo => (
                  <ListItem key={repo.id}>
                    <Body>
                      <Text>{ repo.name }</Text>
                      <Text note>{ repo.html_url }</Text>
                    </Body>  
                  </ListItem>   
                )) }
              </List>
            </Content>
          </Tab>
          <Tab heading="Usuários">
            <Content>
              <List>
                { this.state.users.map(user => (
                  <ListItem key={user.id}>
                    <Left>
                      <Thumbnail small source={{ uri: user.avatar_url }} />
                    </Left>
                    <Body>
                      <Text>{user.login}</Text>
                      <Text note>{user.html_url}</Text>
                    </Body>  
                  </ListItem>   
                )) }
              </List>
            </Content>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
   