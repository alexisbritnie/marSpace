import { useState, useEffect} from "react";
import { Link, useNavigate} from "react-router-dom";
import React from 'react';
import {initializeApp} from 'firebase/app';
import { getFirestore, doc, setDoc, collection, addDoc, query, where, getDocs, getDoc} from 'firebase/firestore/lite';
import {getStorage, ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";
import Search from "../Search";
import ClassCard from "../ClassCard";
import {getAuth, signOut} from "firebase/auth"
import { QuerySnapshot } from "firebase/firestore";



export default function Dashboard(){
    const navigate = useNavigate();
    const navigateToProfile = () => {navigate('/profile')};
    const navigateToNotes = () => {navigate('/notes')};
    const navigateToSavedMaterials = () => {navigate('/materials')};
    const navigateToLogout  = () => {navigate('/logout')}
    const navigateToSearchPage  = () => {navigate('/SearchPage')}
    const auth = getAuth();
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
    const docRef = doc(db, "Credential", sessionStorage.getItem('userid'))

    console.log(sessionStorage.getItem("userid"))
    console.log(sessionStorage.getItem("username")) 
    /*console.log(sessionStorage.getItem('token')) */  
    const [saveCl, setsaveCl]=useState([])


    useEffect(() =>{
        rando()
    },[])

    const rando = async(event) =>{
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()){
            console.log('Doc data', docSnap.data())
            const info= docSnap.data()
            setsaveCl(info.SavedClass)
        }else{
            console.log('nada')
        }
    }

    const navigateToClassroom = () => {navigate('/classroom')}


    const goToClass = (title, className) =>{
        console.log( className)
        sessionStorage.setItem('title', title)
        sessionStorage.setItem('className', className)

        console.log('class: ', className)
        console.log('title: ',title)
       navigateToClassroom()

    }
  
    return (
        <div class = "dash-full-screen-container">
        <div class="dashboard-container">
        <div class="card-grid">

            {saveCl.map((result)=> (
                <div class= "dash-class-cards" key = {result.className}>
                    <div class="dash-class-card-header card-image">
                        <img src={result.pic} />{result.className}
                    </div>
                        <div class="dash-class-card-body">{result.title}</div>
                    <div class="gotoButtonDiv">
                    <button className="class-page-button" onClick={()=> goToClass(result.title, result.className)}>go to class!</button>
                    </div>
                </div>
                
             ))}
               
            </div>
            <div class="side-bar-form" >
                <h1 class="dashboard-title">Dashboard</h1>
                
                <div class= "dash-profile-card">
                    <form>
                    <h1 class="dash-name">{sessionStorage.getItem("username")}</h1>
                    </form>
                </div>

                <div class="dash-button">
                    <button type = "submit" onClick={navigateToProfile}>My Profile</button>
                </div>

                <div class="dash-button">
                    <button type = "submit" onClick={navigateToNotes}>My Notes</button>
                </div>

                <div class="dash-button">
                    <button type = "submit" onClick={navigateToSearchPage}>Search</button>
                </div>

                <div class="dash-button">
                    <button type = "submit" onClick={navigateToLogout}>Logout</button>
                </div>
                
            </div>

            

        </div>
      </div>

    )
}