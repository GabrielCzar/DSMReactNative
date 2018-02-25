import React, { Component } from 'react'
import { TouchableOpacity, View, StyleSheet, Text, TextInput, Modal } from 'react-native'

export default class ModalComponent extends Component {
    state = {
        newRepoTitle: '',
      };

    _onAdd = () => {
        this.props.onAdd(this.state.newRepoTitle);
    
        this.setState({ newRepoTitle: '' });
      };

    render () {
        return (
            <Modal animationType="fade" transparent={true} visible={this.props.visible} onRequestClose={() => {}}>
                <View style={styles.modalContainer}>
                    <View style={styles.boxContainer}>
                        <Text style={styles.boxTitle}>Adicionar Repositório</Text>
                        <TextInput
                            autoFocus
                            autoCapitalize='none'
                            style={styles.boxInput}
                            underlineColorAndroid='rgba(0,0,0,0)'
                            placeholder='organização/repositório'
                            value={this.state.newRepoTitle}
                            onChangeText={newRepoTitle => this.setState({ newRepoTitle })}
                            />
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={[styles.button, styles.cancelButton]}
                                onPress={this.props.onCancel}
                                >
                                <Text style={styles.buttonText}>Cancelar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.button, styles.submitButton]}
                                onPress={this._onAdd}
                                >
                                <Text style={styles.buttonText}>Adicionar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    boxContainer: {
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        width: 280,
    },
    boxTitle: {
        fontWeight: 'bold',
        fontSize: 16
    },
    boxInput: {
         alignSelf: 'stretch',
         marginTop: 10,
         paddingVertical: 0,
         paddingHorizontal: 20,
         borderWidth: 1,
         borderColor: '#DDD',
         height: 40,
        borderRadius: 3,
    },
    buttonContainer: {
        marginTop: 10,
         height: 40,
         flexDirection: 'row'
    },
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
    },
    cancelButton: {
        backgroundColor: '#e25f5f',
        marginRight: 5
    },
    submitButton: {
        backgroundColor: '#70BD85',
        marginLeft: 5
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 12,
        color: 'white'
    }
});