"use client";

import Appointment from "@/components/shared/Appointment";
import LaboratoryResults from "@/components/shared/LaboratoryResults";
import MedicalHistory from "@/components/shared/MedicalHistory";
import Medication from "@/components/shared/Medication";
import Notes from "@/components/shared/Notes";
import PatientDetails from "@/components/shared/PatientDetails";
import VitalSigns from "@/components/shared/VitalSigns";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { getPatientById } from "@/lib/actions/patient.actions";
import { useParams } from "react-router-dom";
import { SearchParamProps } from "@/types";

const patientId = 1; // Replace with the desired patientId

const frameworks = [
  {
    value: "medical history",
    label: "Medical History",
  },
  {
    value: "medication",
    label: "Medication",
  },
  {
    value: "vital signs",
    label: "Vital Signs",
  },
  {
    value: "lab results",
    label: "Lab Results",
  },
  {
    value: "appointment",
    label: "Appointment",
  },
  {
    value: "notes",
    label: "Notes",
  },
];
import { useMemo } from "react";
import Loading from "./loading";

const PatientOverview: React.FC = () => {
  const patientId = 1; // Replace with the desired patientId
  const [patient, setPatient] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [activeMedicalHistory, setActiveMedicalHistory] = useState(false);
  const [activeMedication, setActiveMedication] = useState(false);
  const [activeVitalSigns, setActiveVitalSigns] = useState(false);
  const [activeLabResults, setActiveLabResults] = useState(false);
  const [activeAppointment, setActiveAppointment] = useState(false);
  const [activeNotes, setActiveNotes] = useState(false);
  const [activePatientDetails, setActivePatientDetails] = useState(false);

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const [selectedFramework, setSelectedFramework] = useState<string | null>(
    null
  );

  useEffect(() => {
    if (patient.length == 0) {
      const fetchPatient = async () => {
        try {
          const fetchedPatient = await getPatientById(patientId);
          setPatient(fetchedPatient);
        } catch (error) {
          console.error("Error fetching patient:", error);
        } finally {
          setLoading(false); // Set loading to false after fetching
          setActiveMedicalHistory(true);
        }
      };

      fetchPatient();
    }
  }, [patientId]);

  console.log(patient);

  // Render loading indicator if loading is true
  if (loading) {
    return <Loading />;
  }

  console.log(patient);

  const handleFrameworkSelect = (value: string) => {
    setSelectedFramework(value);
    switch (value) {
      case "medical history":
        setActiveMedicalHistory(true);
        setActiveMedication(false);
        setActiveVitalSigns(false);
        setActiveLabResults(false);
        setActiveAppointment(false);
        setActiveNotes(false);
        setActivePatientDetails(false);
        break;
      case "medication":
        setActiveMedicalHistory(false);
        setActiveMedication(true);
        setActiveVitalSigns(false);
        setActiveLabResults(false);
        setActiveAppointment(false);
        setActiveNotes(false);
        setActivePatientDetails(false);
        break;
      case "vital signs":
        setActiveMedicalHistory(false);
        setActiveMedication(false);
        setActiveVitalSigns(true);
        setActiveLabResults(false);
        setActiveAppointment(false);
        setActiveNotes(false);
        setActivePatientDetails(false);
        break;
      case "lab results":
        setActiveMedicalHistory(false);
        setActiveMedication(false);
        setActiveVitalSigns(false);
        setActiveLabResults(true);
        setActiveAppointment(false);
        setActiveNotes(false);
        setActivePatientDetails(false);
        break;
      case "appointment":
        setActiveMedicalHistory(false);
        setActiveMedication(false);
        setActiveVitalSigns(false);
        setActiveLabResults(false);
        setActiveAppointment(true);
        setActiveNotes(false);
        setActivePatientDetails(false);
        break;
      case "notes":
        setActiveMedicalHistory(false);
        setActiveMedication(false);
        setActiveVitalSigns(false);
        setActiveLabResults(false);
        setActiveAppointment(false);
        setActiveNotes(true);
        setActivePatientDetails(false);
        break;
      default:
        break;
    }
  };

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
    setActivePatientDetails(false);
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
    setActivePatientDetails(false);
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
    setActivePatientDetails(false);
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
    setActivePatientDetails(false);
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
    setActivePatientDetails(false);
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
    setActivePatientDetails(false);
  };

  const handleSeeMoreDetailsClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    setActivePatientDetails(true);
    setActiveMedicalHistory(false);
    setActiveMedication(false);
    setActiveVitalSigns(false);
    setActiveLabResults(false);
    setActiveAppointment(false);
    setActiveNotes(false);
  };

  const formattedDateOfBirth = patient?.dateOfBirth
    ? new Date(patient.dateOfBirth).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : "";

  return (
    <div className="flex flex-col pt-5 px-24 ">
      <div className="justify-start">
        <h1 className="font-semibold text-2xl">PatientOverview</h1>
        <p className="text-[#07143799] font-semibold">
          {activePatientDetails && "View - Details"}
          {activeMedicalHistory && "Medical History"}
          {activeMedication && "Medication"}
          {activeVitalSigns && "Vital Signs"}
          {activeLabResults && "Lab Results"}
          {activeAppointment && "Appointment"}
          {activeNotes && "Notes"}
        </p>
      </div>
      <div className="ring-1 relative w-full h-full shadow-lg ring-gray-300 px-5 pt-5 pb-[14px] rounded-lg mt-2">
        <div className="flex lg:flex-row flex-col ">
          <div className="lg:-mt-3 flex justify-center">
            <Image
              src="/icons/profile.svg"
              className="lg:w-[200px] lg:h-[200px] block mx-auto min-w-[200px]"
              alt="profile"
              width="252"
              height="252"
            />
          </div>

          <div className="ml-4 mt-1 flex lg:flex-row flex-col w-full">
            <div className="lg:w-1/4 w-full">
              <h1 className="text-2xl font-semibold truncate">
                {patient?.firstName} {patient?.lastName}
              </h1>
              <div className="text-sm flex  mt-5 lg:hidden">
                <h1 className="text-[#07143799] font-semibold mr-1 truncate">
                  ID: {patient?.patientId}
                </h1>
                <img
                  className="cursor-pointer"
                  src="/icons/copyIcon.svg"
                  alt="statusCode"
                  width={15}
                />
              </div>
              <div className="flex flex-row  w-full mt-3 truncate">
                <img
                  src="/icons/profile-circle.svg"
                  alt="profile-circle"
                  width={20}
                />
                <div className=" flex w-full justify-between pr-10 lg:pr-5">
                  <h1 className="text-sm text-[#007C85] font-semibold ml-1">
                    Patient
                  </h1>
                  <h1 className="text-sm text-[#07143799] font-semibold truncate">
                    Age: {patient?.age}
                  </h1>
                </div>
              </div>
              <div className="text-sm flex  mt-5 truncate">
                <img
                  src="/icons/statusCodeIcon.svg"
                  alt="statusCode"
                  width={20}
                />
                <h1 className="text-[#07143799] font-semibold ml-1 truncate">
                  Code Status: {patient?.codeStatus}
                </h1>
              </div>
              <div className="text-sm flex  mt-5">
                <img src="/icons/location.svg" alt="statusCode" width={20} />
                <h1 className="text-[#07143799] font-semibold ml-1 truncate">
                  City: {patient?.city}
                </h1>
              </div>
            </div>
            <div className="lg:w-1/4 lg:mt-[22px] lg:ml-10">
              <div className="text-sm   mt-5 lg:flex   hidden">
                <h1 className="text-[#07143799] font-semibold mr-1 truncate">
                  ID: {patient?.patientId}
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
                <h1 className="text-[#07143799] font-semibold ml-1 truncate">
                  Allergy: {patient?.allergies}
                </h1>
              </div>
              <div className="text-sm flex  mt-5">
                <img src="/icons/stateIcon.svg" alt="stateIcon" width={20} />
                <h1 className="text-[#07143799] font-semibold ml-1 truncate">
                  State: {patient?.state}
                </h1>
              </div>
            </div>
            <div className="lg:w-1/4 lg:mt-[62px] lg:ml-10 ">
              <div className="text-sm flex  mt-5">
                <img
                  src="/icons/calendarIcon.svg"
                  alt="allergyIcon"
                  width={20}
                />
                <h1 className="text-[#07143799] font-semibold ml-1 truncate">
                  {formattedDateOfBirth}
                </h1>
              </div>
              <div className="text-sm flex  mt-5">
                <img src="/icons/zipIcon.svg" alt="stateIcon" width={20} />
                <h1 className="text-[#07143799] font-semibold ml-1 truncate">
                  ZIP: {patient?.zip}
                </h1>
              </div>
            </div>
            <div className="lg:w-1/4 lg:mt-[62px] lg:ml-10 ">
              <div className="text-sm flex  mt-5">
                <img
                  src="/icons/phoneNumberIcon.svg"
                  alt="allergyIcon"
                  width={20}
                />
                <h1 className="text-[#07143799] font-semibold ml-1 truncate">
                  {patient?.phoneNo}
                </h1>
              </div>
              <div className="text-sm flex  mt-5">
                <img src="/icons/countryIcon.svg" alt="stateIcon" width={20} />
                <h1 className="text-[#07143799] font-semibold ml-1 truncate">
                  Country: {patient?.country}
                </h1>
              </div>
            </div>
            <div className="lg:w-1/4 pr-5 pt-2 lg:pr-0 lg:pt-0 flex justify-end relative truncate">
              <a
                href=""
                className={`underline text-sm  ${
                  activePatientDetails
                    ? "text-[#007C85] font-bold"
                    : "text-[#07143799] font-semibold"
                } text-right truncate`}
                onClick={handleSeeMoreDetailsClick}
              >
                See more details
              </a>
            </div>
          </div>
        </div>
        <div className="mt-5 lg:block hidden ">
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
        <div className="block lg:hidden pt-2 w-full">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-full justify-between"
              >
                {selectedFramework
                  ? frameworks.find(
                      (framework) => framework.value === selectedFramework
                    )?.label
                  : "Medical History"}
                <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
              <Command>
                <CommandGroup>
                  {frameworks.map((framework) => (
                    <CommandItem
                      key={framework.value}
                      value={framework.value}
                      onSelect={(currentValue) => {
                        handleFrameworkSelect(currentValue);
                        setOpen(false);
                      }}
                    >
                      {framework.label}
                      <CheckIcon
                        className={cn(
                          "ml-auto h-4 w-4",
                          selectedFramework === framework.value
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {activePatientDetails && <PatientDetails />}
      {activeMedicalHistory && <MedicalHistory />}
      {activeMedication && <Medication />}
      {activeVitalSigns && <VitalSigns />}
      {activeLabResults && <LaboratoryResults />}
      {activeAppointment && <Appointment />}
      {activeNotes && <Notes />}
    </div>
  );
};

export default PatientOverview;
