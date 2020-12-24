import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDImUvHMyMyxvKixaZGku83jQ-B_0MqM-o",
    authDomain: "whatsapp-clone-185e1.firebaseapp.com",
    projectId: "whatsapp-clone-185e1",
    storageBucket: "whatsapp-clone-185e1.appspot.com",
    messagingSenderId: "131601248047",
    appId: "1:131601248047:web:2cac4f65d06ece630a7bda"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };