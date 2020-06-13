import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCEU9az113qa7LDoitnfzgLnP--ekvQ9ac",
  authDomain: "crwn-db-83316.firebaseapp.com",
  databaseURL: "https://crwn-db-83316.firebaseio.com",
  projectId: "crwn-db-83316",
  storageBucket: "crwn-db-83316.appspot.com",
  messagingSenderId: "12532908477",
  appId: "1:12532908477:web:f1639538da193ffc38d2d4",
  measurementId: "G-Z95EY8K126",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const creadAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        creadAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
