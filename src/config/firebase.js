// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"
import { getAuth } from "firebase/auth";
import { getPerformance } from "firebase/performance";

const firebaseConfig = {
  apiKey: "#API KEY HERE",
  authDomain: "###########.firebaseapp.com",
  projectId: "#############",
  storageBucket: "############.appspot.com",
  messagingSenderId: "##############",
  appId: "################################"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
const perf = getPerformance(app);
