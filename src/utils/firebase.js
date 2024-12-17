//import { initializeApp } from "firebase/app"
import firebase from "firebase/compat/app"
//Per si no funciona prova amb 'import firebase from "firebase/compat/app"'

const firebaseConfig = {
    apiKey: "AIzaSyCwVTgD406RA6LCWcPoT32MFBzHhsneM0s",
    authDomain: "boda-b48c5.firebaseapp.com",
    projectId: "boda-b48c5",
    storageBucket: "boda-b48c5.appspot.com",
    messagingSenderId: "752649493885",
    appId: "1:752649493885:web:8c1724cc05a8a32d004014"
}

//Per si no funciona prova amb 'export const firebaseApp = firebase.initializeApp(firebaseConfig)'
//export const app = initializeApp(firebaseConfig)
export const firebaseApp = firebase.initializeApp(firebaseConfig)