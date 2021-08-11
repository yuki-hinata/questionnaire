import firebase from "firebase/app";
import "firebase/firestore";

import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAkt6l4YGvhUYQwmVsZZ9ZYxtt235Yi9OI",
  authDomain: "questionnaire-79f62.firebaseapp.com",
  projectId: "questionnaire-79f62",
  storageBucket: "questionnaire-79f62.appspot.com",
  messagingSenderId: "1038084418300",
  appId: "1:1038084418300:web:22f7fdabd83467ab5f4579",
  measurementId: "G-HB2RVCMWX6",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
export default firebase;
