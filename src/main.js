import { createApp } from 'vue'
import App from './App.vue'

import { initializeApp } from "firebase/app"
import { getFirestore, collection } from 'firebase/firestore'
import { VueFire, VueFireAuth } from 'vuefire'

export const firebaseApp = initializeApp({
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  // apiKey: "AIzaSyAkwYPvUa26zAJEgbHTzHyRIRO9Vwrqvog",
  authDomain: "time-blocks-5813f.firebaseapp.com",
  projectId: "time-blocks-5813f",
  storageBucket: "time-blocks-5813f.appspot.com",
  messagingSenderId: "64523075542",
  appId: "1:64523075542:web:d1a5f4ddab37f1608fee77",
  measurementId: "G-31Q1PD6DPJ"
})

const db = getFirestore(firebaseApp)
export const testingRef = collection(db, 'testing')

const app = createApp(App)
app.use(VueFire, {
  firebaseApp,
  modules: [
    VueFireAuth(),
  ],
})
app.mount('#app')