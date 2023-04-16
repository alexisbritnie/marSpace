import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, collection, addDoc, query, where, getDocs, updateDoc, getDoc, arrayUnion, arrayRemove , deleteDoc} from 'firebase/firestore/lite';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import React, { useEffect, useState } from 'react';
import NavbarLoggedIn from '../NavbarLoggedIn';
import { FaArrowCircleUp, FaFileUpload, FaPlusCircle } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";
export default function Notes() {

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
    //Storaging

    const [savePost, setSavePost] = useState([])

    const getPost = async () => {
  
      const queryClass =  query(collection(db, "Post"), where("username", "==", sessionStorage.getItem("username")));
      const classroomSnapshot = await getDocs(queryClass)
      const searchResults = classroomSnapshot.docs.map((doc) => doc.data());
      setSavePost(searchResults)
    }
  
    useEffect(() => {
      getPost()
    }, [])
    const [comment, setComment] = useState( {User: "", Comment:""})
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
       const objectcomment= {Comment: comment.Comment, User: sessionStorage.getItem("username")}
       olda.push(objectcomment)
       await updateDoc(postRef,{
         Comment: olda
       })
       setComment({Comment: ""})
       getPost()
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
    }
   
    )
    getPost()
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
    getPost()
  }
  //Remove user post
  const userdeletepost= async(postlink)=>{
      var postId;
      const LookingForPostComment= query(collection(db, "Post"), where("link", "==", postlink));
      const querySnapshot1 =  await getDocs(LookingForPostComment);
      querySnapshot1.forEach((doc)=>{postId=doc.id})
      await deleteDoc(doc(db, "Post", postId));
    }
  
    return (
  <>
  <NavbarLoggedIn/>
      <div class="classroom-full-screen-container">
  
       
  
        <div class="class-title-bar">
          <div class="class-title-div">
            <h1 class="class-title">My Past Note</h1>
          </div>
          
  
        </div>
  
  
  
        
  
        {savePost.map((result) => (
          <>
            <div class="classroom-container">
              <p class="note-name">{result.title}</p>
              <p class="note-description">{result.description}</p>
              <div class="class-notes-container">
                <embed src={result.link + "#view=FitH"} width="100%" height="900" />
  
              </div>
              <div class="note-ratings">
              <button onClick={()=>upvote(result.link)}>Upvote</button>
                <FaArrowCircleUp class='arrowUp' />
                <h3>{result.rate}</h3>
                <button onClick={()=>downvote(result.link)}>Downvote</button>
                <button onClick={()=>{userdeletepost(result.link)}}>remove this class</button>
                <FaArrowCircleDown class='arrowDown' />
              </div>
            </div>
            <div class="discussion-box-container">
              <h1> Class Discussion</h1>
              <div class="discussion-box">
                <div class="comment-box">
  
                  {result.Comment.map((result2, index) => (
                    <div key={index}>
                      <div class="comment-author">
                        <h3 class="comment-author-font">{result2.User}</h3>
                      </div>
                      <p class="comments-font">{result2.Comment}</p>
  
                    </div>
  
  
                  ))}
  
  
                </div>
  
  
              </div>
              <div class="division-line"></div>
              <div class="typing-comment-box">
             <input type="text" name="Comment" class="comment-input" value={comment.Comment} onChange={handleChangeComment} placeholder="Enter the comment"/>
  
             
                <button onClick={()=>addComment(result.link)}
                  class="send-button"
                  type="submit">SEND
  
                </button>
              </div>
            </div>
          </>
  
  
        ))}
  
      </div>
      </>
    )
  }