import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import firebaseConfig from './firebase-config';

// Initialize Firebase app

firebase.initializeApp(firebaseConfig);

export default firebase;