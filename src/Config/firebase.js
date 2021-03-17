import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAgL1rfXxam2Lqfn58cMvmQ_Z0qpMkvJMI",
  authDomain: "blognewsit.firebaseapp.com",
  projectId: "blognewsit",
  storageBucket: "blognewsit.appspot.com",
  messagingSenderId: "758183014798",
  appId: "1:758183014798:web:843e961dfd6b209dafb4df",
  measurementId: "G-CY210TGXCT",
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// GOOGLE ANALYTICS
firebase.analytics();


// FIRESTORE
firebase.firestore();

export default firebase;