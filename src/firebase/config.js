import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCZZE3v60nsbGL5kgvhW-Rn8woCAyL0GEM",
  authDomain: "kitty-84c8c.firebaseapp.com",
  projectId: "kitty-84c8c",
  storageBucket: "kitty-84c8c.appspot.com",
  messagingSenderId: "255560954305",
  appId: "1:255560954305:web:33b3187ca7d0e3ef30ff40"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
