import firebase from 'firebase/app';
import 'firebase/firestore';
import * as auth from 'firebase/auth'

const config = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
};


const app = firebase.initializeApp(config);

export const db = firebase.firestore();