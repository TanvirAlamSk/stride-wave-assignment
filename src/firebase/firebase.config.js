import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBxNf9CbVqWfcq3tx64BiY55b5h-1VTvsg",
    authDomain: "stride-wave-assignment.firebaseapp.com",
    projectId: "stride-wave-assignment",
    storageBucket: "stride-wave-assignment.appspot.com",
    messagingSenderId: "627468939652",
    appId: "1:627468939652:web:1549abb6d2b4e31a15add1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;