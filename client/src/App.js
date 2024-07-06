import React from "react";
import "./App.css";
import MainService from "opd/MainService";
import Facilities from "opd/Facilities";
import Location from "opd/Location";
import Appointment from "opd/Appointment";
import NewRoutes from "./Routes/NewRote";
import AdminRoute from "./Routes/AdminRoute";

// import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <div className="app">
        <div className="left-section">
          <img
            src="./assets/images/opd.jpg"
            alt="Medical"
            className="main-image"
          />
        </div>
        <div className="right-section">
          <div className="top-right">
            <Facilities />
            <Location />
          </div>
          <MainService />
          <Appointment />
        </div>
      </div>

      <NewRoutes />
      <AdminRoute />
    </div>
  );
}

export default App;
