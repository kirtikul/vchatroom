import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
} from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { initializeFirestore} from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyDidWce7CooFihX4W0pTELmRVIi72vMTTA",
  authDomain: "chatroom-vimeet.firebaseapp.com",
  projectId: "chatroom-vimeet",
  storageBucket: "chatroom-vimeet.appspot.com",
  messagingSenderId: "483042385596",
  appId: "1:483042385596:web:9df9a9b8702ea83a627ab9"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = initializeFirestore(app, {
    experimentalForceLongPolling: true, 
});

export function signIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}

export function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
}