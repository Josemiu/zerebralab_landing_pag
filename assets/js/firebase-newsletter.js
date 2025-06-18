import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";

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
  const id = correo.toLowerCase(); // Evita mayúsculas duplicadas
  await setDoc(doc(db, "suscriptores", id), {
    correo: correo,
    fecha: new Date()
  });
}
