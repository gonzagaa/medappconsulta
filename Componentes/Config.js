import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAhnShHRnDDrZZzKlefFindcKjyA_OINV8",
  authDomain: "medconsulta-a7c63.firebaseapp.com",
  projectId: "medconsulta-a7c63",
  storageBucket: "medconsulta-a7c63.appspot.com",
  messagingSenderId: "866846928404",
  appId: "1:866846928404:web:a2b7f7b483fcccf16c0101",
  measurementId: "G-GXZ5D0NTX1"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)

}

export {firebase};