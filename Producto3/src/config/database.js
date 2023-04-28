import firebase from 'firebase';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyCsppvQeivQsnzxSEqZJLuqlPuOCdiSsnM",
  authDomain: "appdev-producto-2.firebaseapp.com",
  databaseURL: "https://appdev-producto-2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "appdev-producto-2",
  storageBucket: "appdev-producto-2.appspot.com",
  messagingSenderId: "170869470701",
  appId: "1:170869470701:web:0e22afd08b72035311a3e4"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const db = firebase.firestore();
