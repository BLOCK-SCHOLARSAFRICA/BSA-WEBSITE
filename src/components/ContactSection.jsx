import React, { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, phone, email, message } = formData;
    const mailtoLink = `mailto:hello@block-scholars.africa?subject=Contact%20from%20${encodeURIComponent(
      `${firstName} ${lastName}`
    )}&body=${encodeURIComponent(
      `Name: ${firstName} ${lastName}\nPhone: ${phone}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <section
      id="contact-us"
      className="py-10 px-4 mt-20 sm:px-6 md:px-14 bg-[#FBFBFB] border border-[#720034] rounded-[20px] sm:w-full md:max-w-4xl mx-auto"
    >
      <h2 className="text-3xl text-[#720034] font-bold mb-6 text-center">
        Contact Us
      </h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
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
            className="mt-1 px-4 py-2 bg-[#f2f2f2] border rounded-[10px] w-full focus:outline-none focus:ring-[#720034] focus:border-[#720034]"
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
            className="mt-1 px-4 py-2 bg-[#f2f2f2] border rounded-[10px] w-full focus:outline-none focus:ring-[#720034] focus:border-[#720034]"
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
            className="mt-1 px-4 py-2 bg-[#f2f2f2] border rounded-[10px] w-full focus:outline-none focus:ring-[#720034] focus:border-[#720034]"
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
            className="mt-1 px-4 py-2 bg-[#f2f2f2] border rounded-[10px] w-full focus:outline-none focus:ring-[#720034] focus:border-[#720034]"
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
            className="mt-1 px-4 py-2 bg-[#f2f2f2] border rounded-[10px] w-full focus:outline-none focus:ring-[#720034] focus:border-[#720034]"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="md:col-span-2 flex justify-center">
          <button
            type="submit"
            className="px-6 py-3 bg-[#720034] rounded-lg text-white font-semibold hover:bg-[#5a0028] sm:w-full md:w-auto"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactSection;
