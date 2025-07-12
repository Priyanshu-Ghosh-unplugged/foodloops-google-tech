import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Debug: Check if environment variables are loaded
console.log('Environment variables check:');
console.log('API Key:', import.meta.env.VITE_FIREBASE_API_KEY);
console.log('Auth Domain:', import.meta.env.VITE_FIREBASE_AUTH_DOMAIN);
console.log('Project ID:', import.meta.env.VITE_FIREBASE_PROJECT_ID);

// Your Firebase configuration
// Using your actual Firebase configuration values
const firebaseConfig = {
  apiKey: "AIzaSyD9zYEq1SEC4ELOIrpGqRuBfaWGTiTbbJQ",
  authDomain: "foodloops-37032.firebaseapp.com",
  projectId: "foodloops-37032",
  storageBucket: "foodloops-37032.firebasestorage.app",
  messagingSenderId: "122655159724",
  appId: "1:122655159724:web:d7910350b515961e073609",
  measurementId: "G-CMFJCCK131"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app; 