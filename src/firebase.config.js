import {getApp,getApps,initializeApp}from 'firebase/app'
import{getFirestore}from 'firebase/firestore'
import{getStorage}from 'firebase/storage'
// import dotenv from 'dotenv'
// dotenv.config()




const firebaseConfig = {
    // apiKey:process.env.REACT_APP_FIREBASE_APIKEY,
    apiKey: "AIzaSyCFNWU3aQ90nBVggceVq17iV35-6usNrXk",
    authDomain: "food-delevary-app.firebaseapp.com",
    databaseURL: "https://food-delevary-app-default-rtdb.firebaseio.com",
    projectId: "food-delevary-app",
    storageBucket: "food-delevary-app.appspot.com",
    messagingSenderId: "275912199809",
    appId: "1:275912199809:web:e80febbe2a251ef3790780"
  };



  const app=getApps.length>0?getApp():initializeApp(firebaseConfig)
  const firestore=getFirestore(app)
  const storage=getStorage(app)
  export{app,firestore,storage};