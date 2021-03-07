import firebase from "firebase/app";
import "firebase/storage";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCuKeoaoyaRwSymw7THRXPlvgwIM8qLyHo",
  authDomain: "invoicing-system-14006.firebaseapp.com",
  projectId: "invoicing-system-14006",
  storageBucket: "invoicing-system-14006.appspot.com",
  messagingSenderId: "547503385611",
  appId: "1:547503385611:web:f65819bc779b5abb6eab0e",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
