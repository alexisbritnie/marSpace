import React, { useState, useEffect, useMemo } from "react";
import {initializeApp} from 'firebase/app';
import { getFirestore, doc, setDoc, collection, addDoc, query, where, getDocs, or, and} from 'firebase/firestore/lite';
import {getStorage, ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";
import ClassDocs from "./ClassDocs";
import { Link} from "react-router-dom";
import { QuerySnapshot, setIndexConfiguration } from "firebase/firestore";

const ClassCard = (props) =>{
    console.log(props)
    
    
    return(
        <div>
            
            
                <div class= "dash-class-cards">
                    <div class="dash-class-card-header card-image">
                        <img src={props.pic} />
                        {props.className}</div>
                    <div class="dash-class-card-body">{props.title}</div>
                </div>

            
        </div>
    )
}
export default ClassCard
