import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBveyGgkvRe0Z3IW1TQUR3MDjUegVcw3uY",
    authDomain: "next-door-nanny-83071.firebaseapp.com",
    projectId: "next-door-nanny-83071",
    storageBucket: "next-door-nanny-83071.appspot.com",
    messagingSenderId: "589775122521",
    appId: "1:589775122521:web:2924a089950f24e1408148",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage();
export default app;
