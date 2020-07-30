import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD60dHpN5wfc00rr7Fb07c8PgHIHywzVwA",
    authDomain: "ninja-firegram-2db2b.firebaseapp.com",
    databaseURL: "https://ninja-firegram-2db2b.firebaseio.com",
    projectId: "ninja-firegram-2db2b",
    storageBucket: "ninja-firegram-2db2b.appspot.com",
    messagingSenderId: "485775705025",
    appId: "1:485775705025:web:6a1bd5e504b06506a1a540"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFiretore = firebase.firestore();

  export { projectStorage, projectFiretore };