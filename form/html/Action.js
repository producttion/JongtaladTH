
// Initialize Firebase
var config = {
    apiKey: "AIzaSyB6bQk1TDpCH3ylmFL3HHbqMjqMapiLZpU",
    authDomain: "test-c5a03.firebaseapp.com",
    databaseURL: "https://test-c5a03.firebaseio.com",
    projectId: "test-c5a03",
    storageBucket: "test-c5a03.appspot.com",
    messagingSenderId: "919585579120"
};

firebase.initializeApp(config);


var dbRef = firebase.database().ref()



var checkVal = 0
var checkValue = 0;
function clickCheck() {
    checkVal += 1;
    $('.button').click(function () {
        
        console.log(checkVal);
        
        if(checkVal == 2) {
            checkVal -= 2;
        }

        if(checkVal == 0){
            checkValue = false
        }else if (checkVal == 1){
            checkValue = true
        }

        var setValue = $(this).attr("value");
        console.log(setValue);
        dbRef.child(`controler`)
            .set({
                setBound: setValue,
                setChecked: checkValue
            });
            
    });
}