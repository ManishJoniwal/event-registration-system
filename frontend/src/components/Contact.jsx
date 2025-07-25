"use client";

import { useState, useEffect } from "react";
import Head from "next/head";

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const contactInfo = {
    company: "Jaipur Catering Dealers Samiti",
    email: "jaipurcateringdealerssamiti@gmail.com",
    instagram: "https://www.instagram.com/jaipur_catering_association",
    instagramHandle: "@jaipur_catering_association",
  };

  return (
    <>
      <Head>
        <title>Contact Us - Jaipur Catering Dealers Samiti</title>
        <meta
          name="description"
          content="Get in touch with Jaipur Catering Dealers Samiti for catering services and event partnerships"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-teal-400 to-emerald-600 font-sans mt-20">
        <div className="w-full py-8 px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1
              className={`text-5xl font-bold text-white mb-4 drop-shadow-lg transition-all duration-700 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Get In Touch
            </h1>
          </div>

          {/* Centered Contact Card */}
          <div className="flex justify-center mb-12">
            <div
              className={`w-full max-w-3xl bg-white/95 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 transition-all duration-700 ${
                isLoaded
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-12"
              }`}
            >
              <h2 className="text-3xl font-bold text-gray-700 mb-8 flex items-center gap-4">
                <div className="w-1 h-8 bg-gradient-to-b from-teal-500 to-emerald-600 rounded-full"></div>
                Contact Information
              </h2>

              <div className="space-y-6">
                {/* Company Name */}
                <div className="bg-teal-50 p-4 rounded-xl hover:bg-teal-100 transition-all duration-300 hover:-translate-y-1 flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-lg font-bold flex-shrink-0">
                    🏢
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-gray-600 mb-1">
                      Company Name
                    </div>
                    <div className="text-gray-800 font-medium">
                      {contactInfo.company}
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-teal-50 p-4 rounded-xl hover:bg-teal-100 transition-all duration-300 hover:-translate-y-1 flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-lg font-bold flex-shrink-0">
                    ✉️
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-gray-600 mb-1">
                      Email Address
                    </div>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-teal-600 hover:text-teal-700 transition-colors duration-300 font-medium break-all"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-teal-50 p-4 rounded-xl hover:bg-teal-100 transition-all duration-300 hover:-translate-y-1 flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-lg font-bold flex-shrink-0">
                    📱
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-gray-600 mb-1">
                      Social Media
                    </div>
                    <a
                      href={contactInfo.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-600 hover:text-teal-700 transition-colors duration-300 font-medium"
                    >
                      {contactInfo.instagramHandle}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
