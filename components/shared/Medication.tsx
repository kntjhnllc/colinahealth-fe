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
      <div className="w-full h-[40px] flex bg-[#007C85] items-center justify-center p-4 mt-2 "></div>
      <div className="my-2 w-full flex justify-end">
        <Button className="bg-[#1b85ffdb] hover:bg-[#1b84ff] mr-2">ADD</Button>
        <Button className="bg-[#ed5050d1] hover:bg-[#ed5050]">
          EXPORT PDF
        </Button>
      </div>
      <div className="border border-gray-400">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[150px] font-bold">Date</TableHead>
              <TableHead className="font-bold">Time</TableHead>
              <TableHead className="font-bold">Medication</TableHead>
              <TableHead className="font-bold">Prescription</TableHead>
              <TableHead className="font-bold">Notes</TableHead>
              <TableHead className="font-bold">Status</TableHead>
              <TableHead className="font-bold flex justify-center">Action</TableHead>
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
                        src="/icons/Prescription-Hover.svg"
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
                    src="/icons/3dot.svg"
                    alt="another icon"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  <Image
                    src="/icons/edit.svg"
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
                        src="/icons/Prescription-Hover.svg"
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
                    src="/icons/3dot.svg"
                    alt="another icon"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  <Image
                    src="/icons/edit.svg"
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
                        src="/icons/Prescription-Hover.svg"
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
              <TableCell className="italic">Single</TableCell>
              <TableCell className="text-right mr-3">
                <div className="flex ml-3 justify-center">
                  <Image
                    src="/icons/3dot.svg"
                    alt="another icon"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  <Image
                    src="/icons/edit.svg"
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

      <div>
        <h4 className="flex justify-start">Page 1 of 10</h4>
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
