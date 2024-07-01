import React from 'react';

const cardClass = 'p-4 rounded-lg';
const textClass = 'text-lg font-bold';
const linkClass = 'text-primary mt-2 inline-block';

const FacilityCard = ({ title, description, linkText, linkUrl, bgColor, textColor }) => {
  return (
    <div className={`${cardClass} bg-${bgColor}`}>
      <h2 className={`${textClass} text-${textColor}`}>{title}</h2>
      <p className={`text-${textColor}`}>{description}</p>
      <a href={linkUrl} className={linkClass}>{linkText}</a>
    </div>
  );
};

const LocationCard = ({ title, address, linkText, linkUrl, bgColor, textColor }) => {
  return (
    <div className={`${cardClass} bg-${bgColor}`}>
      <h2 className={`${textClass} text-${textColor}`}>{title}</h2>
      <p className={`text-${textColor}`}>{address}</p>
      <a href={linkUrl} className={linkClass}>{linkText}</a>
    </div>
  );
};

const AppointmentCard = ({ title, description, buttonText, buttonBgColor, buttonTextColor }) => {
  return (
    <div className={`${cardClass} bg-${buttonBgColor}`}>
      <h2 className={`${textClass} text-${buttonTextColor}`}>{title}</h2>
      <p className={`text-${buttonTextColor}`}>{description}</p>
      <button className={`bg-${buttonBgColor} text-${buttonTextColor} px-4 py-2 mt-2 rounded-lg`}>{buttonText}</button>
      <div className="mt-4 flex items-center">
        <div className={`bg-${buttonBgColor} text-${buttonTextColor} p-2 rounded-full mr-2`}>
          <img aria-hidden="true" alt="phone-icon" src="https://openui.fly.dev/openui/24x24.svg?text=📞" />
        </div>
        <span className={`text-${buttonTextColor}`}>Book an appointment<br />+1 123 444 5678</span>
      </div>
    </div>
  );
};

const MedicalFacility = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-lg overflow-hidden">
          <img src="https://placehold.co/600x400" alt="Medical equipment and tools" className="w-full h-full object-cover" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FacilityCard
            title="Our Facilities"
            description="Nibh euismod massa ultrices sagittis, a tortor fermentum pulvinar interdum et ut."
            linkText="Learn More"
            linkUrl="#"
            bgColor="blue-100"
            textColor="blue-800"
          />
          <LocationCard
            title="Our Location"
            address="Midtown Manhattan<br />123 5th Ave, New York, NY 1021, US."
            linkText="Get Directions"
            linkUrl="#"
            bgColor="green-100"
            textColor="green-800"
          />
          <FacilityCard
            title="Our Main Service"
            description="Lorem mauris tincidunt lacus, id rhoncus erat facilisis purus sed consectetur in."
            linkText="Learn More"
            linkUrl="#"
            bgColor="purple-100"
            textColor="purple-800"
          />
          <AppointmentCard
            title="Make An Appointment"
            description="Urna aliquet feugiat odio enim ut pharetra pretium velit viverra elementum pulvinar viverra diam urna rhoncus eu, et, malesuada luctus neque mollis morbi placerat."
            buttonText="Start Now"
            buttonBgColor="red-500"
            buttonTextColor="white"
          />
        </div>
      </div>
    </div>
  );
};

export default MedicalFacility;
