
import './App.css';
import { Route, Routes} from 'react-router-dom';
import Navbar from './Navbar';
import Home from "./pages/Home";
import Signup from './pages/Signup';
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from './pages/Profile';
import Notes from './pages/Notes';
import Classroom from './pages/Classroom';
import Materials from './pages/Materials';
import Settings from './pages/Settings';
import {FaSearch} from "react-icons/fa";
import Footer from './Footer.js';
import React,{useState} from 'react';
import {initializeApp} from 'firebase/app';
import { getFirestore, doc, setDoc, collection, addDoc, query, where, getDocs} from 'firebase/firestore/lite';
import {getStorage, ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";


function App() {
 

  let Component
  return (
  <>
    <Navbar />
    <div className='container'>
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/login' element = {<Login/>} />
        <Route path='/signup' element = {<Signup/>} />

        {/*temp */}
        <Route path='/dashboard' element = {<Dashboard/>} />
        <Route path='/profile' element = {<Profile/>} />
        <Route path='/notes' element = {<Notes/>} />
        <Route path='/classroom' element = {<Classroom/>} />
        <Route path='/materials' element = {<Materials/>} />
        <Route path='/settings' element = {<Settings/>} />
      </Routes>
      
      <footer>
        <Footer />
      </footer>
    </div>
  </>
  )
}

export default App;
