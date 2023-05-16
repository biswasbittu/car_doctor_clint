// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
//   apiKey: "AIzaSyD9Tdj7Mi4LCU7QRmlPSchx-3HFgLVyLLs",
//   authDomain: "cars-doctor-1998.firebaseapp.com",
//   projectId: "cars-doctor-1998",
//   storageBucket: "cars-doctor-1998.appspot.com",
//   messagingSenderId: "125704687002",
//   appId: "1:125704687002:web:2971211e0c72a723d9fe23"

  apiKey:import.meta.env.VITE_apiKey,
  authDomain:import.meta.env.VITE_authDomain,
  projectId:import.meta.env.VITE_projectId,
  storageBucket:import.meta.env.VITE_storageBucket,
  messagingSenderId:import.meta.env.VITE_messagingSenderId,
  appId:import.meta.env.VITE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);