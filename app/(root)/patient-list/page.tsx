import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import PatientListTable from "@/components/tables/patientlist-table";

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
    <div className=" border border-light-2 shadow-md  w-full ">
    <div className=" ">
      <PatientListTable />
    </div>
  </div>
  );
};

export default PatientList;
