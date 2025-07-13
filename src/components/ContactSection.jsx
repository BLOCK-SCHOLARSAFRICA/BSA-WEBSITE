import React, { useState } from "react";
import emailjs from 'emailjs-com';

const SERVICE_ID = "service_pht0h0j";
const TEMPLATE_ID = "template_76eaqsm";
const PUBLIC_KEY = "E6a2t18abv5zZSkoN";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {

      console.log('Form Data:', formData);
      
      // Prepare template parameters
      const templateParams = {
        firstName: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        to_name: 'Block Scholars Team', // You can customize this
      };

      // Send email using EmailJS
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      console.log('Email sent successfully:', result.text);
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
      });

    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact-us"
      className="py-10 px-4 sm:px-6 md:px-14 bg-[#FBFBFB] border border-[#720034] rounded-[20px] sm:w-full md:max-w-4xl mx-auto"
    >
      <div className="mb-6">
        <h2 className="text-3xl text-[#720034] font-bold text-center">
          Contact Us
        </h2>
        <p className="text-center text-[#242424]">We're here for you - reach out anytime.</p>
      </div>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
          <p className="text-center">Thank you! Your message has been sent successfully. We'll get back to you soon.</p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
          <p className="text-center">Sorry, there was an error sending your message. Please try again or contact us directly.</p>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
      >
        <div className="flex flex-col">
          <label
            htmlFor="firstName"
            className="text-sm font-medium text-gray-700"
          >
            First Name *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Enter your first name"
            className="mt-1 px-4 py-2 bg-[#f2f2f2] border rounded-[10px] w-full focus:outline-none focus:ring-[#720034] focus:border-[#720034]"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="lastName"
            className="text-sm font-medium text-gray-700"
          >
            Last Name *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Enter your last name"
            className="mt-1 px-4 py-2 bg-[#f2f2f2] border rounded-[10px] w-full focus:outline-none focus:ring-[#720034] focus:border-[#720034]"
            value={formData.lastName}
            onChange={handleChange}
            required
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
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="mt-1 px-4 py-2 bg-[#f2f2f2] border rounded-[10px] w-full focus:outline-none focus:ring-[#720034] focus:border-[#720034]"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col md:col-span-2">
          <label
            htmlFor="message"
            className="text-sm font-medium text-gray-700"
          >
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Write your message here"
            className="mt-1 px-4 py-2 bg-[#f2f2f2] border rounded-[10px] w-full focus:outline-none focus:ring-[#720034] focus:border-[#720034]"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="md:col-span-2 flex justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-6 py-3 rounded-lg text-white font-semibold sm:w-full md:w-auto transition-colors ${
              isSubmitting 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-[#720034] hover:bg-[#5a0028]'
            }`}
          >
            {isSubmitting ? 'Sending...' : 'Submit'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactSection;