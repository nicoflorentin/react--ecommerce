import firebase from "firebase/app";
import "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1PpW2f3nSgYQIJVKo75rO7WTgXMCG_Fg",
  authDomain: "react-ecommerce-86e72.firebaseapp.com",
  projectId: "react-ecommerce-86e72",
  storageBucket: "react-ecommerce-86e72.appspot.com",
  messagingSenderId: "78590878183",
  appId: "1:78590878183:web:eac80eee54bcbec2911d42"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore(app)