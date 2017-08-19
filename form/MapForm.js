import React, { Component } from 'react';
import {
    AppRegistry, StyleSheet,
    Text, View, WebView, Modal,
    TouchableHighlight
} from 'react-native';
import { MAPTASE } from '../form/Map';
import Popup from '../form/Popup';

// import { dB, dbRef } from '../configFirebase'
import *as firebase from "firebase";
var config = {
    apiKey: "AIzaSyAwoXBhfL3lIhgSp59R3FZo43HSf1gk4TY",
    authDomain: "eplan-96a5a.firebaseapp.com",
    databaseURL: "https://eplan-96a5a.firebaseio.com",
    projectId: "eplan-96a5a",
    storageBucket: "eplan-96a5a.appspot.com",
    messagingSenderId: "395301044424"
}
firebase.initializeApp(config);

export var dbRef = firebase.database().ref("controler/setChecked")

export default class MapForm extends Component {

    

    constructor(props) {
        super(props);
        this.state = {
            contro: true
        };
        // var checkVal = 0;
         dbRef.once('value', function (snapshot) {
            
                this.setState={
                    contro: snapshot.val()
                }
           
               
            
        });
    }
    render() {
        return (
            <View>
                <View style={{ width: '100%', height: 25, backgroundColor: 'powderblue' }} />
                <View style={{ width: '100%', height: 80, backgroundColor: '#34495e' }}>
                </View>
                {this.state.contro
                    ? <View style={{ width: '100%', height: 600, backgroundColor: '#21618c' }}>
                        <View style={styles.content}>
                            <View style={styles.mapBox}>
                                <WebView source={{ uri: MAPTASE }} style={styles.webOn} />
                            </View>
                        </View>
                    </View>
                    :<Popup/>}
            </View>

        );
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: '60%',
        paddingTop: '5%',
    },
    mapBox: {
        backgroundColor: '#ef553a',
        width: '90%',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 5,
        paddingRight: 5,
        borderRadius: 5
    },
    webOn: {

        width: '100%',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 5,
        paddingRight: 5,
        borderRadius: 5
    },

});