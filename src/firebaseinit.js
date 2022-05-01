import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDKqD2F6KEk8sRQITH2I6NF8tk7OhFnNa0",
  authDomain: "monitor-warehouse.firebaseapp.com",
  projectId: "monitor-warehouse",
  storageBucket: "monitor-warehouse.appspot.com",
  messagingSenderId: "189789467598",
  appId: "1:189789467598:web:5ef219cadb5ed70d39f19f"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


export default auth;