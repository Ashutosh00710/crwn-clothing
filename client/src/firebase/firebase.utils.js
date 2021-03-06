import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBuhcg3pgg6e0utMomVqQsKwZtqEGo4Nlw",
  authDomain: "crown-db-ffd4a.firebaseapp.com",
  databaseURL: "https://crown-db-ffd4a.firebaseio.com",
  projectId: "crown-db-ffd4a",
  storageBucket: "crown-db-ffd4a.appspot.com",
  messagingSenderId: "592974780434",
  appId: "1:592974780434:web:1c00bc1afdb1a9e930a0cb",
  measurementId: "G-0LZH5HGPSF",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error in creating user", error.message);
    }
  }
  return userRef;
};

export const createRegisterCompanyDocument = async (state) => {
  const regRef = firestore.collection("retailer").doc();
  const id = regRef.id;
  try {
    await regRef.set({
      owner: state.owner,
      company: state.company,
      address: state.address,
      email: state.email,
      contact: state.contact,
      products: {
        Mens: [],
        Womens: [],
        Sneakers: [],
        Hats: [],
        Jackets: [],
      },
    });
  } catch (error) {
    console.log("error in creating user", error.message);
  }
  return id;
};

firebase.initializeApp(config);

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collection) => {
  const transformedCollection = collection.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const insert = firebase.firestore.FieldValue.arrayUnion;

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
