import { Routes, Route } from "react-router-dom";
import Home from "../views/Home/Home";
import Doct from "../views/Doct/Doct";
import Doctor from "../views/Doctor/Doctor";
import Login from "../views/Login/Login";
import Signup from "../views/Signup/Signup";
import Opd from "../views/Opd/Opd";
import Services from "../views/Services/Services";
import About from "../views/About/About"; // Adjusted the path
import Contact from "../views/Contact/Contact";

function NewRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/doct" element={<Doct />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> {/* Added missing route */}
        <Route path="/opd" element={<Opd />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
  );
}

export default NewRoutes;
