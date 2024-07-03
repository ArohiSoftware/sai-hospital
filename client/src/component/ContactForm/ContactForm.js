import React from 'react';

const ContactForm = () => {
  return (
    <div className="md:w-2/3 p-4">
      <h2 className="text-gray-600">Send Us A Message Anytime</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="formMessage" className="block text-gray-700">
            Your Message
          </label>
          <textarea
            id="formMessage"
            rows="3"
            placeholder="Please write your message here"
            className="w-full px-3 py-2 mt-1 border rounded"
          ></textarea>
        </div>
        <div className="mb-4 mt-3">
          <label htmlFor="formName" className="block text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="formName"
            placeholder="Please enter your name"
            className="w-full px-3 py-2 mt-1 border rounded"
          />
        </div>
        <div className="mb-4 mt-3">
          <label htmlFor="formEmail" className="block text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="formEmail"
            placeholder="Please enter your email address"
            className="w-full px-3 py-2 mt-1 border rounded"
          />
        </div>
        <div className="mb-4 mt-3">
          <label htmlFor="formPhone" className="block text-gray-700">
            Phone
          </label>
          <input
            type="text"
            id="formPhone"
            placeholder="Please enter your phone number"
            className="w-full px-3 py-2 mt-1 border rounded"
          />
        </div>
        <div className="mb-4 mt-3">
          <label htmlFor="formWebsite" className="block text-gray-700">
            Website
          </label>
          <input
            type="text"
            id="formWebsite"
            placeholder="Please enter your website"
            className="w-full px-3 py-2 mt-1 border rounded"
          />
        </div>
        <div className="mb-4 mt-3">
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox" />
            <span className="ml-2 text-gray-700">I agree with the terms.</span>
          </label>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded mt-3"
        >
          Send Message Now
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
