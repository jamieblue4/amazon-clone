import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDhpQcmyPl5luy_LjCC3moduuKGGVki0yY",
  authDomain: "clone-73916.firebaseapp.com",
  projectId: "clone-73916",
  storageBucket: "clone-73916.appspot.com",
  messagingSenderId: "147546021910",
  appId: "1:147546021910:web:697d44e504903be2899537"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);

export default app;