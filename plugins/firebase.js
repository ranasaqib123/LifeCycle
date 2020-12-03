import firebase from '@firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD3w0zHP2bwS8EoOfbsyxt53utabM5vYus',
  authDomain: 'lifecycle-2e592.firebaseapp.com',
  databaseURL: 'https://lifecycle-2e592.firebaseio.com',
  projectId: 'lifecycle-2e592',
  storageBucket: 'lifecycle-2e592.appspot.com',
  messagingSenderId: '261372235180',
  appId: '1:261372235180:web:50c03f2f686f6eaa193e09',
  measurementId: 'G-P47B36XZK3',
}
// Initialize Firebase

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
  firebase.firestore().settings({ timestampsInSnapshots: true })
  firebase.analytics()
}
const db = firebase.firestore()
export const auth = firebase.auth()
export const googleProvider = new firebase.auth.GoogleAuthProvider()
export default db
