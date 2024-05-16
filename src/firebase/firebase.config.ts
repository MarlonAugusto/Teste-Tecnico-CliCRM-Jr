import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC6bFOrxHRMvEp9o30wD_7-FgG8FXtvlME",
    authDomain: "teste-tecnico-clincrm.firebaseapp.com",
    projectId: "teste-tecnico-clincrm",
    storageBucket: "teste-tecnico-clincrm.appspot.com",
    messagingSenderId: "480721870636",
    appId: "1:480721870636:web:b2fda60d1aaea64e34d689",
    measurementId: "G-C67WN8XE90"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app)