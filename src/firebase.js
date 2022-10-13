import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCtB92CpEifXyxrXWeHG_PsRuawKpdiuIA",
  authDomain: "twitter-clone-udemy-c8610.firebaseapp.com",
  projectId: "twitter-clone-udemy-c8610",
  storageBucket: "twitter-clone-udemy-c8610.appspot.com",
  messagingSenderId: "521420503881",
  appId: "1:521420503881:web:151e2dec995da1d28ff898"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;