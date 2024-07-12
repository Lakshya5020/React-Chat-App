import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: "reactchat-a1206.firebaseapp.com",
    projectId: "reactchat-a1206",
    storageBucket: "reactchat-a1206.appspot.com",
    messagingSenderId: "364826584020",
    appId: "1:364826584020:web:7b57a34f2525bc2023ac41"
};

const app = initializeApp(firebaseConfig);

export const auth=getAuth()
export const db=getFirestore()
export const storage=getStorage()