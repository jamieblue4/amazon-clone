import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDhpQcmyPl5luy_LjCC3moduuKGGVki0yY",
    authDomain: "clone-73916.firebaseapp.com",
    projectId: "clone-73916",
    storageBucket: "clone-73916.appspot.com",
    messagingSenderId: "147546021910",
    appId: "1:147546021910:web:697d44e504903be2899537"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };