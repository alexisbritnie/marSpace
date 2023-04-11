import { useState} from "react";
import { Link, useNavigate, useParams, } from "react-router-dom";
import React from 'react';
import {initializeApp} from 'firebase/app';
import { getFirestore, doc, setDoc, collection, addDoc, query, where, getDocs} from 'firebase/firestore/lite';
import { and } from "firebase/firestore";

export default function Login(){

    const firebaseConfig = {
        apiKey: "AIzaSyBi28e8xEpJvwGgSGUqWZXvAe9aLfBi8Ow",
        authDomain: "marspace-1afb7.firebaseapp.com",
        projectId: "marspace-1afb7",
        storageBucket: "marspace-1afb7.appspot.com",
        messagingSenderId: "936429184235",
        appId: "1:936429184235:web:f1ddee1d9a9e2f17b44aae",
        measurementId: "G-5SSF4M5BTB"
      }; 

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db=getFirestore(app);

//Fetching
const[creditCheck, setCreditCheck]=useState({username:"",password:""});
const[userChecking, setUserCheck] =useState("");
const[passwordChecking, setPasswordCheck] =useState("");
const handleChanges=(event)=>{
  event.preventDefault();
  const{name,value}=event.target;
  setCreditCheck((prev) =>{
    return{...prev,[name]:value}
  })
}
async function addDocument (event) {
    event.preventDefault();
    console.log('in  here')
    var userid=true;
    var passid=false
    const q1= query(collection(db, "Credential"), where("username", "==", creditCheck.username));
    const q2= query(collection(db, "Credential"),  where("password", "==", creditCheck.password));
    const querySnapshot1 =  await getDocs(q1);
    querySnapshot1.forEach((doc) => {
      userid=doc.id;
  });
  const querySnapshot2 =  await getDocs(q2);
    querySnapshot2.forEach((doc) => {
      passid=doc.id;
  });
  const searchResults= querySnapshot2.docs.map((doc)=> doc.data())

{/* if good, take to dashboard, if not error message to try logging in again*/}
setUserCheck(userid);
setPasswordCheck(passid); 



if( userid === passid){
    console.log("Good")
    sessionStorage.setItem('userid', userid)
    sessionStorage.setItem('username', creditCheck.username)
    sessionStorage.setItem('token', searchResults)
    navigateToDashboard()
   }
   else{
    console.log("Bad")
   }
  }

  const navigate = useNavigate();
  const navigateToDashboard = () => {navigate('/dashboard')};  

  


    return(
        <div class = "full-screen-container">
        <div class="login-container">
            <h1 class="login-title">Log in</h1>
            <form class="form" onSubmit={addDocument}>
                <div class="input-group success">
                    {/* <label for="email"> Email</label> */}
                    <input type="email" name="username" id = "username" value={creditCheck.username} onChange={handleChanges} placeholder="Email">
                    </input>
                    <span class="msg">Valid Email</span>
                    
                </div>

                <div class="input-group error">
                    {/*<label for="password"> Password</label>*/}
                    <input 
                    type="password" name="password" id = "password" value={creditCheck.password} onChange={handleChanges} placeholder="Password">
                    </input>
                    {/*
                    if( userChecking=== passwordChecking){
                      console.log("Good")
                    }
                    else{
                      console.log("Bad")
                    }
                  */}
                </div>

                <button 
                type = "submit" class="login-button" >Log in {/*add on submit for form */}
                </button>

                <div>
                    <Link to="/reset">Forgot Password</Link>
                </div>
                <div>
                    Don't have an account? <Link to="/signup">Signup</Link> now!
                </div>
            </form>
        </div>
      </div>
    )
}