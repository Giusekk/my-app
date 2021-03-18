import firebase from "firebase";

// api key
const apiKey = "AIzaSyAgL1rfXxam2Lqfn58cMvmQ_Z0qpMkvJMI";
//auth domain
const authDomain = "blognewsit.firebaseapp.com";
// project id
const projectId = "blognewsit"
// storageBucket
const storageBucket =  "blognewsit.appspot.com";


const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
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