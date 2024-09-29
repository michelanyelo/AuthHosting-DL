// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC5e8kl9L5w7DEHx-XgNZayD1ix6npwLPo",
    authDomain: "desafio-auth-b5d84.firebaseapp.com",
    projectId: "desafio-auth-b5d84",
    storageBucket: "desafio-auth-b5d84.appspot.com",
    messagingSenderId: "857079476634",
    appId: "1:857079476634:web:f4a1086c156181e1de4a23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const $auth = getAuth(app);
export { $auth };