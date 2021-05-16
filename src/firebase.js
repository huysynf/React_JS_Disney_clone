import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyCgNVuyRZ9EepHSVyExc0pG4a0T5uF_YWo",
  authDomain: "disney-clone-803e2.firebaseapp.com",
  projectId: "disney-clone-803e2",
  storageBucket: "disney-clone-803e2.appspot.com",
  messagingSenderId: "890326943245",
  appId: "1:890326943245:web:dcf24972bf1e2fce877744"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database =  firebaseApp.firestore();

export default database;