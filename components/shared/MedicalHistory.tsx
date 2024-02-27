import React from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

// Import pagination components here if not imported already

const MedicalHistory = () => {
  return (
    <div className=" mt-5 pb-5">
      <div className="ring-1 ring-[#000000] ring-opacity-10">
        <div className="w-full h-[40px] flex bg-[#007C85]  items-center justify-center  mb-5"></div>
        <div className=" mr-5 w-full flex justify-end">
          <Button className="bg-[#1b85ffdb] hover:bg-[#1b84ff] mr-2">
            ADD
          </Button>
          <Button className="bg-[#ed5050d1] hover:bg-[#ed5050]">
            EXPORT PDF
          </Button>
        </div>
        <div className="px-5 pb-2">
          <Table className="text-md">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[150px] font-bold">Date</TableHead>
                <TableHead className="font-bold">Allergies</TableHead>
                <TableHead className="font-bold">Medical Condition</TableHead>
                <TableHead className="font-bold">Surgeries</TableHead>
                <TableHead className="font-bold">Family History</TableHead>
                <TableHead className="font-bold">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 3 }, (_, index) => (
                <TableRow key={index}>
                  <TableCell>02/24/2024</TableCell>
                  <TableCell>None Reported</TableCell>
                  <TableCell>Hypertension</TableCell>
                  <TableCell>None Reported</TableCell>
                  <TableCell>None Reported</TableCell>
                  <TableCell className="text-right mr-3">
                    <div className="flex ml-3">
                      <Image
                        src="/icons/editIcon.svg"
                        alt="Edit icon"
                        width={20}
                        height={20}
                        className="mr-2"
                      />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
      <div className="p-2 flex justify-between items-center">
        <h4>Page 1 of 10</h4>
        <Pagination className="flex justify-end">
          <PaginationContent>
            <PaginationItem>
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
    </div>
  );
};

export default MedicalHistory;
