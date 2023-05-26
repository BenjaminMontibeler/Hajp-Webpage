// import { initializeApp } from 'firebase/app';
// import { getStorage } from "firebase/storage";
// import { getFirestore } from "firebase/firestore";

// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

// import * as firebase from 'firebase/app';
// import 'firebase/firestore';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

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
  
// const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);

// const db = getFirestore(app);

// const db = firebase.firestore();
// const auth = firebase.auth();

const projectFirestore = firebase.firestore();

const projectStorage = firebase.storage();

export { projectFirestore, projectStorage };
// const storage = getStorage(app);
