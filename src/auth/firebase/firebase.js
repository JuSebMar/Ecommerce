// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1VkKzHL3cLraEfao7jUAfxwKx73dDo4E",
  authDomain: "mitienda-3aadf.firebaseapp.com",
  projectId: "mitienda-3aadf",
  storageBucket: "mitienda-3aadf.appspot.com",
  messagingSenderId: "1031558921293",
  appId: "1:1031558921293:web:6a8ec093853c0d39613004",
  measurementId: "G-MB3RNN46CS",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
