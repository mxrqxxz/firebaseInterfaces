// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeyJYpfEVfOY82f7HzH451J2A1QCRvcM8",
  authDomain: "login-firebase-fbafe.firebaseapp.com",
  projectId: "login-firebase-fbafe",
  storageBucket: "login-firebase-fbafe.firebasestorage.app",
  messagingSenderId: "660481348484",
  appId: "1:660481348484:web:e45c58f134e1e2523903d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});


export const db = getFirestore(app);