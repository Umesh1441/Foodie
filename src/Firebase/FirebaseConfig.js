import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC6gI0IE56Ht6booomUVaSKz0WHj5eFua4",
  authDomain: "foodie-bb38d.firebaseapp.com",
  projectId: "foodie-bb38d",
  storageBucket: "foodie-bb38d.appspot.com",
  messagingSenderId: "258028282554",
  appId: "1:258028282554:web:6bd0118fca69de451b5883",
  measurementId: "G-3W9B89XP1S"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase }