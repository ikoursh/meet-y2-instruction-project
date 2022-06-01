// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD9nTnpP_h6ZPO4Qe_JO15nAB97lc4oDlI",
    authDomain: "meet-y2-ta.firebaseapp.com",
    projectId: "meet-y2-ta",
    storageBucket: "meet-y2-ta.appspot.com",
    messagingSenderId: "665329421804",
    appId: "1:665329421804:web:afbe7781eaa9478a5384c9",
    measurementId: "G-Y25HB74TXX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
