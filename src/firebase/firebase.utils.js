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

//const snapShot get data from firestore
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  //const collectionRef = firestore.collection("users");

  const snapShot = await userRef.get();
  //const collectionSnapshot = await collectionRef.get();
  // console.log("HHHHHH", {
  //   collection: collectionSnapshot.docs.map(doc => doc.data())
  // });

  //console.log(snapShot);

  //create a new user if it doenst exists
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

//V.159
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  //console.log("yy", collectionRef);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    //console.log(obj);
    //console.log( newDocRef);

    //set the value
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

//V.163
export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  //console.log(transformedCollection);
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//this give us access to GoogleAuthProvider() from the auth library
//setCustomParameters- it take a couple custom parameters usin the custom parameters method
//promt: 'select_account' always trigger the google pop up when ever we use this Goggle auth
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
