// import { dblClick } from "@testing-library/user-event/dist/click";

// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

// // Add Firebase storage
import "firebase/compat/storage";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// firebase.default.firestore.FieldValue.serverTimestamp();
// import firebase from "firebase";

const firebaseConfig = {

};

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDtzstycRQEOUMTVy4PYaI-pR-W_x2S-c0",
    authDomain: "instagram-clone-react-d501c.firebaseapp.com",
    projectId: "instagram-clone-react-d501c",
    storageBucket: "instagram-clone-react-d501c.appspot.com",
    messagingSenderId: "184547793258",
    appId: "1:184547793258:web:f5491dfa3d6ac388836d13",
    measurementId: "G-435L7LCCZK"

});


const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };