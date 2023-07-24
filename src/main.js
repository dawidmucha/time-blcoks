import { createApp } from 'vue'
import App from './App.vue'

import { initializeApp } from "firebase/app"
import { getFirestore, collection } from 'firebase/firestore'
// import { getAnalytics } from "firebase/analytics"

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "time-blocks-5813f.firebaseapp.com",
  projectId: "time-blocks-5813f",
  storageBucket: "time-blocks-5813f.appspot.com",
  messagingSenderId: "64523075542",
  appId: "1:64523075542:web:d1a5f4ddab37f1608fee77",
  measurementId: "G-31Q1PD6DPJ"
}
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
// const analytics = getAnalytics(app)

createApp(App).mount('#app')

export const testingRef = collection(db, 'testing')
