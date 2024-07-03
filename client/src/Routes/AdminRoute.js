import React from 'react'
import { Routes, Route } from "react-router-dom";
import AdminHome from '../admin/AdminHome';

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
        <Route path="/admin" element={<AdminHome />} />
      </Routes>
    </div>
  );
}

export default AdminRoute
