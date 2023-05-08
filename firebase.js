import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAQArjve56_YHtKi2RA1RlgcyO9XmB-C08",
  authDomain: "rescue-helmet.firebaseapp.com",
  projectId: "rescue-helmet",
  storageBucket: "rescue-helmet.appspot.com",
  messagingSenderId: "552995706498",
  appId: "1:552995706498:web:a05a53dfeead501454c69b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

export {auth, db};