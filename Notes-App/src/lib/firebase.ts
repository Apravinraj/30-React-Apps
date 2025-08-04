// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKtMUpKYQRJkA3XEjMS9JxQHklFrpgWmw",
  authDomain: "notesapp-f4914.firebaseapp.com",
  projectId: "notesapp-f4914",
  storageBucket: "notesapp-f4914.firebasestorage.app",
  messagingSenderId: "637409835476",
  appId: "1:637409835476:web:c84793bcf6979ad9e4be41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};