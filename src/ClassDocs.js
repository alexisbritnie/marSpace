import React, { useState, useEffect, useMemo } from "react";
import {initializeApp} from 'firebase/app';
import { getFirestore, doc, setDoc, collection, addDoc, query, where, getDocs, or, and} from 'firebase/firestore/lite';
import {getStorage, ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";

function ClassDocs() {
    const firebaseConfig = {
    apiKey: "AIzaSyBi28e8xEpJvwGgSGUqWZXvAe9aLfBi8Ow",
    authDomain: "marspace-1afb7.firebaseapp.com",
    projectId: "marspace-1afb7",
    storageBucket: "marspace-1afb7.appspot.com",
    messagingSenderId: "936429184235",
    appId: "1:936429184235:web:f1ddee1d9a9e2f17b44aae",
    measurementId: "G-5SSF4M5BTB"
  };

  const app = initializeApp(firebaseConfig);
  const db=getFirestore(app);
  const [query1, setQuery] = useState('');
  const [results2, setResults2] = useState([]);

  const [query2, setQuery2] = useState('');
  const [results, setResults] = useState([]); /* CLASS NAMES LIST */

  const handleClick = async (value) => {

    console.log(value)
    const q2= query(collection(db, "Post"), where("class", "==", value));
    const querySnapshot =  await getDocs(q2);
    // Convert QuerySnapshot to array of plain JavaScript objects
    //querySnapshot.forEach((doc) => { setResults([...results,doc.data()]);});
    const searchResults = querySnapshot.docs.map((doc) => doc.data());

    console.log(searchResults)
    // Update state with search results
    setResults2(searchResults);
  };

  return(
    
    <div className="doc-holder">
        {results2.map((result) => (
        <div key={result.link}>
          <h2>{result.title}</h2>
          <h3>{result.description}</h3>
          <embed src={result.link} width="100%" height="300px" />
          <h3>{result.rate}</h3>
        </div>
      ))}
    </div>
  )





}
export default ClassDocs;