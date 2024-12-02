import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAQTSujob1MPnF4TCpJjtiFCo5FiUiFo2A",
    authDomain: "mpho-airbnb-capstone.firebaseapp.com",
    projectId: "mpho-airbnb-capstone",
    storageBucket: "mpho-airbnb-capstone.firebasestorage.app",
    messagingSenderId: "92297716328",
    appId: "1:92297716328:web:73cc9b43ec5254ea4491dd",
    measurementId: "G-8ZT6N7TCDS"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export { db, auth };