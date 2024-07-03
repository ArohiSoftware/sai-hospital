// src/AppointmentsTable.js

import React from 'react';
import { appointments } from '../../dummy_data/appointments_data';


export default function Appointments(){
  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left bg-gray-200">ID</th>
              <th className="px-4 py-2 text-left bg-gray-200">Patient Name</th>
              <th className="px-4 py-2 text-left bg-gray-200">Doctor Name</th>
              <th className="px-4 py-2 text-left bg-gray-200">Date</th>
              <th className="px-4 py-2 text-left bg-gray-200">Time</th>
              <th className="px-4 py-2 text-left bg-gray-200">Status</th>
              <th className="px-4 py-2 text-left bg-gray-200">Reason</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.appointment_id} className="border-b">
                <td className="px-4 py-2">{appointment.appointment_id}</td>
                <td className="px-4 py-2">{appointment.patient_name}</td>
                <td className="px-4 py-2">{appointment.doctor_name}</td>
                <td className="px-4 py-2">{appointment.appointment_date}</td>
                <td className="px-4 py-2">{appointment.time}</td>
                <td className="px-4 py-2">
                  <span className={`px-2 py-1 rounded-full text-white ${appointment.status === "Completed" ? "bg-green-500" : appointment.status === "Scheduled" ? "bg-blue-500" : "bg-red-500"}`}>
                    {appointment.status}
                  </span>
                </td>
                <td className="px-4 py-2">{appointment.reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

