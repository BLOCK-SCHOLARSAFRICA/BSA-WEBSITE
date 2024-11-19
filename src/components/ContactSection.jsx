import React from "react";

const ContactSection = () => {
  return (
    <section id="contact-us" className="py-10 px-6 md:px-14 bg-[#FBFBFB]">
      <h2 className="text-3xl text-[#720034] font-bold mb-6">Contact Us</h2>
      <form
        action="#"
        method="POST"
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* First Name */}
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
          />
        </div>

        {/* Last Name */}
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
          />
        </div>

        {/* Phone Number */}
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
          />
        </div>

        {/* Email */}
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
          />
        </div>

        {/* Message */}
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
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2">
          <button
            type="submit"
            className="px-6 py-3 bg-[#720034] rounded-lg text-white font-semibold hover:bg-[#5a0028]"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactSection;
