import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyCgmsqnFZHd8Cv5VnDgoT5xyrisKShatGQ",
    authDomain: "treinosfirebase.firebaseapp.com",
    projectId: "treinosfirebase",
    storageBucket: "treinosfirebase.appspot.com",
    messagingSenderId: "536649641468",
    appId: "1:536649641468:web:079a33a5c85d84ab1a1679",
    measurementId: "G-GW8GS5HVLX"
  };

  
  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const analytics = getAnalytics(firebaseApp);

  export {db};