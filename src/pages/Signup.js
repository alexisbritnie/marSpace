import { useState} from "react";
import { Link, useNavigate} from "react-router-dom";
import React from 'react';
import {initializeApp} from 'firebase/app';
import { getFirestore, doc, setDoc, collection, addDoc, query, where, getDocs} from 'firebase/firestore/lite';
import {getAuth, signOut} from "firebase/auth"
import Navbar from '../Navbar';


export default function Signup(){

  const firebaseConfig = {
    apiKey: "AIzaSyBi28e8xEpJvwGgSGUqWZXvAe9aLfBi8Ow",
    authDomain: "marspace-1afb7.firebaseapp.com",
    projectId: "marspace-1afb7",
    storageBucket: "marspace-1afb7.appspot.com",
    messagingSenderId: "936429184235",
    appId: "1:936429184235:web:f1ddee1d9a9e2f17b44aae",
    measurementId: "G-5SSF4M5BTB"
  };

  const navigate = useNavigate();
  const navigateToLogin = () => {navigate('/login')};
      // Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app);
const[credit, setCredit]=useState({username:"",password:""});

const handleChange=(event)=>{
  event.preventDefault();
  const{name,value}=event.target;
  setCredit((prev) =>{
    return{...prev,[name]:value}
  })
}

const addDocu= (event) =>{
  event.preventDefault();
  addDoc(collection(db, "Credential"), {

    username: credit.username,
    password: credit.password,
    SavedClass: []

  })

console.log("not here")
navigateToLogin()
}
  
  


    
    return(
      <>
      <Navbar/>

        <div class = "full-screen-container">
        <div class="login-container">
            <h1 class="login-title" style={{fontSize: 39}}>Create an account</h1>
            <p class="signup-blurb">Sign up now! It's absolutely free!</p>

            <form class="form" onSubmit={addDocu}>
                <div class="input-group success">
                    {/* <label for="email"> Email</label> */}
                    <input type="email" name="username" value={credit.username} onChange={handleChange} placeholder="Username"/>
                    
                </div>

                <div class="input-group error">
                    {/*<label for="password"> Password</label>*/}
                    <input type="password" name="password" value={credit.password} onChange={handleChange} placeholder="Password"/>
                    
                </div>

                <button type = "submit" class="login-button" >Sign up</button>
                <div>
                    Already have an account? Click <Link to="/login">here</Link> to log in!
                </div>
            </form>

        </div>
      </div>
      </>
    )

}