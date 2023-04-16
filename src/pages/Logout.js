import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import React from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, collection, addDoc, query, where, getDocs } from 'firebase/firestore/lite';
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import NavbarLoggedIn from "../NavbarLoggedIn";
import Home from "../pages/Home";

export default function Logout() {

    const auth = getAuth();
    const navigate = useNavigate();
    const navigateToDashboard = () => { navigate('/dashboard') };
    const navigateToHome = () => { navigate('/') };

    const logout = async () => {
        try {
            await signOut(auth);
            console.log('you are signed out')
        } catch (err) {
            console.error(err)
        }
        navigateToHome()
    }

    return (
        <>
            <NavbarLoggedIn />
            <div class="logout-full-screen-container">
                <h1>Are you sure you want to logout?</h1>
                <div class="logout-buttons-div">
                    <div class="logout-buttons">
                        <button type = "submit" onClick={logout}>Logout</button>
                    </div>
                    <div class="logout-buttons">
                        <button type = "submit" onClick={navigateToDashboard}>I've changed my mind</button>
                    </div>
                </div>
            </div>
        </>
    )
}