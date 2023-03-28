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
    
     //uploading
 const [AllDoc, setAllDoc]=useState([]);
 const[Post, setPost]=useState({user:"",title:"",description:"",link:"",class:""});

 const handleChange3=(event)=>{
  event.preventDefault();
  const{name,value}=event.target;
  setPost((prev) =>{
    return{...prev,[name]:value}
  })
}
 function handleAllDoc(e){
   e.preventDefault();
   
   if(e.target.files && e.target.files.length>0){
     const pickedFile=e.target.files;
     setAllDoc(pickedFile);
   }
}
function SingleUpload(e){
  e.preventDefault();
  const storage = getStorage();
 
 
  for (let i=0; i<AllDoc.length; i++){
    const storageRef = ref(storage, 'AllDoc/'+AllDoc[i].name)
    const uploadTask = uploadBytesResumable(storageRef,AllDoc[i]);
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
  querySnapshot1.forEach((doc) => { console.log(doc.id)}); {/* doc.is is id, doc.id.title returns title */}
  }
    
    return (

        <div class = "notes-full-screen-container"> 

<h1>Uploading</h1>
    <form onSubmit={SingleUpload}>
    <input type="string" name="user" value={Post.password} onChange={handleChange3} placeholder="Username"/>
    <input type="string" name="title" value={Post.password} onChange={handleChange3} placeholder="title"/>
    <input type="string" name="description" value={Post.password} onChange={handleChange3} placeholder="Description"/>
    <input type="string" name="class" value={Post.c} onChange={handleChange3} placeholder="class"/>
    <input type="file" multiple name="AllFile" onChange={handleAllDoc}/>
    <button type= "submit">Single Upload</button>
    </form>

    <h1 >Searching</h1>
    <form onSubmit={show}>
    <input type="string" name="classlook" value={Post.password} onChange={handleChange4} placeholder="Description"/>
    <button type= "submit">Find</button>
    </form>

            <div className="upload-box">
                <FaFileUpload class='uploadFileIcon'/>
                <h1>choose a file or drag it here</h1>
            {/* this is duo tone upload icon <FontAwesomeIcon icon={faFileArrowUp} size="lg" style={{"--fa-primary-color": "#ff932e", "--fa-secondary-color": "#ff932e",}} /> */}
            </div>

            <div className="past-upload-box">
                <h1 className="header"> Past Uploads</h1>
                <h1 className="body">These are your most recently uploaded documents</h1>
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