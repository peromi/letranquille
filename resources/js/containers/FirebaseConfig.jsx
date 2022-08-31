import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfmp7WFqWL6BxLxyhpkGKEBCmWg41ZCeE",
  authDomain: "dating-d9b72.firebaseapp.com",
  projectId: "dating-d9b72",
  storageBucket: "dating-d9b72.appspot.com",
  messagingSenderId: "348332818374",
  appId: "1:348332818374:web:ae7b73c0f5a73d3d807cc7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
