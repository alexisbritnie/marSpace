import React,{useState} from 'react';
import {initializeApp} from 'firebase/app';
import { getFirestore, doc, setDoc, collection, addDoc, query, where, getDocs} from 'firebase/firestore/lite';
import {getStorage, ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";
import Search from './Search';
function App() {
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

  //Fetching
  const[creditCheck, setCreditCheck]=useState({username:"",password:""});
const handleChanges=(event)=>{
  event.preventDefault();
  const{name,value}=event.target;
  setCreditCheck((prev) =>{
    return{...prev,[name]:value}
  })
}
async function addDocument (event) {
  event.preventDefault();
  var userid=true;
  var passid=false
  const q1= query(collection(db, "Credential"), where("username", "==", creditCheck.username));
  const q2= query(collection(db, "Credential"),  where("password", "==", creditCheck.password));
  const querySnapshot1 =  await getDocs(q1);
  querySnapshot1.forEach((doc) => {
    userid=doc.id;
});
const querySnapshot2 =  await getDocs(q2);
  querySnapshot2.forEach((doc) => {
    passid=doc.id;
});


 if( userid === passid){
  console.log("Good")
 }else{
  console.log("Bad")
 }


 

  }
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
  //const metadata={
   // contentType: 'application/pdf'
  //};
 
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

return (
  <div>
    <form onSubmit={addDocu}>
      <input type="email" name="username" value={credit.username} onChange={handleChange} placeholder="Username"/>
      <input type="password" name="password" value={credit.password} onChange={handleChange} placeholder="Password"/>
      <button type="submit">Sign Up</button>
    </form>

    <h1>Fetching</h1>

    <form onSubmit={addDocument}>
      <input type="email" name="username" value={creditCheck.username} onChange={handleChanges} placeholder="Username"/>
      <input type="password" name="password" value={creditCheck.password} onChange={handleChanges} placeholder="Password"/>
      <button type="submit">Log in</button>
    </form>
    

    <h1>Uploading</h1>
    <form onSubmit={SingleUpload}>
    <input type="string" name="user" value={Post.password} onChange={handleChange3} placeholder="Username"/>
    <input type="string" name="title" value={Post.password} onChange={handleChange3} placeholder="title"/>
    <input type="string" name="description" value={Post.password} onChange={handleChange3} placeholder="Description"/>
    <input type="string" name="class" value={Post.c} onChange={handleChange3} placeholder="class"/>
    <input type="file" multiple name="AllFile" onChange={handleAllDoc}/>
    <button type= "submit">Single Upload</button>
    </form>
    <h1>Searching</h1>
    
    <Search />
  </div>
)


}
export default App;