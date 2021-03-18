import firebase from 'firebase'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDK79aJcgiGcEiq5ReY3nKiCO2xqP7sPeY",
    authDomain: "crud-react-e7bd3.firebaseapp.com",
    projectId: "crud-react-e7bd3",
    storageBucket: "crud-react-e7bd3.appspot.com",
    messagingSenderId: "352434457341",
    appId: "1:352434457341:web:333e2c9a4979e729f48c94"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);

  fb.firestore();
  export const db = fb.firestore();
