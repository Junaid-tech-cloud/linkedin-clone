import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBQYtq8VdbM1kQSZdWY9wrhHaRz15b_x7c",
    authDomain: "linkedin-clone-c119b.firebaseapp.com",
    projectId: "linkedin-clone-c119b",
    storageBucket: "linkedin-clone-c119b.appspot.com",
    messagingSenderId: "120698634638",
    appId: "1:120698634638:web:75aa9e883f421a1f1024df",
    measurementId: "G-HY099CRJSP"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };

  export default db;