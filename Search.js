import React, { useState, useEffect } from "react";

import {initializeApp} from 'firebase/app';

import { getFirestore, doc, setDoc, collection, addDoc, query, where, getDocs, or, and, deleteField, getDoc} from 'firebase/firestore/lite';

import {getStorage, ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";
import {updateDoc, arrayUnion, arrayRemove } from "firebase/firestore/lite";

 

 

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

const db=getFirestore(app);

const [query1, setQuery] = useState('');

const [results, setResults] = useState([]);

const [results2, setResults2] = useState([]);

const[currentClass, setcurrentClass]=useState("")





  const handleSubmit = async (event) => {

    event.preventDefault();

 

    console.log(query1)
    

    const q1= query(collection(db, "Classes"), and(where("className", ">=", query1), where("className","<=",query1+ 'uf8ff')));

    const querySnapshot =  await getDocs(q1);

    // Convert QuerySnapshot to array of plain JavaScript objects

    //querySnapshot.forEach((doc) => { setResults([...results,doc.data()]);});

    const searchResults = querySnapshot.docs.map((doc) => doc.data());

 

    console.log(searchResults)
    console.dir(searchResults)

    // Update state with search results

    setResults(searchResults);

 

   

  };

  const handleClick = async (value) => {
    setcurrentClass(value)

 

    console.log(value)

    const q2= query(collection(db, "Post"), where("class", "==", value));

    const querySnapshot =  await getDocs(q2);

    // Convert QuerySnapshot to array of plain JavaScript objects

    //querySnapshot.forEach((doc) => { setResults([...results,doc.data()]);});

    const searchResults = querySnapshot.docs.map((doc) => doc.data());

 

    console.log(searchResults)
    console.log(searchResults)

    // Update state with search results

    setResults2(searchResults);}
    const [comment, setComment]= useState({Comment:"",User:""})

    const handleChangeComment=(event)=>{
      event.preventDefault();
      const{name,value}=event.target;
      setComment((prev) =>{
        return{...prev,[name]:value}
      })
    }
const addComment= async(value)=>{
 var postId
 const LookingForPostComment= query(collection(db, "Post"), where("link", "==", value));
  const querySnapshot1 =  await getDocs(LookingForPostComment);
  querySnapshot1.forEach((doc)=>{postId=doc.id})
  const postRef= doc(db,"Post", postId);
  const snap1= await getDoc(postRef)
  const olda= snap1.data().Comment
  const objectcomment= {Comment: comment.Comment, User: comment.User}
  olda.push(objectcomment)
  await updateDoc(postRef,{
    Comment: olda
  })
}

 
//Put into saved class
const addSavedClass= async ()=>{
  const AllClassData= query(collection(db,"Classes"), where("className","==", currentClass))
  const querynapshot= await getDocs(AllClassData)
  var classId
  querynapshot.forEach((doc)=>{classId=doc.id})
  const classRef= doc(db,"Classes",classId)
  const classnapshot= await getDoc(classRef)
  const classdata= classnapshot.data()
  const userRef= doc(db,"Credential", sessionStorage.getItem("id"))
  await updateDoc(userRef,{
    SavedClass: arrayUnion(classdata)
  })

}


//Put to saved Post
const addSavedPost= async(value)=>{
  var postId
 const LookingForPostComment= query(collection(db, "Post"), where("link", "==", value));
  const querySnapshot1 =  await getDocs(LookingForPostComment);
  querySnapshot1.forEach((doc)=>{postId=doc.id})
  const postRef= doc(db,"Post", postId);
  const snap1= await getDoc(postRef)
  const postdata= snap1.data()
  const userRef= doc(db,"Credential", sessionStorage.getItem("id"))
  await updateDoc(userRef,{
    SavedPost: arrayUnion(postdata)
  })

}
   
//upvote
const upvote= async(postlink)=>{
  var postId
 const LookingForPostComment= query(collection(db, "Post"), where("link", "==", postlink));
  const querySnapshot1 =  await getDocs(LookingForPostComment);
  querySnapshot1.forEach((doc)=>{postId=doc.id})
  const postRef= doc(db,"Post", postId);
  const snap1= await getDoc(postRef)
  const oldscore= snap1.data().rate
  var score= oldscore+1
  await updateDoc(postRef,{
    rate: score
  })

}
//downvote
const downvote= async(postlink)=>{
  var postId
 const LookingForPostComment= query(collection(db, "Post"), where("link", "==", postlink));
  const querySnapshot1 =  await getDocs(LookingForPostComment);
  querySnapshot1.forEach((doc)=>{postId=doc.id})
  const postRef= doc(db,"Post", postId);
  const snap1= await getDoc(postRef)
  const oldscore= snap1.data().rate
  var score= oldscore-1
  await updateDoc(postRef,{
    rate: score
  })

}
 

  return (

    <div>

      <form onSubmit={handleSubmit}>

        <input type="text" value={query1} onChange={(event) => setQuery(event.target.value)} />

        <button type="submit">Search</button>

      </form>

      {results.map((result) => (
        <div key={result.className}>
          <button onClick={()=>handleClick(result.className)}>{result.title}</button>
        </div>
      ))}

      <button onClick={addSavedClass}>Add saved class</button>
      {results2.map((result) => (
        <div key={result.link}>
          <h2>{result.title}</h2>
          <h3>{result.description}</h3>
          <embed src={result.link} width="100%" height="600px" />
          <button onClick={()=>upvote(result.link)}>Upvote</button>
          <h3>{result.rate}</h3>
          <button onClick={()=>downvote(result.link)}>Downvote</button>
          <button onClick={()=>addSavedPost(result.link)}>Save Post</button>
          
        

          <h4>Comment</h4>
          {result.Comment.map((comment, index)=>(
            <div key={index}>
              <h5>{comment.User}</h5>
              <h6>{comment.Comment}</h6>
              </div>

              
          ))}
          <input type="text" name="User" value={comment.User} onChange={handleChangeComment} placeholder="Put any user name you want"/>
           <input type="text" name="Comment" value={comment.Comment} onChange={handleChangeComment} placeholder="Enter the comment"/>

            <button onClick={()=>addComment(result.link)}>Add Comment</button>
           
          



        </div>

      ))}

    </div>

  );

};

 

export default Search;
