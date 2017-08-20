import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import MapForm from '../form/MapForm';

export default class Padform extends Component {
    state = {
        modalVisible: false,
    }
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }
    render() {
        return (
            <View>
                {this.state.modalVisible
                    ? <MapForm />
                    : <View style={{ width: '100%', height: 600, backgroundColor: '#21618c' }}>
                        <View style={{ width: '100%', height: 300 }}>
                            <View style={styles.floatLeft}>
                                <Text>Sur Name: </Text>
                                <TextInput style={styles.textinput} />
                            </View>
                            <View style={styles.floatLeft}>
                                <Text>Last Name: </Text>
                                <TextInput style={styles.textinput} />
                            </View>
                            <View style={styles.floatLeft}>
                                <Text>TelePhone No: </Text>
                                <TextInput style={styles.textinput} />
                            </View>
                            <View style={styles.floatLeft}>
                                <Text>Produtc Type: </Text>
                                <ModalDropdown options={['option 1', 'option 2']}>
                                    <Text>Menu</Text>
                                </ModalDropdown>
                            </View>
                        </View>

                        <View style={{ width: '100%', height: 300 }}>
                            <View style={styles.floatLeft}>
                                <View style={{ width: '50%' }}>
                                    <TouchableOpacity onPress={() => {
                                        this.setModalVisible(true)
                                    }}ss>
                                    <Text>ยกเลก</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ width: '50%' }}>
                                    <TouchableOpacity onPress={() => {
                                        this.setModalVisible(true)
                                    }}>
                                    <Text>ตกลง</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    floatLeft: {
        flex: 1,
        flexDirection: 'row'
    },
    textinput: {
        height: 40,
        width: 200,
    }
});