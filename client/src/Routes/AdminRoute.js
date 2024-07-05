import React from 'react'
import { Routes, Route } from "react-router-dom";
import AdminHome from '../admin/AdminHome';
import Appointments from '../admin/components/global/Appointments';
import Dash from '../admin/components/global/Dash';
import LineChart from '../admin/components/global/Line';
import Doctors from '../admin/components/global/Doctor';

function AdminRoute() {
 
  return (
    <div>
      
      <Routes>
        <Route path="/admin" element={<AdminHome main={<Dash />} heading='DASHBOARD' />} />
        <Route path="/admin/appointments" element={<AdminHome main = {<Appointments />} heading="APPOINTMENTS" />} />
        <Route path="/admin/doctors" element={<AdminHome main = {<Doctors />} heading="DOCTORS" />} />
        <Route path="/admin/line" element={<LineChart />} />
      </Routes>
    </div>
  );
}

export default AdminRoute;
