import { BrowserRouter, Route, Routes } from "react-router-dom";
import Doctor from "../../Pages/Doctor";
import Dashboard from "../../Pages/Dashbaord";
import Patient from "../../Pages/Patient";
import Appointment from "../../Pages/Appointment";


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/patient" element={<Patient />}></Route>
      <Route path="/appointment" element={<Appointment />}></Route>
      <Route path="/doctor" element={<Doctor />}></Route>
     
    </Routes>
  );
}
export default AppRoutes;
