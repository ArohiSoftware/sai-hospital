import { Routes, Route } from "react-router-dom";
import Home from "../views/Home/Home";
import About from "../views/About/About";
import Doct from "../views/Doct/Doct";
import Doctor from "../views/Doctor/Doctor";
import Login from "../views/Login/Login";
import Signup from "../views/Signup/Signup";
import Opd from "../views/Opd/Opd";
import Services from "../views/Services/Services";


function NewRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Doct" element={<Doct/>} />
        <Route path="/Doctor" element={<Doctor />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/opd" element={<Opd />} />
        <Route path="/Services" element={<Services />} />
      </Routes>
    </div>
  );
}

export default NewRoutes;
