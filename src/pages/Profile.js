import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import React from 'react';
import images from './images/classroom.png';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import {FaUserAstronaut} from "react-icons/fa";
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, collection, addDoc, query, where, getDocs, updateDoc, getDoc, arrayUnion, arrayRemove } from 'firebase/firestore/lite';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import NavbarLoggedIn from "../NavbarLoggedIn";

export default function Profile() {
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
    const db = getFirestore(app);
    
    const userDoc = sessionStorage.getItem("userid")

    const [profile, setprofile] = useState({ username: "", type: "", major: "" })
    //update those value as user enter
    const updateprofile = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setprofile((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const getUserDoc = async()=> {
        const profileref = doc(db, "Credential", userDoc)
        const profSnapshot = await getDoc(profileref)
        const profileData = profSnapshot.data()
        console.log(profileData)
        setprofile({major: profileData.major, username: profileData.username, type: profileData.type})
       
        
    }

    //Username
    const changeProfileUserName = async (event) => {
        event.preventDefault();
        const profileref = doc(db, "Credential", userDoc)
        await updateDoc(profileref, {
            username: profile.username

        })
    }
    //UserType
    const changeProfileUserType = async (event) => {
        event.preventDefault();
        const profileref = doc(db, "Credential", userDoc)
        await updateDoc(profileref, {
            type: profile.type
        })
    }
    //Major
    const changeProfileUserMajor = async (event) => {
        event.preventDefault();
        const profileref = doc(db, "Credential", userDoc)
        await updateDoc(profileref, {
            major: profile.major
        })
    }

    useEffect(() => {
        getUserDoc()
      }, [])

    return (
        <>
            <NavbarLoggedIn />
            <div class="profile-full-screen-container">
                <div className="user-card">
                    <div className="profile-pic-square">
                    <FaUserAstronaut class='astronaut' />
                    </div>
                    <p className="user-name">{profile.username}</p>
                    
                    <p className="user-type">{profile.major}</p>
                    <p className="user-type">{profile.type}</p>
                </div>
                <div className="profile-folder">

                    <h1 className="about-title">About</h1>
                    <div className="personal-info-box">
                        <form onSubmit={changeProfileUserName}>
                            <label>Name: <input type="email" name="username" value={profile.username} onChange={updateprofile} placeholder="New UserName" /></label>
                            <button type="submit">Change Username</button>
                        </form>

                        <form onSubmit={changeProfileUserType}>
                            <label>User Type: <input type="text" name="type" value={profile.type} onChange={updateprofile} placeholder="Change Type" /> </label>
                            <button type="submit">Change UserType</button>
                        </form>

                        <form onSubmit={changeProfileUserMajor}>
                        <label>Major: <input type="text" name="major" value={profile.major} onChange={updateprofile} placeholder="New Major" /></label>
                            <button type="submit">Change UserMajor</button>
                        </form>
                    </div>

                   


                </div>
            </div>
        </>
    )
}