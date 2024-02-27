import React from "react";
import Image from "next/image";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"


import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const VitalSigns = () => {
  const handleAddColumn = () => {
    // Logic for adding a column
    console.log("Add Column clicked");
  };

  const handleExportAsPDF = () => {
    // Logic for exporting as PDF
    console.log("Export as PDF clicked");
  };

  return (
    <div>
      {/* Background Section */}
      <div className="w-full flex bg-[#007C85] items-center justify-center p-6 mt-6">
        {/* Content for Vital Signs */}
      </div>

      {/* Patient Overview Section */}
      <div className="flex">
        <div className="flex-1 p-4">
          <h2 className="font-semibold text-2xl">Vital Signs</h2>
          {/* Other content for Patient Overview */}
        </div>

        {/* Buttons Section */}
        <div className="flex items-center p-4">
          <button
            onClick={handleAddColumn}
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600"
          >
            ADD 
          </button>
          <button
            onClick={handleExportAsPDF}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            EXPORT PDF
          </button>
        </div>
      </div>

      {/* Table Section */}
      <Table>
        <TableCaption></TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text font-bold">Date</TableHead>
            <TableHead className="text font-bold">Blood Pressure</TableHead>
            <TableHead className="text font-bold">Heart Rate</TableHead>
            <TableHead className="text font-bold">Temparature</TableHead>
            <TableHead className="text font-bold">Respiratory</TableHead>
            <TableHead className="text font-bold">Action</TableHead>
          </TableRow>
          
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">02/26/2024</TableCell>
            <TableCell>130/80mmHg</TableCell>
            <TableCell>72 bpm</TableCell>
            <TableCell>98.6°F</TableCell>
            <TableCell>27 breaths per minute</TableCell>
            <TableCell
        className="text-right mr-3"
        style={{ display: "flex", alignItems: "center" }}
      >
        <div className="flex">
          <Image
            src="/icons/edit.svg"
            alt="edit"
            width={20}
            height={20}
          />
        </div>
      </TableCell>
          </TableRow>
        </TableBody>
        <TableBody>
        <TableRow>
            <TableCell className="font-medium">02/26/2024</TableCell>
            <TableCell>130/80mmHg</TableCell>
            <TableCell>72 bpm</TableCell>
            <TableCell>98.6°F</TableCell>
            <TableCell>18 breaths per minute</TableCell>
            <TableCell
        className="text-right mr-3"
        style={{ display: "flex", alignItems: "center" }}
      >
        <div className="flex">
          <Image
            src="/icons/edit.svg"
            alt="edit"
            width={20}
            height={20}
          />
        </div>
      </TableCell>
          </TableRow>
        </TableBody>
        <TableBody>
        <TableRow>
            <TableCell className="font-medium">02/26/2024</TableCell>
            <TableCell>130/80mmHg</TableCell>
            <TableCell>72 bpm</TableCell>
            <TableCell>98.6°F</TableCell>
            <TableCell>17 breaths per minute</TableCell>
            <TableCell
        className="text-right mr-3"
        style={{ display: "flex", alignItems: "center" }}
      >
        <div className="flex">
          <Image
            src="/icons/edit.svg"
            alt="edit"
            width={20}
            height={20}
          />
        </div>
      </TableCell>
          </TableRow>
        </TableBody>
        <TableBody>
        <TableRow>
            <TableCell className="font-medium">02/26/2024</TableCell>
            <TableCell>130/80mmHg</TableCell>
            <TableCell>72 bpm</TableCell>
            <TableCell>98.6°F</TableCell>
            <TableCell>20 breaths per minute</TableCell>
            <TableCell
        className="text-right mr-3"
        style={{ display: "flex", alignItems: "center" }}
      >
        <div className="flex">
          <Image
            src="/icons/edit.svg"
            alt="edit"
            width={20}
            height={20}
          />
        </div>
      </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Pagination>
  <PaginationContent>
    <PaginationItem className="">Page 1 of 10</PaginationItem>
    <PaginationItem className="ml-[900px]">
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>
    </div>
  );
};

export default VitalSigns;
