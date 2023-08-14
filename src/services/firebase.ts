// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
// import { getFirestore } from 'firebase/firestore'
// import { getDatabase } from 'firebase/database'
// import { getFunctions } from 'firebase/functions'
// import { getMessaging } from 'firebase/messaging'
// import { getStorage } from 'firebase/storage'
// import { getPerformance } from 'firebase/performance'
// import { getRemoteConfig } from 'firebase/remote-config'
// import { } from 'firebase/app-check'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2Xt-7U-q4DnqSNyfQnvgLN6QpiEYn8ng",
  authDomain: "equipmentgram-public.firebaseapp.com",
  projectId: "equipmentgram-public",
  storageBucket: "equipmentgram-public.appspot.com",
  messagingSenderId: "47133959047",
  appId: "1:47133959047:web:b68c3181c2828e20352922",
  measurementId: "G-RPLW7VGC5L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize firebase auth
const auth = getAuth()

export { app, auth }
