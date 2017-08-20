/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet,Text, View,TouchableHighlight} from 'react-native';
import MapForm from './form/MapForm';
import Popup from './form/Popup';
import Padform from './form/Padform';

export default class JongtaladTH extends Component {
  state = {
    modalVisible: false,
  }
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  render() {
    return (
      <View>
        <View style={{ width: '100%', height: 25, backgroundColor: 'powderblue' }} />
        <View style={{ width: '100%', height: 80, backgroundColor: '#34495e' }}>
          <TouchableHighlight onPress={() => { this.setModalVisible(true) }}>
            <Text>Show Modal</Text>
          </TouchableHighlight>
        </View>
        {this.state.modalVisible
          ? <Padform />
          : <MapForm />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('JongtaladTH', () => JongtaladTH);
