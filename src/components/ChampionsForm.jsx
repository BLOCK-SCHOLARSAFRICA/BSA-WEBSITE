import { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';

const ChampionsForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    communicationChannel: '',
    organization: '',
    socialMedia: '',
    tier: '',
    consentListed: '',
    reason: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Thank you for joining BLOCKChampions! We will be in touch soon.');
    onClose();
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      communicationChannel: '',
      organization: '',
      socialMedia: '',
      tier: '',
      consentListed: '',
      reason: ''
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Join BLOCKChampions</h2>
            <p className="text-gray-600 mt-1">Become part of Africa's tech revolution</p>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-6 text-gray-900">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Full name<span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Enter your fullname"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email address<span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Phone number <span className="text-gray-500 font-normal">(Optional but useful)</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Enter your phone number"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
            />
          </div>

          {/* Preferred Communication Channel */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Preferred Communication Channel
            </label>
            <div className="relative">
              <select
                name="communicationChannel"
                value={formData.communicationChannel}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 appearance-none bg-white pr-10"
              >
                <option value="">--select--</option>
                <option value="email">Email</option>
                <option value="phone">Phone</option>
                <option value="sms">SMS</option>
                <option value="social">Social Media</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>
          </div>

          {/* Organization/Company */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Organization/Company
            </label>
            <input
              type="text"
              name="organization"
              value={formData.organization}
              onChange={handleInputChange}
              placeholder="Enter your organization (if applicable)"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
            />
          </div>

          {/* Social Media Handle */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Social Media Handle
            </label>
            <input
              type="text"
              name="socialMedia"
              value={formData.socialMedia}
              onChange={handleInputChange}
              placeholder="Enter your social media handle (if applicable)"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
            />
          </div>

          {/* Tier Selected */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Preferred Champion Tier
            </label>
            <div className="relative">
              <select
                name="tier"
                value={formData.tier}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 appearance-none bg-white pr-10"
              >
                <option value="">--select--</option>
                <option value="starter">Starter Champion - $5/month</option>
                <option value="core">Core Champion - $15/month</option>
                <option value="elite">Elite Champion - $25/month</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>
          </div>

          {/* Consent to be listed as a supporter */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Consent to be listed as a supporter
            </label>
            <div className="relative">
              <select
                name="consentListed"
                value={formData.consentListed}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 appearance-none bg-white pr-10"
              >
                <option value="">--select--</option>
                <option value="yes">Yes, I consent to be listed publicly</option>
                <option value="no">No, keep my support private</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>
          </div>

          {/* Reason for joining */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Why do you want to become a BLOCKChampion?
            </label>
            <textarea
              name="reason"
              value={formData.reason}
              onChange={handleInputChange}
              placeholder="Tell us your motivation for supporting African youth in blockchain education..."
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 placeholder-gray-400 resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4 pb-2">
            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white font-semibold py-3 px-6 rounded-lg hover:from-amber-700 hover:to-amber-800 focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              Join BLOCKChampions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChampionsForm;