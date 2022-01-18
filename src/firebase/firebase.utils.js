import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyDz8x42LVLDD2Wchfbzb6AsfnwRgY5T5hU",
  authDomain: "crwn-db-60a65.firebaseapp.com",
  projectId: "crwn-db-60a65",
  storageBucket: "crwn-db-60a65.appspot.com",
  messagingSenderId: "317965102618",
  appId: "1:317965102618:web:da6c438fbc2de9b61feba3",
  measurementId: "G-F6MTXSH1E4"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;