// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getDatabase} from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD9nTnpP_h6ZPO4Qe_JO15nAB97lc4oDlI",
    authDomain: "meet-y2-ta.firebaseapp.com",
    databaseURL: "https://meet-y2-ta-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "meet-y2-ta",
    storageBucket: "meet-y2-ta.appspot.com",
    messagingSenderId: "665329421804",
    appId: "1:665329421804:web:afbe7781eaa9478a5384c9",
    measurementId: "G-Y25HB74TXX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
export const auth = getAuth(app)
export const db = getDatabase(app)
