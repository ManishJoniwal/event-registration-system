"use client";
import Header from "@/components/Header";
import Registration from "@/components/Registeration";
import React, { useState } from "react";

export default function Home() {
  const [currentView, setCurrentView] = useState("registration");
  const [showPopup, setShowPopup] = useState(false);
  const [registrationId, setRegistrationId] = useState("");
  const [registrations, setRegistrations] = useState([]);

  return (
    <>
      <Header />
      <Registration
        setCurrentView={setCurrentView}
        setRegistrationId={setRegistrationId}
        setRegistrations={setRegistrations}
        setShowPopup={setShowPopup}
        registrations={registrations}
        showPopup={showPopup}
        registrationId={registrationId}
      />
    </>
  );
}
