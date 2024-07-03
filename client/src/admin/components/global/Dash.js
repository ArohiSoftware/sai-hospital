import React from 'react';
import { FaCalendarCheck, FaUserInjured, FaUserMd, FaProcedures, FaChild, FaVirus } from 'react-icons/fa';
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";


const Dash = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <Card
          title="Appointments"
          value="120"
          icon={<FaCalendarCheck className="text-white" />}
          bgColor="bg-blue-500"
        />
        <Card
          title="Patients"
          value="1,200"
          icon={<FaUserInjured className="text-white" />}
          bgColor="bg-green-500"
        />
        <Card
          title="Doctors"
          value="75"
          icon={<FaUserMd className="text-white" />}
          bgColor="bg-yellow-500"
        />
        <Card
          title="Current Cases"
          value="320"
          icon={<FaProcedures className="text-white" />}
          bgColor="bg-red-500"
        />
        <Card
          title="Child Cases"
          value="50"
          icon={<FaChild className="text-white" />}
          bgColor="bg-purple-500"
        />
        <Card
          title="Diseases"
          value="45"
          icon={<FaVirus className="text-white" />}
          bgColor="bg-teal-500"
        />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Overview</h2>
        <p className="text-gray-700 mb-4">
          This section can provide overview of the hospitals data.
          CHarts etc
          <BarChartOutlinedIcon />
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Overview</h3>
            <div className="h-40 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = ({ title, value, icon, bgColor }) => {
  return (
    <div className={`p-4 rounded-lg shadow-lg flex items-center ${bgColor}`}>
      <div className="p-3 rounded-full bg-opacity-25 mr-4">{icon}</div>
      <div>
        <p className="text-white text-lg">{title}</p>
        <p className="text-white text-2xl font-semibold">{value}</p>
      </div>
    </div>
  );
};

export default Dash;
