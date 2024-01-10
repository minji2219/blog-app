// Import the functions you need from the SDKs you need
import { initializeApp, FirebaseApp, getApp } from "firebase/app";
import "firebase/auth";
import { getFirestore } from "firebase/firestore";

export let app: FirebaseApp;
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_ID,
};

try {
  //이미 초기화 되어 있으면 기존 설정 사용
  app = getApp("app");
} catch (e) {
  //초기화 안되어 있으면 초기화
  app = initializeApp(firebaseConfig, "app");
}
// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export default firebase;
