import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDMaY63qyaZ8Km-pG9IW3tTeK7Bt0cXCmk",
    authDomain: "trab-denuncias-b799e.firebaseapp.com",
    projectId: "trab-denuncias-b799e",
    storageBucket: "trab-denuncias-b799e.appspot.com",
    messagingSenderId: "842026702356",
    appId: "1:842026702356:web:281e2e0a24bebf72f1f901"
  };
  
const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };