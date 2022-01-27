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

export const createUserProfileDocument = async (userAuth, additionelData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionelData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;