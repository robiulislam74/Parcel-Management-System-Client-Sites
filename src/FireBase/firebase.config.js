// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBVUI7JTp0agfPC8t6pAlWE-wEJKTayk68",
//   authDomain: "parcel-management-system-f3685.firebaseapp.com",
//   projectId: "parcel-management-system-f3685",
//   storageBucket: "parcel-management-system-f3685.firebasestorage.app",
//   messagingSenderId: "174516682330",
//   appId: "1:174516682330:web:77a9467b28f5e649c9a263"
// };

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth