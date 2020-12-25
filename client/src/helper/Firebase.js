import firebase from "firebase";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY ,
    authDomain: "whatsapp-clone-185e1.firebaseapp.com",
    projectId: "whatsapp-clone-185e1",
    storageBucket: "whatsapp-clone-185e1.appspot.com",
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSEGE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };