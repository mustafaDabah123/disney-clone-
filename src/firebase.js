import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAmq73jIraBGfbLFT3ySdZa_v514tTiuXk",
    authDomain: "disney-clone-c9d8b.firebaseapp.com",
    projectId: "disney-clone-c9d8b",
    storageBucket: "disney-clone-c9d8b.appspot.com",
    messagingSenderId: "256212581186",
    appId: "1:256212581186:web:c5242d860609711aee26db"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  export {db , auth , provider , storage}; 
