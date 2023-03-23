
import './App.css';
import { Route, Routes} from 'react-router-dom';
import Navbar from './Navbar';
import Home from "./pages/Home";
import Signup from './pages/Signup';
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from './pages/Profile';
import {FaSearch} from "react-icons/fa";
import Footer from './Footer.js';



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
      </Routes>
      
      <footer>
        <Footer />
      </footer>
    </div>
  </>
  )
}

export default App;
