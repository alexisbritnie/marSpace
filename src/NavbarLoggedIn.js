import {initializeApp} from 'firebase/app';
import { getFirestore, doc, setDoc, collection, addDoc, query, where, getDocs} from 'firebase/firestore/lite';
import {getStorage, ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";
import React,{useState} from 'react';
import Search from './Search';
import { FaSearch } from "react-icons/fa"
import { Link, useMatch, useResolvedPath} from "react-router-dom"


export default function NavbarLoggedIn(){
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
        password: credit.password
      })}

      const [look, setlook]=useState({classlook:""});
const handleChange4=(event)=>{
  event.preventDefault();
  const{name,value}=event.target;
  setlook((prev) =>{
    return{...prev,[name]:value}
  })
}
async function show(event) {
  event.preventDefault();
  const q1= query(collection(db, "Post"), where("class", "==", look.classlook));
  console.log(q1);
  const querySnapshot1 =  await getDocs(q1);
  querySnapshot1.forEach((doc) => { console.log(doc.id)});
  }
  {/* 
<h1 >Searching</h1>
    <form onSubmit={show}>
    <input type="string" name="classlook" value={Post.password} onChange={handleChange4} placeholder="Description"/>
    <button type= "submit">Find</button>
*/}

    return <nav className="nav">
        
        <h1 className="site-title" >marSpace</h1>
        
        <ul>
            
        
            <CustomLink to = "/searchPage">Search</CustomLink>
            <CustomLink to = "/dashboard"> Dashboard</CustomLink>
            
            
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