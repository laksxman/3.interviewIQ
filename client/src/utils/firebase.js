
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "ai-interview-agent-29bce.firebaseapp.com",
  projectId: "ai-interview-agent-29bce",
  storageBucket: "ai-interview-agent-29bce.firebasestorage.app",
  messagingSenderId: "793386482303",
  appId: "1:793386482303:web:45e33017674a5b85369d4a"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}



