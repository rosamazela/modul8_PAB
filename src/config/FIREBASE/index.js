import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
    apiKey: "AIzaSyCd9nNdA3SgUutMk0UJ0CbdisoqN5dy170",
    authDomain: "noteapp-849cb.firebaseapp.com",
    projectId: "noteapp-849cb",
    storageBucket: "noteapp-849cb.appspot.com",
    messagingSenderId: "425367620721",
    appId: "1:425367620721:web:9d56ac82e5fdfb43089fd0",
    measurementId: "G-E5J6JHX000"
});

const FIREBASE = firebase;

export default FIREBASE;