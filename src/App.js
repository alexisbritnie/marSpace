//import  "./firebase";
import './App.css';
import { Route, Routes} from 'react-router-dom';
import Navbar from './Navbar';
import Home from "./pages/Home";
import Signup from './pages/Signup';
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from './pages/Profile';




function App() {
 
  return (
  <>
    <Navbar />
    <div className='container'>
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/login' element = {<Login />} />
        <Route path='/signup' element = {<Signup/>} />

        {/*temp */}
        <Route path='/dashboard' element = {<Dashboard/>} />
        <Route path='/profile' element = {<Profile/>} />

      </Routes>
      
    </div>
  </>
  )
}

export default App;
