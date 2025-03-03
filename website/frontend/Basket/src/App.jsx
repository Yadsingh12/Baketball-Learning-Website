import QuizPage from './Pages/QuizPage/QuizPage'
import GoToTop from './Components/GoToTop';
import DragAndDrop from './Pages/DragAndDrop/DragAndDrop';
import { BrowserRouter } from 'react-router-dom';
import ReactRouter from './ReactRouter/ReactRouter';
import Navbar from './Components/Navbar';

// CSS files
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import './CSSs/Navbar.css'
import './CSSs/HeroSection.css'
import ChatBot from './Components/ChatBot';
function App() {

  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      {/* <div style={{height:"90px",backgroundColor:"black"}}></div> */}
      <ReactRouter/>
      </BrowserRouter>
      {/* <GoToTop/> */}
      <ChatBot/>
      
    </div>
  )
}

export default App
