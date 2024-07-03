// src/patient/Patient.js
import React, { useState } from "react";
import "./Patient.css";

const Patient = () => {
  const [patientDetails, setPatientDetails] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    adminAddress: "",
    patientAddress: "",
    contact: "",
    symptoms: "",
    department: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientDetails({
      ...patientDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(patientDetails);
  };

  return (
    <form className="patient" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={patientDetails.firstName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={patientDetails.lastName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={patientDetails.username}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={patientDetails.password}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Admin Address:</label>
        <input
          type="text"
          name="adminAddress"
          value={patientDetails.adminAddress}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Patient Address:</label>
        <input
          type="text"
          name="patientAddress"
          value={patientDetails.patientAddress}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Contact:</label>
        <input
          type="text"
          name="contact"
          value={patientDetails.contact}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Symptoms:</label>
        <input
          type="text"
          name="symptoms"
          value={patientDetails.symptoms}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Department:</label>
        <select
          name="department"
          value={patientDetails.department}
          onChange={handleChange}
          required
        >
          <option value="">Select Department</option>
          <option value="Cardiology">Cardiology</option>
          <option value="Orthopedics">Orthopedics</option>
          <option value="Gynecology">Gynecology</option>
          <option value="Neurology">Neurology</option>
          <option value="Pediatrics">Pediatrics</option>
        </select>
      </div>
      <button type="submit" className="admit-button">
        Admit
      </button>
    </form>
  );
};

export default Patient;
