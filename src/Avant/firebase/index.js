import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
    apiKey: process.env.API_KEY,
    authDomain: "technical-board.firebaseapp.com",
    projectId: "technical-board",
    storageBucket: "technical-board.appspot.com",
    messagingSenderId: process.env.MESSAGE_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASURE_ID
};

// Initialize Firebase
const backend = firebase.initializeApp(config, "avant");

export default backend;