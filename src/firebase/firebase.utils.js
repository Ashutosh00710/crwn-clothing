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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
        });
        } catch(error) {
            console.log('error in creating user', error.message);
        }
    }
    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;