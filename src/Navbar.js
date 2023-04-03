import {initializeApp} from 'firebase/app';
import { getFirestore, doc, setDoc, collection, addDoc, query, where, getDocs} from 'firebase/firestore/lite';
import {getStorage, ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";
import React,{useState} from 'react';


import { Link, useMatch, useResolvedPath} from "react-router-dom"

export default function Navbar(){

    return <nav className="nav">
        <Link to="/" className="site-title">marSpace</Link>


        <ul>
        
        <CustomLink to = "/login">Log in</CustomLink>
        <CustomLink to = "/signup">Sign up</CustomLink>

            {/*temp for viewing */}
            <CustomLink to = "/dashboard">Dashboard</CustomLink> 
            <CustomLink to = "/classroom">Classroom</CustomLink>
            <CustomLink to = "/profile">Profile</CustomLink>
        </ul>
    </nav>
}

function CustomLink({ to, children, ...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})
    return(
        <li className = {isActive? "active": ""}>
            <Link to = {to} {...props}>
                {children}
            </Link>
        </li>
    )
}