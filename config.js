import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyDXzlM_t_yCORIvqdHNztIZFt7xOR6Ef70",
  authDomain: "booksanta-d3960.firebaseapp.com",
  projectId: "booksanta-d3960",
  storageBucket: "booksanta-d3960.appspot.com",
  messagingSenderId: "1066466939651",
  appId: "1:1066466939651:web:defea1ea010891f0764f36"
};

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
