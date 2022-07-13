import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth, GoogleAuthProvider } from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyAmUnJUjhlayP2ymb1rYCKrnNoCdxxYXWE",
  authDomain: "blogproject-d5c94.firebaseapp.com",
  projectId: "blogproject-d5c94",
  storageBucket: "blogproject-d5c94.appspot.com",
  messagingSenderId: "320863155087",
  appId: "1:320863155087:web:52c4711c6183920e6411fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();