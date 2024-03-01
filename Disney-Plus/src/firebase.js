import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyALPtSPPIkbngHDj6TVikz5hQ3tgb7NuSY",
  authDomain: "authentication-demo-eabb5.firebaseapp.com",
  databaseURL: "https://authentication-demo-eabb5-default-rtdb.firebaseio.com",
  projectId: "authentication-demo-eabb5",
  storageBucket: "authentication-demo-eabb5.appspot.com",
  messagingSenderId: "491885060325",
  appId: "1:491885060325:web:35e4f1d9f6b4f78cc4f40c",
  measurementId: "G-VP59JY3TDM"
};

export const app = initializeApp(firebaseConfig);
