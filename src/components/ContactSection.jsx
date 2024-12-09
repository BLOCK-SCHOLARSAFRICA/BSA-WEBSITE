import React, { useState } from "react";
import axios from "axios";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const contactData = {
      email: formData.email,
      name: `${formData.firstName} ${formData.lastName}`,
      phone: formData.phone,
      message: formData.message,
    };

    try {
      // Send POST request to the new API endpoint
      const response = await axios.post(
        "https://api-bsa.onrender.com/api/contact-us",
        contactData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
         console.log("Server Response:", response.data);
        setStatusMessage("Your message has been sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      console.error(JSON.stringify(error, null, 2));
      setStatusMessage("Failed to send the message. Please try again later.");
    }
  };

  return (
    <section
      id="contact-us"
      className="py-20 px-6 mx-10 my-20 md:px-14 bg-[#FBFBFB] border border-[#720034] rounded-[40px]"
    >
      <h2 className="text-3xl text-[#720034] font-bold mb-6">Contact Us</h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div className="flex flex-col">
          <label
            htmlFor="firstName"
            className="text-sm font-medium text-gray-700"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Enter your first name"
            className="mt-1 px-4 py-2 bg-[#f2f2f2] border rounded-[10px] focus:outline-none focus:ring-[#720034] focus:border-[#720034]"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="lastName"
            className="text-sm font-medium text-gray-700"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Enter your last name"
            className="mt-1 px-4 py-2 bg-[#f2f2f2] border rounded-[10px] focus:outline-none focus:ring-[#720034] focus:border-[#720034]"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="phone" className="text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            className="mt-1 px-4 py-2 bg-[#f2f2f2] border rounded-[10px] focus:outline-none focus:ring-[#720034] focus:border-[#720034]"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="mt-1 px-4 py-2 bg-[#f2f2f2] border rounded-[10px] focus:outline-none focus:ring-[#720034] focus:border-[#720034]"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col md:col-span-2">
          <label
            htmlFor="message"
            className="text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Write your message here"
            className="mt-1 px-4 py-2 bg-[#f2f2f2] border rounded-[10px] focus:outline-none focus:ring-[#720034] focus:border-[#720034]"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="md:col-span-2">
          <button
            type="submit"
            className="px-6 py-3 bg-[#720034] rounded-lg text-white font-semibold hover:bg-[#5a0028]"
          >
            Submit
          </button>
        </div>
      </form>
      {statusMessage && (
        <p className="mt-4 text-center text-lg font-semibold text-[#720034]">
          {statusMessage}
        </p>
      )}
    </section>
  );
};

export default ContactSection;
