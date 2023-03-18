import React,{useState} from 'react';
import {initializeApp} from 'firebase/app';
import { getFirestore, doc, setDoc, collection, addDoc, query, where, getDocs} from 'firebase/firestore/lite';
function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyDTiPbY_KmckJiL38F_WjqDrSAUzKHX0P0",
    authDomain: "loginpage-25dd0.firebaseapp.com",
    projectId: "loginpage-25dd0",
    storageBucket: "loginpage-25dd0.appspot.com",
    messagingSenderId: "511839579312",
    appId: "1:511839579312:web:bad88feec9b3aa317adf75",
    measurementId: "G-G9FCPWR4MP"
  };
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app);
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
  addDoc(collection(db, "credential"), {
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
  const q1= query(collection(db, "credential"), where("username", "==", creditCheck.username));
  const q2= query(collection(db, "credential"),  where("password", "==", creditCheck.password));
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
    
  </div>
)


}
export default App;