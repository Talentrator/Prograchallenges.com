import firebase from 'firebase/app';
import 'firebase/auth'; // for authentication
import 'firebase/storage'; // for storage
import 'firebase/firestore'; // for cloud firestore
import 'firebase/functions'; // for cloud functions

const firebaseConfig = {
  apiKey: "AIzaSyBP5WTcSb_HZ7X6fZJ_5Tyk5bG1stjj2ZU",
  authDomain: "progra-challenges.firebaseapp.com",
  projectId: "progra-challenges",
  storageBucket: "progra-challenges.appspot.com",
  messagingSenderId: "1057003812360",
  appId: "1:1057003812360:web:bd04011818e876d8da43bd",
  measurementId: "G-G1YWYELFXP",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

if (process.env.NODE_ENV === 'development')
  firebase.functions().useEmulator('localhost', 5001);