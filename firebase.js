import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyC-Be1Dwn9lmKzIexpZeqw7UH9rZh2C2O8',
  authDomain: 'chat-3b159.firebaseapp.com',
  projectId: 'chat-3b159',
  storageBucket: 'chat-3b159.appspot.com',
  messagingSenderId: '351517075398',
  appId: '1:351517075398:web:d3d82af88092098459f4c7',
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

export const db = app.firestore();
export const auth = app.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
