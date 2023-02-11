// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEcb2h1nP8ZSb0UEWuaP8UWQYULr0ictw",
  authDomain: "calificaciones-640c0.firebaseapp.com",
  projectId: "calificaciones-640c0",
  storageBucket: "calificaciones-640c0.appspot.com",
  messagingSenderId: "524760599018",
  appId: "1:524760599018:web:788b431bd001845c83ca93",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

//Auth
export const auth = getAuth(app);