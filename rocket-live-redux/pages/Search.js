import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

export default class Search extends React.Component {
    render () {
        return (
            <View style={styles.containera}>
                <TextInput style={styles.input} placeholder="Digite sua busca" />
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
        fontSize: 12,
        paddingHorizontal: 20,
        //fontFamily: 'Arial',
    },

    loading: {
        marginTop: 20,
    }
});