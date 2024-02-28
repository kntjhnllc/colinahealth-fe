import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
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
      </div>
      <Button>
        <Link href="/patient-overview">Patient Overview</Link>
      </Button>
    </div>
  );
};

export default PatientList;
