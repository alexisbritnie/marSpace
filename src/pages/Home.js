import images from './images/classroom.png';
import Footer from '../Footer';
import Navbar from '../Navbar';

export default function Home(){
    return (
        <>
        <Navbar />
    <div className="bg">
        <div className="home-letter">
            <h1>Let us take you to the<br></br> 
                Biggest classroom ever!
            </h1>
            <p className="home-letter2">Join us and get access to shared notes from<br></br>
                students who had the same classes
            </p>
        </div>
    </div>
    </>
    );
}

