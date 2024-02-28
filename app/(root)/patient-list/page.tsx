"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import PatientListTable from "@/components/tables/patientlist-table";
import PatientListMetTable from "@/components/tables/patientlist-met-table";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const PatientList = () => {
  // const [loading, setLoading] = useState<boolean>(true);
  // const [error, setError] = useState<Error | null>(null);
  // const [data, setData] = useState<any[]>([]);
  // const [totalPages, setTotalPages] = useState<number>(0);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         "http://localhost:3000/patient-information/list"
  //       );
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch data");
  //       }
  //       const jsonData = await response.json();
  //       setData(jsonData.data);
  //       setTotalPages(jsonData.totalPages);
  //     } catch (error: any) {
  //       // Explicitly specify the type of 'error'
  //       setError(error); // Ensure 'error' is of type 'Error | null'
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);
  return (
    // <section className="w-full min-h-screen flex-1 flex-col items-center bg-light-1 px-8 pt-10 max-md:pb-32 sm:px-20">
    //   {" "}
    //   <div className=" ">
    //     <PatientListTable />
    //   </div>
    // </section>
    <div className=" border border-light-2 shadow-md  w-full ">
      <div className=" ">
        <PatientListTable />
      {/* </div>
      <Button>
        <Link href="/patient-overview">Patient Overview</Link>
      </Button>
      <div>
        <h2>Patients</h2> */}
        {/* <p>Total Pages: {totalPages}</p>

        <ul>
          {data.map((patient: any) => (
            <li key={patient.uuid}>
              {patient.firstName} {patient.lastName}, Age: {patient.age},
              Gender: {patient.gender}
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  );
};

export default PatientList;
