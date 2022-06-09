import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDr3J0mJjkHXpaM0wuzTpUhRWwM4edtMlU",
  authDomain: "memories-e2aba.firebaseapp.com",
  databaseURL: "https://memories-e2aba-default-rtdb.firebaseio.com",
  projectId: "memories-e2aba",
  storageBucket: "memories-e2aba.appspot.com",
  messagingSenderId: "740835373566",
  appId: "1:740835373566:web:71cba6db6042295d38d0af"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;