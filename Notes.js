import {initializeApp} from 'firebase/app';
import { getFirestore, doc, setDoc, collection, addDoc, query, where, getDocs} from 'firebase/firestore/lite';
import {getStorage, ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";
import React,{useState} from 'react';

import { FaFileUpload } from "react-icons/fa";
export default function Notes(){

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
    //Storaging
    
    return (

        <div class = "notes-full-screen-container"> 
            <div className="past-upload-box">
                <h1 className="note-name"> Past Uploads</h1>
                <h1 className="note-description">These are your most recently uploaded documents</h1>
                <div className="doc-carousel">
                    <div className="doc-grid">
                         <div class= "dash-class-cards">
                            <div class="dash-class-card-header card-image">
                            <img src="https://source.unsplash.com/95YRwf6CNw8" />
                            CSIS 2101</div>
                            <div class="dash-class-card-body"> Fundementals of Computer Programming</div>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>

    )
    }