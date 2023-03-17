
import './App.css';
import { Route, Routes} from 'react-router-dom';
import Navbar from './Navbar';
import Home from "./pages/Home"
import Signup from './pages/Signup';
import Login from "./pages/Login"


function App() {
  let Component
  return (
  <>
    <Navbar />
    <div className='container'>
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/login' element = {<Login />} />
        <Route path='/signup' element = {<Signup/>} />
      </Routes>
      <footer>
        
      </footer>
    </div>
  </>
  )
}

export default App;
