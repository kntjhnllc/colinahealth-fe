"use client";

import Appointment from "@/components/shared/Appointment";
import LaboratoryResults from "@/components/shared/LaboratoryResults";
import MedicalHistory from "@/components/shared/MedicalHistory";
import Medication from "@/components/shared/Medication";
import Notes from "@/components/shared/Notes";
import VitalSigns from "@/components/shared/VitalSigns";
import Image from "next/image";
import React, { useState } from "react";

const PatientOverview = () => {
  const [activeMedicalHistory, setActiveMedicalHistory] = useState(true);
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
        <p className="text-[#07143799] font-semibold">
          {activeMedicalHistory && "Medical History"}
          {activeMedication && "Medication"}
          {activeVitalSigns && "Vital Signs"}
          {activeLabResults && "Lab Results"}
          {activeAppointment && "Appointment"}
          {activeNotes && "Notes"}
        </p>
      </div>
      <div className="ring-1 w-full h-full shadow-md ring-gray-300 px-5 pt-5 pb-[14px] rounded-md mt-2">
        <div className="flex">
          <div className="">
            <Image
              src="/icons/profile.svg"
              className=" md:w-[200px] md:h-[200px]"
              alt="profile"
              width="252"
              height="252"
            />
          </div>
          <div className="ml-4 mt-1 flex w-full">
            <div className="w-1/4">
              <h1 className="text-2xl font-semibold">Drake Ramos</h1>
              <div className="flex flex-row w-full mt-3 ">
                <img
                  src="/icons/profile-circle.svg"
                  alt="profile-circle"
                  width={20}
                />
                <div className="justify-between flex w-full">
                  <h1 className="text-sm text-[#007C85] font-semibold ml-1">
                    Patient
                  </h1>
                  <h1 className="text-sm text-[#07143799] font-semibold">
                    Age: 34
                  </h1>
                </div>
              </div>
              <div className="text-sm flex  mt-5">
                <img
                  src="/icons/statusCodeIcon.svg"
                  alt="statusCode"
                  width={20}
                />
                <h1 className="text-[#07143799] font-semibold ml-1">
                  Code Status: DNIR
                </h1>
              </div>
              <div className="text-sm flex  mt-5">
                <img src="/icons/location.svg" alt="statusCode" width={20} />
                <h1 className="text-[#07143799] font-semibold ml-1">
                  City: California
                </h1>
              </div>
            </div>
            <div className="w-1/4 mt-[22px] ml-10 ">
              <div className="text-sm flex  mt-5">
                <h1 className="text-[#07143799] font-semibold mr-1">
                  ID: 234148213124230913
                </h1>
                <img
                  className="cursor-pointer"
                  src="/icons/copyIcon.svg"
                  alt="statusCode"
                  width={15}
                />
              </div>
              <div className="text-sm flex  mt-5">
                <img
                  src="/icons/allergyIcon.svg"
                  alt="allergyIcon"
                  width={20}
                />
                <h1 className="text-[#07143799] font-semibold ml-1">
                  Allergy: None
                </h1>
              </div>
              <div className="text-sm flex  mt-5">
                <img src="/icons/stateIcon.svg" alt="stateIcon" width={20} />
                <h1 className="text-[#07143799] font-semibold ml-1">
                  State: Stanford
                </h1>
              </div>
            </div>
            <div className="w-1/4 mt-[62px] ml-10 ">
              <div className="text-sm flex  mt-5">
                <img
                  src="/icons/calendarIcon.svg"
                  alt="allergyIcon"
                  width={20}
                />
                <h1 className="text-[#07143799] font-semibold ml-1">
                  May 29, 1980
                </h1>
              </div>
              <div className="text-sm flex  mt-5">
                <img src="/icons/zipIcon.svg" alt="stateIcon" width={20} />
                <h1 className="text-[#07143799] font-semibold ml-1">
                  ZIP: 9000
                </h1>
              </div>
            </div>
            <div className="w-1/4 mt-[62px] ml-10 ">
              <div className="text-sm flex  mt-5">
                <img
                  src="/icons/phoneNumberIcon.svg"
                  alt="allergyIcon"
                  width={20}
                />
                <h1 className="text-[#07143799] font-semibold ml-1">
                  (555) 123456
                </h1>
              </div>
              <div className="text-sm flex  mt-5">
                <img src="/icons/countryIcon.svg" alt="stateIcon" width={20} />
                <h1 className="text-[#07143799] font-semibold ml-1">
                  Country: Los Angeles
                </h1>
              </div>
            </div>
            <div className="w-1/4 ml-10 flex justify-end">
              <a
                href=""
                className="underline text-sm font-semibold text-[#07143799] text-right"
              >
                See more details
              </a>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <a
            className={`mr-5  decoration-[3px] ${
              activeMedicalHistory
                ? "underline underline-offset-[15px] text-[#007C85] font-bold"
                : "text-[#07143799] font-semibold"
            }  mb-2`}
            href="#"
            onClick={handleMedicalHistoryClick}
          >
            Medical History
          </a>
          <a
            className={`mr-5  decoration-[3px] ${
              activeMedication
                ? "underline underline-offset-[15px] text-[#007C85] font-bold"
                : "text-[#07143799] font-semibold"
            }  mb-2`}
            href="#"
            onClick={handleMedicationClick}
          >
            Medication
          </a>
          <a
            className={`mr-5  decoration-[3px] ${
              activeVitalSigns
                ? "underline underline-offset-[15px] text-[#007C85] font-bold"
                : "text-[#07143799] font-semibold"
            }  mb-2`}
            href="#"
            onClick={handleVitalSignsClick}
          >
            Vital Signs
          </a>
          <a
            className={`mr-5  decoration-[3px] ${
              activeLabResults
                ? "underline underline-offset-[15px] text-[#007C85] font-bold"
                : "text-[#07143799] font-semibold"
            }  mb-2`}
            href="#"
            onClick={handleLabResultsClick}
          >
            Lab Results
          </a>
          <a
            className={`mr-5  decoration-[3px] ${
              activeAppointment
                ? "underline underline-offset-[15px] text-[#007C85] font-bold"
                : "text-[#07143799] font-semibold"
            }  mb-2`}
            href="#"
            onClick={handleAppointmentClick}
          >
            Appointment
          </a>
          <a
            className={`mr-5  decoration-[3px] ${
              activeNotes
                ? "underline underline-offset-[15px] text-[#007C85] font-bold"
                : "text-[#07143799] font-semibold"
            }  mb-2`}
            href="#"
            onClick={handleNotesClick}
          >
            Notes
          </a>
        </div>
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
