import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyBuhcg3pgg6e0utMomVqQsKwZtqEGo4Nlw",
    authDomain: "crown-db-ffd4a.firebaseapp.com",
    databaseURL: "https://crown-db-ffd4a.firebaseio.com",
    projectId: "crown-db-ffd4a",
    storageBucket: "crown-db-ffd4a.appspot.com",
    messagingSenderId: "592974780434",
    appId: "1:592974780434:web:1c00bc1afdb1a9e930a0cb",
    measurementId: "G-0LZH5HGPSF"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;