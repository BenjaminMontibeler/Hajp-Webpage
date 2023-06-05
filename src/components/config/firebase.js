import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'
import 'firebase/compat/storage';


const firebaseConfig = {
    apiKey: "AIzaSyDLkLcuyMx_KHHyA16XZHClTw4YeJCXNuA",
    authDomain: "hajp-website.firebaseapp.com",
    projectId: "hajp-website",
    storageBucket: "hajp-website.appspot.com",
    messagingSenderId: "162467470616",
    appId: "1:162467470616:web:6e46bbe1272bb6b205526d",
    measurementId: "G-82RWBC9RTJ",
    storageBucket: 'hajp-website.appspot.com'
  };
  

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();

const projectStorage = firebase.storage();

const projectAuth = firebase.auth();

export { projectFirestore, projectStorage, projectAuth };
