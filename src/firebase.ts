import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCtomEk2SxPGA9Z2z17Js22AB2kYaphmG0",
  authDomain: "discord-clone-udemy-11b01.firebaseapp.com",
  projectId: "discord-clone-udemy-11b01",
  storageBucket: "discord-clone-udemy-11b01.appspot.com",
  messagingSenderId: "442765928224",
  appId: "1:442765928224:web:4dc2a09db617bcc1de9945"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
