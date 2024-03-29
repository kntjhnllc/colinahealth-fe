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
import { Input } from "../ui/input";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const MedicalHistory = () => {
  return (
    <div>
      <div className="ring-1 ring-[#000000] ring-opacity-10">
        <div className="w-full h-[40px] flex bg-[#007C85] items-center justify-center p-4 mt-5   "></div>
        <div className="my-2 w-full flex justify-end px-2">
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
                <TableHead className="font-bold">Time</TableHead>
                <TableHead className="font-bold">Medication</TableHead>
                <TableHead className="font-bold">Prescription</TableHead>
                <TableHead className="font-bold">Notes</TableHead>
                <TableHead className="font-bold">Status</TableHead>
                <TableHead className="font-bold flex justify-center">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>02/24/2024</TableCell>
                <TableCell>7:01am</TableCell>
                <TableCell>Hypertension</TableCell>
                <TableCell>
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Button variant="link">
                        <img
                          src="/icons/prescriptionIcon.svg"
                          height={20}
                          width={20}
                          alt=""
                        />
                      </Button>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="bg-[#007C85] text-white"></div>
                      <div className="hover-card-content">
                        <h4 className="font-bold">Medications:</h4>
                        <h4 className="font-bold">Frequency:</h4>
                        <h4 className="font-bold">No. of Days:</h4>
                        <h4 className="font-bold">Interval:</h4>
                        <h4 className="font-bold">Dosage:</h4>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </TableCell>
                <TableCell>
                  <Input type="text" placeholder="Input notes e.g meals" />
                </TableCell>
                <TableCell className="italic">No Status</TableCell>
                <TableCell className="text-right mr-3">
                  <div className="flex ml-3 justify-center">
                    <Image
                      src="/icons/dropMenuIcon.svg"
                      alt="another icon"
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                    <Image
                      src="/icons/editIcon.svg"
                      alt="another icon"
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
            <TableBody>
              <TableRow>
                <TableCell>02/24/2024</TableCell>
                <TableCell>7:01am</TableCell>
                <TableCell>Hypertension</TableCell>
                <TableCell>
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Button variant="link">
                        <img
                          src="/icons/prescriptionIcon.svg"
                          height={20}
                          width={20}
                          alt=""
                        />
                      </Button>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="bg-[#007C85] text-white"></div>
                      <div className="hover-card-content">
                        <h4 className="font-bold">Medications:</h4>
                        <h4 className="font-bold">Frequency:</h4>
                        <h4 className="font-bold">No. of Days:</h4>
                        <h4 className="font-bold">Interval:</h4>
                        <h4 className="font-bold">Dosage:</h4>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </TableCell>
                <TableCell>
                  <Input type="text" placeholder="Input notes e.g meals" />
                </TableCell>
                <TableCell className="italic">Maried</TableCell>
                <TableCell className="text-right mr-3">
                  <div className="flex ml-3 justify-center">
                    <Image
                      src="/icons/dropMenuIcon.svg"
                      alt="another icon"
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                    <Image
                      src="/icons/editIcon.svg"
                      alt="another icon"
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
            <TableBody>
              <TableRow>
                <TableCell>04/14/2024</TableCell>
                <TableCell>11:21am</TableCell>
                <TableCell>Hypertension</TableCell>
                <TableCell>
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Button variant="link">
                        <img
                          src="/icons/prescriptionIcon.svg"
                          height={20}
                          width={20}
                          alt=""
                        />
                      </Button>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="bg-[#007C85] text-white">
                        {/* Your content here */}
                      </div>
                      <div className="hover-card-content relative">
                        <div className="arrow-up bg-[#007C85]"></div>
                        {/* Your content here */}
                        <h4 className="font-bold">Medications:</h4>
                        <h4 className="font-bold">Frequency:</h4>
                        <h4 className="font-bold">No. of Days:</h4>
                        <h4 className="font-bold">Interval:</h4>
                        <h4 className="font-bold">Dosage:</h4>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </TableCell>
                <TableCell>
                  <Input type="text" placeholder="Input notes e.g meals" />
                </TableCell>
                <TableCell className="italic">Single</TableCell>
                <TableCell className="text-right mr-3">
                  <div className="flex ml-3 justify-center">
                    <Image
                      src="/icons/dropMenuIcon.svg"
                      alt="another icon"
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                    <Image
                      src="/icons/editIcon.svg"
                      alt="another icon"
                      width={20}
                      height={20}
                      className="mr-2"
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
        <div className="ml-auto">
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

export default MedicalHistory;
