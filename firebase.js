// Import the functions you need from the SDKs you need

import firebase from 'firebase/app'
import 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAuBC2h_w5QJjIrvGtYd68XoNzYIe0Mn8c",
  authDomain: "fir-auth-c426d.firebaseapp.com",
  projectId: "fir-auth-c426d",
  storageBucket: "fir-auth-c426d.appspot.com",
  messagingSenderId: "482795294826",
  appId: "1:482795294826:web:d9cdc0adf24727db2cba13"

};


// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };