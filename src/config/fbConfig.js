import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


 var config = {
    apiKey: "AIzaSyDuZ_F9G9Hv8NKKF0sKs3mEounxiLKwbZI",
    authDomain: "goodfeed-ecdda.firebaseapp.com",
    databaseURL: "https://goodfeed-ecdda.firebaseio.com",
    projectId: "goodfeed-ecdda",
    storageBucket: "",
    messagingSenderId: "846159984894"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase