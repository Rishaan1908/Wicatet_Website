import React, { useState, useEffect } from "react";
import Preloader from "./components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import ContactForm from "./components/ContactUs/ContactForm";
import Faq from "./components/Faq/Faq"
import Products from "./components/Products/Products";
import ProductDetail from "./components/Products/ProductDetail";
import Wishlist from "./components/Products/Wishlist";
import { WishlistProvider } from "./components/Products/WishlistContext";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
      <Router>
        <WishlistProvider>
          <Preloader load={load} />
          <div className="App" id={load ? "no-scroll" : "scroll"}>
            <Navbar />
            <ScrollToTop />
            <div className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product" element={<Products />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/about" element={<About />} />
                <Route 
                  path="/contact" 
                  element={
                    <div className="page-container">
                      <ContactForm />
                    </div>
                  } 
                />
                <Route 
                  path="/faq" 
                  element={
                    <div className="page-container">
                      <Faq />
                    </div>
                  } 
                />
                <Route 
                  path="/wishlist" 
                  element={
                    <div className="page-container">
                      <Wishlist />
                    </div>
                  } 
                />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </WishlistProvider>
      </Router>
  );
}

export default App;
