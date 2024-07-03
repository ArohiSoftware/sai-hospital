// src/appointment/AppointmentForm.js
import React, { useState } from "react";
import "./Appointment.css";

const Appointment = () => {
  const [appointmentDetails, setAppointmentDetails] = useState({
    description: "",
    doctorName: "",
    department: "",
    patientName: "",
    symptoms: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointmentDetails({
      ...appointmentDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(appointmentDetails);
  };

  return (
    <form className="appointment-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Description:</label>
        <textarea
          name="description"
          value={appointmentDetails.description}
          onChange={handleChange}
          rows="4"
          required
        ></textarea>
      </div>
      <div className="form-group">
        <label>Doctor Name:</label>
        <input
          type="text"
          name="doctorName"
          value={appointmentDetails.doctorName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Department:</label>
        <select
          name="department"
          value={appointmentDetails.department}
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
      <div className="form-group">
        <label>Patient Name:</label>
        <input
          type="text"
          name="patientName"
          value={appointmentDetails.patientName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Symptoms:</label>
        <input
          type="text"
          name="symptoms"
          value={appointmentDetails.symptoms}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="book-button">
        Book
      </button>
    </form>
  );
};

export default Appointment
