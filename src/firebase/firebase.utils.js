import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCoRGyi5UZ446vUf550rDO5Zybs3y4VShs",
    authDomain: "ecommerce-project-5cb6d.firebaseapp.com",
    databaseURL: "https://ecommerce-project-5cb6d.firebaseio.com",
    projectId: "ecommerce-project-5cb6d",
    storageBucket: "ecommerce-project-5cb6d.appspot.com",
    messagingSenderId: "521406526167",
    appId: "1:521406526167:web:1dfa513b770523efd6f692",
    measurementId: "G-ZKP0RRN3ZW"
  };


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;