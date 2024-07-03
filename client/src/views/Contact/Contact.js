import React from 'react';
import "./Contact.css"
import Header from '../Header';
import ContactInfo from '../../component/Contactinfo/Contactinfo';
import ContactForm from '../../component/ContactForm/ContactForm';

function Contact() {
  return (
    <div className="App">
      <Header />
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row my-5">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;
