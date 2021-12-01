import { initializeApp } from "firebase/app";
import {
    getAuth,
} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBXB85fks9D5gOJY9iBeJ0Q3UjDfMBpgmw",
    authDomain: "before25-dev.firebaseapp.com",
    projectId: "before25-dev",
    storageBucket: "before25-dev.appspot.com",
    messagingSenderId: "459989401207",
    appId: "1:459989401207:web:f48b93813980eccb489072"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth