import React from 'react';
import { View, Text, StyleSheet, AsyncStorage } from 'react-native';

import Movie from '../components/Movie';

export default class Bookmark extends React.Component {
    state = {
        bookmark: []
    }

    // Native Method
    componentWillMount() {
        AsyncStorage.getItem('@Workshop:bookmark')
            .then(result => {
                let bookmark = result ? JSON.parse(result) : [];
                this.setState({ bookmark });
            });
    }

    removeFavorite = (movie) => {
        bookmark = this.state.bookmark.filter(bookmarkMovie => 
            bookmarkMovie.show_id !== this.state.movie.show_id
        );

        this.setState({ bookmark });
        AsyncStorage.setItem('@Workshop:bookmark', JSON.stringify(bookmark));
    }

    // View
    render () {
        return (
            <View style={styles.container}>
                { 
                    this.state.bookmark.map(movie => (
                      <Movie 
                        key={movie.show_id}
                        movie={movie}
                        favorite={true}
                        onFavoritePress={this.removeFavorite(movie)}
                      />  
                    )) 
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#333',
        padding: 20,
    }
});
