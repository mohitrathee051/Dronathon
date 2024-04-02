// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxPI_5Lhg3qAQRDZ1iboG2_IZhpOLQRbI",
  authDomain: "hard-c6c54.firebaseapp.com",
  projectId: "hard-c6c54",
  storageBucket: "hard-c6c54.appspot.com",
  messagingSenderId: "506039004150",
  appId: "1:506039004150:web:01d3592cb21406d3e635d7",
  measurementId: "G-109R6P7CXE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(app); // Initialize Firebase Auth and store it in firebaseAuth

export { firebaseAuth };