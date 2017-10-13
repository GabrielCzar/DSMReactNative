import React from 'react';
import { StyleSheet, View, TextInput, ActivityIndicator } from 'react-native';

import Movie from '../components/Movie';

export default class Search extends React.Component {
    state = {
        search: '',
        movie: null,
        loading: false,
    };

    fetchMovies = async (search) => {
        if (search.length > 0) {
            //request
            this.setState({ loading: true });
            try {
                const response = await
                    fetch(`http://netflixroulette.net/api/api.php?title=${search}`);
                
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
                    <Movie movie={this.state.movie} />
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