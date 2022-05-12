/* eslint-disable import/no-mutable-exports */
/* eslint-disable import/no-duplicates */
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import Constants from "expo-constants";

// Initialize Firebase
const firebaseConfig = {
  apiKey: Constants.manifest?.extra?.apiKey,
  authDomain: Constants.manifest?.extra?.authDomain,
  projectId: Constants.manifest?.extra?.projectId,
  storageBucket: Constants.manifest?.extra?.storageBucket,
  messagingSenderId: Constants.manifest?.extra?.messagingSenderId,
  appId: Constants.manifest?.extra?.appId,
};

let Firebase: firebase.app.App;
let firestore: firebase.firestore.Firestore;
if (firebase.apps.length === 0) {
  Firebase = firebase.initializeApp(firebaseConfig);
  firestore = Firebase.firestore();
}
export { Firebase, firestore };
