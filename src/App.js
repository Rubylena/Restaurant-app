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
      <BrowserRouter>
        <Routes>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
