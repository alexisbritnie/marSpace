import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import React from 'react';
import { FaArrowCircleUp, FaFileUpload, FaPlusCircle } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, collection, addDoc, query, where, getDocs, updateDoc, getDoc, arrayUnion, arrayRemove } from 'firebase/firestore/lite';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { onSnapshot } from 'firebase/firestore'
import Login from "./Login";
import NavbarLoggedIn from "../NavbarLoggedIn";


export default function Classroom() {

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
  const [credit, setCredit] = useState({ username: "", password: "" });
  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setCredit((prev) => {
      return { ...prev, [name]: value }
    })
  }

  const addDocu = (event) => {
    event.preventDefault();
    addDoc(collection(db, "Credential"), {
      username: credit.username,
      password: credit.password
    })
  }

  //uploading
  const [AllDoc, setAllDoc] = useState([]);
  const [Post, setPost] = useState({ user: (sessionStorage.getItem("username")), title: "", description: "", link: "", Comment: [], class: (sessionStorage.getItem('className')), rate: 0 }); /* where i will set username and class in background */

  const handleChange3 = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setPost((prev) => {
      return { ...prev, [name]: value }
    })
  }
  function handleAllDoc(e) {
    e.preventDefault();

    if (e.target.files && e.target.files.length > 0) {
      const pickedFile = e.target.files;
      setAllDoc(pickedFile);
    }
  }
  function SingleUpload(e) {
    e.preventDefault();
    const storage = getStorage();


    for (let i = 0; i < AllDoc.length; i++) {
      const storageRef = ref(storage, 'AllDoc/' + AllDoc[i].name)
      const uploadTask = uploadBytesResumable(storageRef, AllDoc[i]);
      uploadTask.on('state_changed',
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {

          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log('File available at', downloadURL);
            addDoc(collection(db, "Post"), {
              username: Post.user,
              title: Post.title,
              description: Post.description,
              link: downloadURL,
              class: Post.class
            })
          });
        }
      );
    }
  }
  const [look, setlook] = useState({ classlook: "" });
  const handleChange4 = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setlook((prev) => {
      return { ...prev, [name]: value }
    })
  }
  async function show(event) {
    event.preventDefault();
    const q1 = query(collection(db, "Post"), where("class", "==", look.classlook));
    console.log(q1);
    const querySnapshot1 = await getDocs(q1);
    querySnapshot1.forEach((doc) => { console.log(doc.id) }); {/* doc.id is id, doc.id.title returns title */ }
  }

  //Put into saved class
  const addSavedClass = async () => {
    console.log('userid: ', sessionStorage.getItem("userid"))
    console.log('className: ', sessionStorage.getItem('className'))
    const AllClassData = query(collection(db, "Classes"), where("className", "==", sessionStorage.getItem('className')))
    const querynapshot = await getDocs(AllClassData)
    var classId
    querynapshot.forEach((doc) => { classId = doc.id })
    const classRef = doc(db, "Classes", classId)
    console.log('classId: ', classId)
    const classnapshot = await getDoc(classRef)
    const classdata = classnapshot.data()
    const userRef = doc(db, "Credential", sessionStorage.getItem("userid"))
    console.log('class data: ', classdata)
    await updateDoc(userRef, {
      SavedClass: arrayUnion(classdata)
    })

  }

  const [savePost, setSavePost] = useState([])

  const getPost = async () => {

    const queryClass = query(collection(db, "Post"), where("class", '==', sessionStorage.getItem("className")))
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


  return (
<>
<NavbarLoggedIn/>
    <div class="classroom-full-screen-container">

      <form onSubmit={SingleUpload}>
        <input type="file" multiple name="AllFile" onChange={handleAllDoc} /> {/*choose file */}

      </form>

      <div class="class-title-bar">
        <div class="class-title-div">
          <h1 class="class-title">{sessionStorage.getItem('title')}</h1>
        </div>
        <div class="addClassButtonDiv">
          <FaPlusCircle class='addClass' /> {/*add class to dashboard */}
          <button class="clear-button-title" onClick={addSavedClass}></button>
        </div>

      </div>



      <div class="upload-notes-container">
        <form onSubmit={SingleUpload}>
          <input class="note-name-box" type="string" name="title" value={Post.password} onChange={handleChange3} placeholder="Enter your note's title:" />
          <div></div>
          <input class="note-description-box" type="string" name="description" value={Post.password} onChange={handleChange3} placeholder="Enter a short description" />

          <div className="upload-doc-container">
            <FaFileUpload class='uploadFileIcon' />

            <label class="clear-button">
              <input type="file" onChange={handleAllDoc} className="choose-file" /> {/*choose file */}
            </label>
          </div>

          <button class="submit-note-button" type="submit">Submit</button>
        </form>
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
              <FaArrowCircleUp class='arrowUp' />
              <h3>{result.rate}</h3>
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