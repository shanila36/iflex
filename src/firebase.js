import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAE17lLgkvC25Fd44uO-brPWHaJkXHr-V4",
  authDomain: "iflexmart.firebaseapp.com",
  databaseURL: "https://iflexmart.firebaseio.com",
  projectId: "iflexmart",
  storageBucket: "iflexmart.appspot.com",
  messagingSenderId: "616616713630",
  appId: "1:616616713630:web:9a3cde6ec823c3cf6f4a8f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export {db, auth};
