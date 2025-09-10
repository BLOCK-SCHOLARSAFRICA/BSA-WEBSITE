import { useState } from 'react';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    communicationChannel: '',
    organization: '',
    socialMedia: '',
    tier: '',
    consentSupporter: '',
    reason: ''
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for the field being edited
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = 'Full name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.communicationChannel) newErrors.communicationChannel = 'Please select a communication channel';
    if (!formData.tier) newErrors.tier = 'Please select a tier';
    if (!formData.consentSupporter) newErrors.consentSupporter = 'Please select a consent option';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log('Form submitted:', formData);
    // Example: Send to API
    // fetch('/api/register', { method: 'POST', body: JSON.stringify(formData) })
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
            Full name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Enter your full name"
            className={`w-full px-3 py-2 border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            required
            aria-required="true"
          />
          {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
        </div>

        {/* Email Address */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email address<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            className={`w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            required
            aria-required="true"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Phone Number */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone number <span className="text-gray-500">(Optional but useful)</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Enter your phone number"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Preferred Communication Channel */}
        <div>
          <label htmlFor="communicationChannel" className="block text-sm font-medium text-gray-700 mb-2">
            Preferred Communication Channel<span className="text-red-500">*</span>
          </label>
          <select
            id="communicationChannel"
            name="communicationChannel"
            value={formData.communicationChannel}
            onChange={handleInputChange}
            className={`w-full px-3 py-2 border ${errors.communicationChannel ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white`}
            aria-required="true"
          >
            <option value="" disabled selected>--select--</option>
            <option value="email">Email</option>
            <option value="phone">Phone</option>
            <option value="sms">SMS</option>
            <option value="social">Social Media</option>
          </select>
          {errors.communicationChannel && <p className="text-red-500 text-sm mt-1">{errors.communicationChannel}</p>}
        </div>

        {/* Organization/Company */}
        <div>
          <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
            Organization/Company
          </label>
          <input
            type="text"
            id="organization"
            name="organization"
            value={formData.organization}
            onChange={handleInputChange}
            placeholder="Enter your organization (if applicable)"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Social Media Handle */}
        <div>
          <label htmlFor="socialMedia" className="block text-sm font-medium text-gray-700 mb-2">
            Social Media <span className="text-gray-600">Handle</span>
          </label>
          <input
            type="text"
            id="socialMedia"
            name="socialMedia"
            value={formData.socialMedia}
            onChange={handleInputChange}
            placeholder="Enter your social media handle (e.g., @username)"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Tier Selected */}
        <div>
          <label htmlFor="tier" className="block text-sm font-medium text-gray-700 mb-2">
            Tier selected<span className="text-red-500">*</span>
          </label>
          <select
            id="tier"
            name="tier"
            value={formData.tier}
            onChange={handleInputChange}
            className={`w-full px-3 py-2 border ${errors.tier ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white`}
            aria-required="true"
          >
            <option value="" disabled selected>--select--</option>
            <option value="basic">Basic</option>
            <option value="standard">Standard</option>
            <option value="premium">Premium</option>
            <option value="enterprise">Enterprise</option>
          </select>
          {errors.tier && <p className="text-red-500 text-sm mt-1">{errors.tier}</p>}
        </div>

        {/* Consent to be listed as a supporter */}
        <div>
          <label htmlFor="consentSupporter" className="block text-sm font-medium text-gray-700 mb-2">
            Consent to be listed as a supporter<span className="text-red-500">*</span>
          </label>
          <select
            id="consentSupporter"
            name="consentSupporter"
            value={formData.consentSupporter}
            onChange={handleInputChange}
            className={`w-full px-3 py-2 border ${errors.consentSupporter ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white`}
            aria-required="true"
          >
            <option value="" disabled selected>--select--</option>
            <option value="yes">Yes, I consent</option>
            <option value="no">No, keep me anonymous</option>
          </select>
          {errors.consentSupporter && <p className="text-red-500 text-sm mt-1">{errors.consentSupporter}</p>}
        </div>

        {/* Reason for joining */}
        <div>
          <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-2">
            Reason for joining
          </label>
          <textarea
            id="reason"
            name="reason"
            value={formData.reason}
            onChange={handleInputChange}
            rows="4"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-y"
            placeholder="Tell us why you'd like to join..."
          />
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-red-800 hover:bg-red-900 text-white font-medium py-3 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}