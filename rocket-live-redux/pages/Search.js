import React from 'react';
import { StyleSheet, View, TextInput, ActivityIndicator, AsyncStorage } from 'react-native';

import Movie from '../components/Movie';

export default class Search extends React.Component {
    state = {
        search: '',
        movie: null,
        loading: false,
        bookmark: [],
    };

    // Get Data from DB of the APP
    // Native method
    componentWillMount() {
        AsyncStorage.getItem('@Workshop:bookmark')
            .then(result => {
                let bookmark = result ? JSON.parse(result) : [];
                this.setState({ bookmark });
            });
    }

    // Search the movie on API
    fetchMovies = async (search) => {
        if (search.length > 0) {
            //request
            this.setState({ loading: true });
            try {
                const response = await fetch(`http://netflixroulette.net/api/api.php?title=${search}`);
                
                if (!response.ok) throw {};

                const movie = await response.json();
                
                this.setState({ movie, loading: false });
            } catch (error) {
                this.setState({ movie: null, loading: false });
            }
        } else {
            this.setState({ movie: null });
        }
    };

    // Add movie to Favorites
    handleFavorite = () => {
        let bookmark = this.state.bookmark;

        if (this.isFavorite()) 
            bookmark = bookmark.filter(bookmarkMovie => 
                bookmarkMovie.show_id !== this.state.movie.show_id);
        else 
            bookmark.push(this.state.movie);
        
        this.setState({ bookmark });

        AsyncStorage.setItem('@Workshop:bookmark', JSON.stringify(bookmark));
    };

    isFavorite = () => {
        return this.state.bookmark.filter(bookmarkMovie => 
            bookmarkMovie.show_id === this.state.movie.show_id
        ).length > 0;
    };

    // Render View
    render () {
        return (
            <View style={styles.container}>
                <TextInput 
                    style={styles.input} 
                    placeholder="Digite sua busca"
                    onChange={this.fetchMovies} />

                { this.state.loading &&
                    <ActivityIndicator style={styles.loading} color="#FFF" size="small" />
                } 

                { this.state.movie && 
                    <Movie 
                        movie={this.state.movie} 
                        onFavoritePress={this.handleFavorite()}
                        favorite={this.isFavorite()}
                    />
                }

            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333',
        padding: 20,
    },

    input: {
        alignSelf: 'stretch',
        backgroundColor: '#FFF',
        height: 40,
        borderRadius: 3,
        marginTop: 20,
        fontSize: 16,
        paddingHorizontal: 20,
        //fontFamily: 'Arial',
    },

    loading: {
        marginTop: 20,
    }
});