import AboutUs from './About/AboutUs';
import './App.css';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import Navbar from './Home/Navbar';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Contact/>
      <AboutUs/>
      
    </div>
  );
}

export default App;
