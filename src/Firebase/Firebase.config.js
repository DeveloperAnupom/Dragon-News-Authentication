
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDqFUmhBR92hwYH2Us2RWy-PXKvuUuDqHo",
  authDomain: "dragon-news-project-fbffb.firebaseapp.com",
  projectId: "dragon-news-project-fbffb",
  storageBucket: "dragon-news-project-fbffb.appspot.com",
  messagingSenderId: "361636318365",
  appId: "1:361636318365:web:62ca02057297f7538dd874"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);