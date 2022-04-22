import About from "./components/pages/AboutUs";
import "./App.css";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Navbar from "./components/layout/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./components/pages/Products";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Products />
      <Contact />
      <About />
    </div>
  );
}

export default App;
