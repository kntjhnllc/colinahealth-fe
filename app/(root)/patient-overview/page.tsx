"use client";

import Appointment from "@/components/shared/Appointment";
import LaboratoryResults from "@/components/shared/LaboratoryResults";
import MedicalHistory from "@/components/shared/MedicalHistory";
import Medication from "@/components/shared/Medication";
import Notes from "@/components/shared/Notes";
import VitalSigns from "@/components/shared/VitalSigns";
import React, { useState } from "react";

const PatientOverview = () => {
  const [activeMedicalHistory, setActiveMedicalHistory] = useState(false);
  const [activeMedication, setActiveMedication] = useState(false);
  const [activeVitalSigns, setActiveVitalSigns] = useState(false);
  const [activeLabResults, setActiveLabResults] = useState(false);
  const [activeAppointment, setActiveAppointment] = useState(false);
  const [activeNotes, setActiveNotes] = useState(false);

  const handleMedicalHistoryClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    setActiveMedicalHistory(true);
    setActiveMedication(false);
    setActiveVitalSigns(false);
    setActiveLabResults(false);
    setActiveAppointment(false);
    setActiveNotes(false);
  };

  const handleMedicationClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    setActiveMedicalHistory(false);
    setActiveMedication(true);
    setActiveVitalSigns(false);
    setActiveLabResults(false);
    setActiveAppointment(false);
    setActiveNotes(false);
  };

  const handleVitalSignsClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    setActiveMedicalHistory(false);
    setActiveMedication(false);
    setActiveVitalSigns(true);
    setActiveLabResults(false);
    setActiveAppointment(false);
    setActiveNotes(false);
  };

  const handleLabResultsClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    setActiveMedicalHistory(false);
    setActiveMedication(false);
    setActiveVitalSigns(false);
    setActiveLabResults(true);
    setActiveAppointment(false);
    setActiveNotes(false);
  };

  const handleAppointmentClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    setActiveMedicalHistory(false);
    setActiveMedication(false);
    setActiveVitalSigns(false);
    setActiveLabResults(false);
    setActiveAppointment(true);
    setActiveNotes(false);
  };

  const handleNotesClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    setActiveMedicalHistory(false);
    setActiveMedication(false);
    setActiveVitalSigns(false);
    setActiveLabResults(false);
    setActiveAppointment(false);
    setActiveNotes(true);
  };

  return (
    <div className="flex flex-col pt-5 px-12">
      <div className="justify-start">
        <h1 className="font-semibold text-2xl">PatientOverview</h1>
        <p className="text-[#07143799] font-semibold">Medical History</p>
      </div>
      <div className="ring-1 w-full h-full ring-gray-300 p-5 rounded-md mt-2">
        <a className="mr-2" href="#" onClick={handleMedicalHistoryClick}>
          Medical History
        </a>
        <a className="mr-2" href="#" onClick={handleMedicationClick}>
          Medication
        </a>
        <a className="mr-2" href="#" onClick={handleVitalSignsClick}>
          Vital Signs
        </a>
        <a className="mr-2" href="#" onClick={handleLabResultsClick}>
          Lab Results
        </a>
        <a className="mr-2" href="#" onClick={handleAppointmentClick}>
          Appointment
        </a>
        <a className="mr-2" href="#" onClick={handleNotesClick}>
          Notes
        </a>
      </div>
      {/* Conditionally render the corresponding components */}
      {activeMedicalHistory && <MedicalHistory />}
      {activeMedication && <Medication />}
      {activeVitalSigns && <VitalSigns />}
      {activeLabResults && <LaboratoryResults />}
      {activeAppointment && <Appointment />}
      {activeNotes && <Notes />}

      {/* Add similar conditionals for other components */}
    </div>
  );
};

export default PatientOverview;
