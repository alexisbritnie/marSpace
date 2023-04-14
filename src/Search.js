import React, { useState } from "react";
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, collection, addDoc, query, where, getDocs, or, and, deleteField } from 'firebase/firestore/lite';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import ClassDocs from "./ClassDocs";
import { Link, useNavigate } from "react-router-dom";
import {updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";

function Search() {


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
  const db = getFirestore(app);
  const navigate = useNavigate();

  const [query1, setQuery] = useState('');
  const [query2, setQuery2] = useState('');
  const [results, setResults] = useState([]); /* CLASS NAMES LIST */
  const [results2, setResults2] = useState([]); /*docs */

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(query1)
    const q1 = query(collection(db, "Classes"), and(where("className", ">=", query1), where("className", "<=", query1 + 'uf8ff')));
    const q3 = query(collection(db, "Classes"), and(where("title", ">=", query2), where("title", "<=", query2 + 'uf8ff')));
    const querySnapshot = await getDocs(q1);
    // Convert QuerySnapshot to array of plain JavaScript objects
    //querySnapshot.forEach((doc) => { setResults([...results,doc.data()]);});
    const searchResults = querySnapshot.docs.map((doc) => doc.data());
    const querySnapshot2 = await getDocs(q3);
    // Convert QuerySnapshot to array of plain JavaScript objects
    //querySnapshot.forEach((doc) => { setResults([...results,doc.data()]);});
    const searchResults2 = querySnapshot2.docs.map((doc) => doc.data());
    console.log(searchResults)
    // Update state with search results
    setResults(searchResults);
    //setResults(results => [...results, searchResults2])
  };

  const handleClick = async (value) => {
    console.log(value)
    const q2 = query(collection(db, "Post"), where("class", "==", value));
    const querySnapshot = await getDocs(q2);
    // Convert QuerySnapshot to array of plain JavaScript objects
    //querySnapshot.forEach((doc) => { setResults([...results,doc.data()]);});
    const searchResults = querySnapshot.docs.map((doc) => doc.data());
    console.log(searchResults)
    // Update state with search results
    setResults2(searchResults);
  };

  const [comment, setComment] = useState({ Comment: "", User: "" })
  const handleChangeComment = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setComment((prev) => {
      return { ...prev, [name]: value }
    })
  }

  const addComment = async (value, oldarray) => {
    var postId;
    const LookingForPostComment = query(collection(db, "Post"), where("link", "==", value));
    const querySnapshot1 = await getDocs(LookingForPostComment);
    querySnapshot1.forEach((doc) => { postId = doc.id })
    const postRef = doc(db, "Post", postId);
    console.log(postRef)
    const objectcomment = { Comment: comment.Comment, User: comment.User }
    const plainObj = JSON.parse(JSON.stringify(objectcomment))
    console.log(objectcomment)
    console.log(plainObj)

    await updateDoc(postRef, {
      TestChange: false
    });
  }

  const navigateToClassroom = () => { navigate('/classroom') }

  const goToClass = (title, className) =>{
    console.log( className)
    sessionStorage.setItem('title', title)
    sessionStorage.setItem('className', className)

    console.log('class: ', className)
    console.log('title: ',title)
   navigateToClassroom()

}
  const pushPost = () => {

  }

  return (
    <div className="parent">

      <div className="search-wrapper">
        <form onSubmit={handleSubmit}>
          <input type="search" value={query1} onChange={(event) => setQuery(event.target.value)} />
          <button type="submit">Search</button>
        </form>
      </div>

      {/* display classes in serach bar */}
      {results.length != 0 && (
        <div className="dataResult">
          {results.map((result) => ( /* goes through array */
            <div key={result.className}>
              <button className="dataItem" onClick={()=>goToClass(result.title, result.className)}>
                {result.title}
              </button>
            </div>
          ))}
        </div>
      )}

      {/* displays ALL the files from the clicked upon class , have this passed onto classroom.js page*/}

      {results2.map((result) => (
        <div key={result.link}>
          <h2>{result.title}</h2>
          <h3>{result.description}</h3>
          console.log(result.description)
          <embed src={result.link} width="100%" height="300px" />
          <h3>{result.rate}</h3>

          <h4>Comment</h4>
          {result.Comment.map((comment) => (
            <div key={comment.Comment} class="comment-box">
              <div class="comment-author">
                <h3 class="comment-author-font">{comment.User}</h3>
              </div>
              <p class="comments-font"> {comment.Comment} </p>
            </div>
          ))}

          <input type="text" name="User" value={comment.User} onChange={handleChangeComment} placeholder="Put any user name you want" />
          <input type="text" name="Comment" value={comment.Comment} onChange={handleChangeComment} placeholder="Enter the comment" />
          <button onClick={() => addComment(result.link, result.Comment)}>Add Comment</button>

        </div>
      ))}
    </div>
  );
};

export default Search;