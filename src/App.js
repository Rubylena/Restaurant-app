import About from "./components/pages/AboutUs";
import "./App.css";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./components/pages/Products";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetails from "./components/pages/ProductDetails";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
