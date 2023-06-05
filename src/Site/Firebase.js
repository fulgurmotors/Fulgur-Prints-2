// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAPnYrcC88be0j36mESfk7m6F643lYD3w",
  authDomain: "fulgurprintdatabase.firebaseapp.com",
  projectId: "fulgurprintdatabase",
  storageBucket: "fulgurprintdatabase.appspot.com",
  messagingSenderId: "42973382809",
  appId: "1:42973382809:web:ec51fc105e2d925ca35008",
  measurementId: "G-SD7QXHM3TW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const db = getFirestore(app);