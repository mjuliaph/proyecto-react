// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZaQFVsC-jJP-7RUjeC8txL9ynxyb5pr0",
  authDomain: "e-commerce-react-6b696.firebaseapp.com",
  projectId: "e-commerce-react-6b696",
  storageBucket: "e-commerce-react-6b696.appspot.com",
  messagingSenderId: "420566650529",
  appId: "1:420566650529:web:3873949fc0e0f3cf632ae0"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getData = () => getFirestore(app);