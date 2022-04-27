// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const runtimeConfig = useRuntimeConfig()

const firebaseConfig = {
  apiKey: runtimeConfig.FIREBASE_API_KEY,
  authDomain: "rocky-directory.firebaseapp.com",
  projectId: "rocky-directory",
  storageBucket: "rocky-directory.appspot.com",
  messagingSenderId: "667148192805",
  appId: "1:667148192805:web:15e8f5eecb0e2c50e543cc" 
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

export const firestoreDb = getFirestore(firebaseApp)