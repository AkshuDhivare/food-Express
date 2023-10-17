import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/inner_pages/Home";
import About_us from "./components/inner_pages/About_us";
import Contact_us from "./components/inner_pages/Contact_us";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Resturant_card from "./components/Resturant_card";
import Practice from "./components/inner_pages/practice/Practice";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Resturant_detail from "./components/inner_pages/resturant/Resturant_detail";
import Cart from "./components/inner_pages/Cart";
// ..
AOS.init();

function App() {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About_us />} />
        <Route path="/resturant" element={<Resturant_card />} />
        <Route path="/contact" element={<Contact_us />} />
        <Route path="/resturant/:id" element={<Resturant_detail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
      {/* <Practice /> */}
    </>
  );
}

export default App;
