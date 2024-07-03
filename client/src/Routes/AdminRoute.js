import React from 'react'
import { Routes, Route } from "react-router-dom";
import AdminHome from '../admin/AdminHome';
import Appointments from '../admin/components/global/Appointments';
import Dash from '../admin/components/global/Dash';
import LineChart from '../admin/components/global/Line';

function AdminRoute() {
  // return (
  //   const adminRoutes = [
  //     { path: '/admin', exact: true, component: AdminDashboard },
  //     { path: '/admin/settings', component: AdminSettings },
  //     { path: '/admin/users', component: AdminUsers },
  //     { path: '/admin/login', component: AdminLogin },
  //   ];
  // )
  return (
    <div>
      
      <Routes>
        <Route path="/admin" element={<AdminHome main={<Dash />} heading='DASHBOARD' />} />
        <Route path="/admin/appointments" element={<AdminHome main Line= {<Appointments />} heading="APPOINTMENTS" />} />
        <Route path="/admin/doctors" element={<AdminHome main = {<LineChart />} heading="DOCTORS" />} />
      </Routes>
    </div>
  );
}

export default AdminRoute;
