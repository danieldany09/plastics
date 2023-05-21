// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzADRxDXvqFiMUJEWFjAWbu5uFMXu2AH0",
  authDomain: "plastics-shop.firebaseapp.com",
  projectId: "plastics-shop",
  storageBucket: "plastics-shop.appspot.com",
  messagingSenderId: "286817866347",
  appId: "1:286817866347:web:9d7e254ca3042688a2d72e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;