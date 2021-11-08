// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase"
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBFHWIKyZtzFGcZk3c-DIsoV9xrgTiehPc",
  authDomain: "clone-47445.firebaseapp.com",
  projectId: "clone-47445",
  storageBucket: "clone-47445.appspot.com",
  messagingSenderId: "846253511277",
  appId: "1:846253511277:web:0157d95663af8849dba564",
  measurementId: "G-CLSMPV0Q74",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
