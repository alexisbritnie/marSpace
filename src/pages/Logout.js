import { useState} from "react";
import { Link, useNavigate} from "react-router-dom";
import React from 'react';
import {initializeApp} from 'firebase/app';
import { getFirestore, doc, setDoc, collection, addDoc, query, where, getDocs} from 'firebase/firestore/lite';
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";

export default function Logout(){

    const auth = getAuth();
    const user = auth.currentUser;
        if(user){
            console.log(' user is logged in')
        }else{
            console.log('user is signed out')
        }
    
    const  logout = async () => {
        try{
            await signOut(auth);
            console.log('you are signed out')
        }catch (err){
            console.error(err)
        }
    }

    const navigate = useNavigate();
    const navigateToDashboard = () => {navigate('/dashboard')};

    return (
        <div classname="hero">
            <h1>Are you sure you want to logout?</h1>
            <div class="dash-button">
                    <button type = "submit" onClick={logout}>Logout</button>
            </div>
            <div class="dash-button">
                    <button type = "submit" onClick={navigateToDashboard}>I've changed my mind</button>
            </div>
        </div>
    )
}