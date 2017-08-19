import *as firebase from "firebase"
var config = {
    apiKey: "AIzaSyAwoXBhfL3lIhgSp59R3FZo43HSf1gk4TY",
    authDomain: "eplan-96a5a.firebaseapp.com",
    databaseURL: "https://eplan-96a5a.firebaseio.com",
    projectId: "eplan-96a5a",
    storageBucket: "eplan-96a5a.appspot.com",
    messagingSenderId: "395301044424"
}
firebase.initializeApp(config);

export var dbRef = firebase.database().ref()
export var dB = firebase.database()
// export var firebaseAuth = firebase.auth
// export var user = firebase.auth().currentUser;