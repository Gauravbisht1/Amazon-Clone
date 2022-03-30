import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyAd_vW-HqF_tu3bVerq_Xxtzn6FMvXFsbk',
  authDomain: 'clone-2b221.firebaseapp.com',
  projectId: 'clone-2b221',
  storageBucket: 'clone-2b221.appspot.com',
  messagingSenderId: '287170631937',
  appId: '1:287170631937:web:a32b8e33e0de1238cda300',
  measurementId: 'G-L1C54GVS1Q',
}
const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }
