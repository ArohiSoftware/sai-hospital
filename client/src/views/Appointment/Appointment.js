

import React, { useState } from "react";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import {
  TextField,
  Button,
  IconButton,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import InfoIcon from "@mui/icons-material/Info";
import ListIcon from "@mui/icons-material/List";
import ServicesIcon from "@mui/icons-material/Build";
import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

function Appointment() {
  const [activeTab, setActiveTab] = useState("service");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    illness:"",
    address:"",
    age:"",
    bloodGroup:"",
    dateTime: dayjs(),
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleChange = () => {
    if (activeTab === "service") {
      setActiveTab("date");
    }
    if(activeTab==="date"){
      setActiveTab("details");
    }
    if(activeTab==="details"){
      setActiveTab("summary");
    }
  };

  return (
    <div className="bg-cream min-h-screen flex flex-col items-center">
      <section className="w-4/5 bg-cover bg-center my-8 border border-gray-300">
        <div
          className="w-5/5 mx-auto mb-8 bg-cover bg-center"
          style={{ backgroundImage: "url(./appointmentbg.jpg)" }}
        >
          <img
            src="./appointmentbg.jpg"
            alt="Appointment Background"
            className="w-full"
          />
        </div>

        <div className="flex justify-between items-center py-4 px-10 border border-gray-200">
          <h1 className="text-4xl font-medium">Book An Appointment</h1>
          <div className="flex items-center">
            <IconButton className="hover:bg-blue-700">
              <PhoneIcon className="text-green-500 hover:text-white hover:bg-blue-500 rounded-full" />
            </IconButton>
            <span className="text-lg ml-2">123-456-789</span>
          </div>
        </div>
        <div className="bg-white p-6 shadow-md text-center">
          <h2 className="text-blue-500 text-lg">Online Appointment Booking</h2>
          <h3 className="text-4xl font-bold mt-10">Please Fill In The Form</h3>
          <div className="mt-4 flex">
            <div className="w-1/4 border-r-2 pr-4 text-center">
              <ul className="space-y-4 text-center">
                <li>
                  <button
                    className={`flex items-center w-full text-left font-bold ${
                      activeTab === "service"
                        ? "text-green-500"
                        : "text-black hover:text-green-500"
                    }`}
                    onClick={() => setActiveTab("service")}
                  >
                    <ServicesIcon className="mr-2" />
                    Service
                  </button>
                </li>
                <li>
                  <button
                    className={`flex items-center w-full text-left ${
                      activeTab === "date"
                        ? "text-green-500"
                        : "text-black hover:text-green-500"
                    }`}
                  >
                    <CalendarTodayIcon className="mr-2" />
                    Date and Time
                  </button>
                </li>
                <li>
                  <button
                    className={`flex items-center w-full text-left ${
                      activeTab === "details"
                        ? "text-green-500"
                        : "text-black hover:text-green-500"
                    }`}
                  >
                    <InfoIcon className="mr-2" />
                    Basic Details
                  </button>
                </li>
                <li>
                  <button
                    className={`flex items-center w-full text-left ${
                      activeTab === "summary"
                        ? "text-green-500"
                        : "text-black hover:text-green-500"
                    }`}
                  >
                    <ListIcon className="mr-2" />
                    Summary
                  </button>
                </li>
              </ul>
            </div>
            <div className="w-3/4 pl-4">
              {activeTab === "service" && (
                <Card>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      Services Provided
                    </Typography>
                    <div className="mt-4">
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          className="form-checkbox text-green-500"
                        />
                        <span>General Checkup</span>
                      </label>
                      <br />
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          className="form-checkbox text-green-500"
                        />
                        <span>Dental Care</span>
                      </label>
                      <br />
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          className="form-checkbox text-green-500"
                        />
                        <span>Pediatric Care</span>
                      </label>
                      <br />
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          className="form-checkbox text-green-500"
                        />
                        <span>Cardiology</span>
                      </label>
                    </div>
                  </CardContent>
                  <Button
                    variant="contained"
                    color="success"
                    className="px-10"
                    onClick={handleChange}
                  >
                    Submit
                  </Button>
                </Card>
              )}
              {activeTab === "date" && (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <div className="mt-4">
                    <DateTimePicker
                      label="Select Date and Time"
                      value={formData.dateTime}
                      onChange={(newValue) =>
                        setFormData({ ...formData, dateTime: newValue })
                      }
                      renderInput={(params) => (
                        <TextField {...params} className="w-full mt-2" />
                      )}
                    />
                  </div>
                  <Button
                    variant="contained"
                    color="success"
                    className="px-10"
                    onClick={handleChange}
                  >
                    Submit
                  </Button>
                </LocalizationProvider>
              )}
              {activeTab === "details" && (
                <>
                  <div className="mt-4">
                    <TextField
                      label="Full Name"
                      variant="outlined"
                      className="w-full"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mt-4">
                    <TextField
                      label="Email"
                      variant="outlined"
                      className="w-full"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mt-4">
                    <TextField
                      label="Phone Number"
                      variant="outlined"
                      className="w-full"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mt-4">
                    <TextField
                      label="illness"
                      variant="outlined"
                      className="w-full"
                      name="illness"
                      value={formData.illness}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mt-4">
                    <TextField
                      label="Address"
                      variant="outlined"
                      className="w-full"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mt-4">
                    <TextField
                      label="Age"
                      variant="outlined"
                      className="w-full"
                      name="age"
                      value={formData.age}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mt-4">
                    <TextField
                      label="Blood Group"
                      variant="outlined"
                      className="w-full"
                      name="bloodGroup"
                      value={formData.bloodGroup}
                      onChange={handleInputChange}
                    />
                  </div>
                  <Button
                    variant="contained"
                    color="success"
                    className="px-10"
                    onClick={handleChange}
                  >
                    Submit
                  </Button>
                </>
              )}
              {activeTab === "summary" && (
                <Card>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      Summary
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <strong>Full Name:</strong> {formData.fullName}
                      <br />
                      <strong>Email:</strong> {formData.email}
                      <br />
                      <strong>Phone Number:</strong> {formData.phoneNumber}
                      <br />
                      <strong>Illness:</strong> {formData.illness}
                      <br />
                      <strong>Address:</strong> {formData.address}
                      <br />
                      <strong>Age:</strong> {formData.age}
                      <br />
                      <strong>Blood Group:</strong> {formData.bloodGroup}
                      <br />
                      <strong>Date and Time:</strong>{" "}
                      {formData.dateTime.toString()}
                    </Typography>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Appointment;
