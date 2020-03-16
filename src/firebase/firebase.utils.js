import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD3YMD1B_yYw-pd_PwygVQ0v99WudvsItA",
  authDomain: "modern-db.firebaseapp.com",
  databaseURL: "https://modern-db.firebaseio.com",
  projectId: "modern-db",
  storageBucket: "modern-db.appspot.com",
  messagingSenderId: "1093842300820",
  appId: "1:1093842300820:web:8167bcc0cc7b5b0f522981",
  measurementId: "G-KYQCDLJXN1"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//this give us access to GoogleAuthProvider() from the auth library
//setCustomParameters- it take a couple custom parameters usin the custom parameters method
//promt: 'select_account' always trigger the google pop up when ever we use this Goggle auth
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
