// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAEdgkqE9Fj2pmYYDdD4UBFnVUkqEqjoTE',
  authDomain: 'netflix-bj-002.firebaseapp.com',
  projectId: 'netflix-bj-002',
  storageBucket: 'netflix-bj-002.appspot.com',
  messagingSenderId: '977053026917',
  appId: '1:977053026917:web:e7637d491313339f7a548c',
}

// Initialize Firebase
// const app = initializeApp(firebaseConfig)
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
