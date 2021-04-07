import firebase from 'firebase';
import 'firebase/firestore';
import { firebaseConfig } from './config';

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const FirebaseTimestamp = firebase.firestore.Timestamp;
