import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import Search from './pages/Search';
import Bookmark from './pages/Bookmark';

StatusBar.setBarStyle('light-content');

const App = DrawerNavigator({
  Search: { screen: Search},
  Bookmark: { screen: Bookmark }
});

export default App;


// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Hello World! React Native!</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
