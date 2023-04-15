
import './App.css';
import { Route, Routes} from 'react-router-dom';
import { AuthProvider } from 'firebase/auth';

import Navbar from './Navbar';
import Home from "./pages/Home";
import Signup from './pages/Signup';
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from './pages/Profile';
import Footer from './Footer.js';
import Classroom from './pages/Classroom';
import Materials from './pages/Materials';
import Settings from './pages/Settings';
import Notes from './pages/Notes';
import Logout from './pages/Logout';
import Discussion from './pages/Forum/Discussion'
import Replies from './pages/Forum/Replies'
import SearchPage from './pages/SearchPage';



function App() {
  let Component
  return (
  <>
    
    
    <div className='container'>
      
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/login' element = {<Login/>} />
        <Route path='/signup' element = {<Signup/>} />

        {/*temp */}
        <Route path='/dashboard' element = {<Dashboard/>} />
        <Route path='/profile' element = {<Profile/>} />
        <Route path='/classroom' element = {<Classroom/>} />
        <Route path='/materials' element = {<Materials/>} />
        <Route path='/settings' element = {<Settings/>} />
        <Route path='/notes' element = {<Notes/>} />
        <Route path='/logout' element = {<Logout/>} />
        <Route path='/discussion' element = {<Discussion/>} />
        <Route path='/:id/replies' element = {<Replies />} />
        <Route path='/SearchPage' element = {<SearchPage/>} />
        
      </Routes>
    

      <footer>
        <Footer />
      </footer>

    </div>
  </>
  )
}

export default App;
