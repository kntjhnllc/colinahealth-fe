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
} from "@/components/ui/pagination";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";

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
    <div className="">
      <div className="ring-1 ring-[#000000] ring-opacity-10">
        <div className="w-full flex  bg-[#007C85] items-center justify-center p-5 mt-5"></div>
        <div className="flex justify-end">
          <div className="flex items-center p-4">
            <Button
              onClick={handleAddColumn}
              className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600"
            >
              ADD
            </Button>
            <Button
              onClick={handleExportAsPDF}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              EXPORT PDF
            </Button>
          </div>
        </div>

        {/* Table Section */}
        <div className="pb-2 px-5">
          <Table className="text-md">
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
                      src="/icons/editIcon.svg"
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
                      src="/icons/editIcon.svg"
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
                      src="/icons/editIcon.svg"
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
                      src="/icons/editIcon.svg"
                      alt="edit"
                      width={20}
                      height={20}
                    />
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
      <div className="flex items-center p-2">
        <h4>Page 1 of 10</h4>
        <div style={{ marginLeft: "auto" }}>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default VitalSigns;
