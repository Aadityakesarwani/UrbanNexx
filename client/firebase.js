// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "urbannex-4d14b.firebaseapp.com",
  projectId: "urbannex-4d14b",
  storageBucket: "urbannex-4d14b.appspot.com",
  messagingSenderId: "859419474928",
  appId: "1:859419474928:web:e74c7845841d196055fb35",
  measurementId: "G-T16V5EBP2P"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);