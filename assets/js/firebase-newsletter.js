
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJl001eotrACu8_qcvYLxrHVsWDcL2RFw",
  authDomain: "zlablandingpage.firebaseapp.com",
  projectId: "zlablandingpage",
  storageBucket: "zlablandingpage.firebasestorage.app",
  messagingSenderId: "1022485646789",
  appId: "1:1022485646789:web:dc6ef9fcfe3081fb4c8fac"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function guardarSuscriptor(correo) {
  await addDoc(collection(db, "suscriptores"), {
    correo,
    fecha: new Date()
  });
}
