import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAZRgzcGO8egMafPVdaP44xjgztJ9alveg",
  authDomain: "info-hub-72f37.firebaseapp.com",
  projectId: "info-hub-72f37",
  storageBucket: "info-hub-72f37.appspot.com",
  messagingSenderId: "823488823856",
  appId: "1:823488823856:web:9059e0830c72dcef0da3f5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase Auth and Google Provider
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export default app;
