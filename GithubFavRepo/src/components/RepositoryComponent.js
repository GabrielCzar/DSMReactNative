import React, { PureComponent } from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

export default class Repo extends PureComponent {
    render () {
        return (
            <View style={styles.repo}>
                <Image 
                    style={styles.repoImage}
                    source={{ uri: this.props.repo.thumbnail }} />
                <View style={styles.repoInfo}>
                    <Text style={styles.repoTitle}>{ this.props.repo.title }</Text>
                    <Text style={styles.repoAuthor}>{ this.props.repo.author }</Text>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    repo: {
        padding: 20,
        backgroundColor: '#FFF',
        marginBottom: 20,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    repoImage: {
        height: 50,
        width: 50, 
        borderRadius: 25
    },
    repoInfo: {
        marginLeft: 10
    },
    repoTitle: {
        fontWeight: 'bold',
        color: '#333'
    },
    repoAuthor: {
        fontSize: 12,
        color: '#999'
    }
});