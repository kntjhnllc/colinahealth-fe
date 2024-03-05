"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState } from "react";
import PatientListTable from "@/components/tables/patientlist-table";
import { useRouter } from "next/navigation";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getPatientById } from "@/lib/actions/patient.actions";
import { format } from "url";

const PatientList = () => {
  const router = useRouter();
  const patientId = 1;
  const [loading, setLoading] = useState(false);

  const handlePatientOverviewClick = async () => {
    setLoading(true); // Set loading state to true when fetching data
    try {
      const patient = await getPatientById(patientId);
      // Once patient data is fetched successfully, navigate to patient overview page
      const patientOverviewUrl = `/patient-overview/${Number(
        patient.patientId
      )}`;

      router.push(patientOverviewUrl);
    } catch (error) {
      console.error("Error fetching patient:", error);
    } finally {
      setLoading(false); // Set loading state to false after fetching data
    }
  };

  return (
    <div className=" border border-light-2 shadow-md  w-full ">
      <div className=" ">
        <PatientListTable />
      </div>
      <Button onClick={handlePatientOverviewClick}>
        <Link href={`/patient-overview`}>Patient Overview</Link>
      </Button>
    </div>
  );
};

export default PatientList;
