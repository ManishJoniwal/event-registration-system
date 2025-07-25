"use client";
import React, { useState } from "react";
import {
  User,
  Building,
  MapPin,
  Phone,
  Mail,
  Users,
  Check,
} from "lucide-react";
import { registerUser } from "../services/userServices";

const Registration = ({
  setCurrentView,
  setRegistrationId,
  setRegistrations,
  setShowPopup,
  registrations,
  showPopup,
  registrationId,
}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    firmName: "",
    city: "",
    phone: "",
    email: "",
    role: "visitor",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (
      !formData.fullName ||
      !formData.firmName ||
      !formData.city ||
      !formData.phone ||
      !formData.email
    ) {
      setError("Please fill in all fields");
      setLoading(false);
      return;
    }

    const userData = {
      fullname: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      companyName: formData.firmName,
      city: formData.city,
      role: formData.role,
    };

    try {
      const response = await registerUser(userData);
      console.log("registered user", response);

      const newRegId = `JCDS2025-${String(registrations.length + 1).padStart(
        4,
        "0"
      )}`;
      setRegistrationId(newRegId);
      const newRegistration = {
        ...formData,
        id: newRegId,
        date: new Date().toISOString().split("T")[0],
      };
      setRegistrations((prev) => [...prev, newRegistration]);
      setShowPopup(true);
    } catch (err) {
      setError(err.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  const SuccessPopup = () => (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center">
        <div className="bg-teal-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="text-teal-600 w-10 h-10" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Registration Successful!
        </h2>
        <p className="text-gray-600 mb-2">Your Registration ID:</p>
        <p className="text-2xl font-bold text-teal-600 mb-6">
          {registrationId || "N/A"}
        </p>
        <p className="text-sm text-gray-500 mb-6">
          A confirmation email has been sent to your registered email address.
        </p>
        <button
          onClick={() => setShowPopup(false)}
          className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-teal-700 hover:to-emerald-700 transition-all"
        >
          Close
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-400 via-emerald-400 to-green-400 flex items-center justify-center mt-19">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 transform hover:scale-105 transition-transform duration-300">
        <div className="text-center mb-8">
          <div className="bg-gradient-to-r from-teal-600 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="text-white w-8 h-8" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-teal-700 to-emerald-700 bg-clip-text text-transparent">
            JCDS Catering Expo
          </h1>
          <p className="text-gray-600 mt-2">Register for the event</p>
        </div>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
              required
            />
          </div>

          <div className="relative">
            <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              name="firmName"
              placeholder="Firm Name"
              value={formData.firmName}
              onChange={handleInputChange}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
              required
            />
          </div>

          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleInputChange}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
              required
            />
          </div>

          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
              required
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
              required
            />
          </div>

          <div className="relative">
            <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all appearance-none bg-white"
              required
            >
              <option value="visitor">Visitor</option>
              <option value="executive">Executive</option>
              <option value="organizer">Organiser</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-teal-600 to-emerald-600 text-white py-3 rounded-lg font-semibold hover:from-teal-700 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Registering..." : "Register Now"}
          </button>
        </form>
      </div>
      {showPopup && <SuccessPopup />}
    </div>
  );
};

export default Registration;
