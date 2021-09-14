import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
