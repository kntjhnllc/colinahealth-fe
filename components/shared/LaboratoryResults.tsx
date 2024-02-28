import React from "react";
import Image from "next/image";

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
const LaboratoryResults = () => {
  return (
    <div className="pb-5">
      <div className="ring-1 ring-[#000000] ring-opacity-10">
        <div className="w-full h-[40px] flex bg-[#007C85] items-center justify-center p-2 mt-5 ">
          <div className="ml-auto py-5 mt-[100px]">
            <Button className="mr-2 bg-[#1b85ffdb] hover:bg-[#1b84ff] text-[#ffffff] p-2 rounded">
              Add Result
            </Button>
            <Button className="bg-[#ed5050d1] hover:bg-[#ed5050] text-[#ffffff] p-2 rounded">
              Export PDF
            </Button>
          </div>
        </div>

        <div className="table-container shadow-md mt-[60px] px-5 pb-2">
          <Table className="text-md">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Date</TableHead>
                <TableHead>Hemoglobin A1c</TableHead>
                <TableHead>Fasting Blood Glucose</TableHead>
                <TableHead>Total Cholesterol</TableHead>
                <TableHead>LDL Cholesterol</TableHead>
                <TableHead>HDL Cholesterol</TableHead>
                <TableHead>Tricglycerides</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">09/18/2000</TableCell>
                <TableCell>70%</TableCell>
                <TableCell>120 mg/dl</TableCell>
                <TableCell>120 mg/dl</TableCell>
                <TableCell>120 mg/dl</TableCell>
                <TableCell>120 mg/dl</TableCell>
                <TableCell>120 mg/dl</TableCell>
                <TableCell
                  className="text-right mr-3"
                  style={{ display: "grid", placeItems: "end" }}
                >
                  <div className="flex ">
                    <Image
                      src="/icons/dropMenuIcon.svg"
                      alt="another icon"
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                    <Image
                      src="/icons/editIcon.svg"
                      alt="edit"
                      width={20}
                      height={20}
                    />
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">09/18/2000</TableCell>
                <TableCell>70%</TableCell>
                <TableCell>120 mg/dl</TableCell>
                <TableCell>120 mg/dl</TableCell>
                <TableCell>120 mg/dl</TableCell>
                <TableCell>120 mg/dl</TableCell>
                <TableCell>120 mg/dl</TableCell>
                <TableCell
                  className="text-right mr-3"
                  style={{ display: "grid", placeItems: "end" }}
                >
                  <div className="flex ">
                    <Image
                      src="/icons/dropMenuIcon.svg"
                      alt="another icon"
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                    <Image
                      src="/icons/editIcon.svg"
                      alt="edit"
                      width={20}
                      height={20}
                    />
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">09/18/2000</TableCell>
                <TableCell>70%</TableCell>
                <TableCell>120 mg/dl</TableCell>
                <TableCell>120 mg/dl</TableCell>
                <TableCell>120 mg/dl</TableCell>
                <TableCell>120 mg/dl</TableCell>
                <TableCell>120 mg/dl</TableCell>
                <TableCell
                  className="text-right mr-3"
                  style={{ display: "grid", placeItems: "end" }}
                >
                  <div className="flex ">
                    <Image
                      src="/icons/dropMenuIcon.svg"
                      alt="another icon"
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                    <Image
                      src="/icons/editIcon.svg"
                      alt="edit"
                      width={20}
                      height={20}
                    />
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">09/18/2000</TableCell>
                <TableCell>70%</TableCell>
                <TableCell>120 mg/dl</TableCell>
                <TableCell>120 mg/dl</TableCell>
                <TableCell>120 mg/dl</TableCell>
                <TableCell>120 mg/dl</TableCell>
                <TableCell>120 mg/dl</TableCell>
                <TableCell
                  className="text-right mr-3"
                  style={{ display: "grid", placeItems: "end" }}
                >
                  <div className="flex ">
                    <Image
                      src="/icons/dropMenuIcon.svg"
                      alt="another icon"
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                    <Image
                      src="/icons/editIcon.svg"
                      alt="edit"
                      width={20}
                      height={20}
                    />
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">09/18/2000</TableCell>
                <TableCell>70%</TableCell>
                <TableCell>120 mg/dl</TableCell>
                <TableCell>120 mg/dl</TableCell>
                <TableCell>120 mg/dl</TableCell>
                <TableCell>120 mg/dl</TableCell>
                <TableCell>120 mg/dl</TableCell>
                <TableCell
                  className="text-right mr-3"
                  style={{ display: "grid", placeItems: "end" }}
                >
                  <div className="flex ">
                    <Image
                      src="/icons/dropMenuIcon.svg"
                      alt="another icon"
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                    <Image
                      src="/icons/editIcon.svg"
                      alt="edit"
                      width={20}
                      height={20}
                    />
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">09/18/2000</TableCell>
                <TableCell>70%</TableCell>
                <TableCell>120 mg/dl</TableCell>
                <TableCell>120 mg/dl</TableCell>
                <TableCell>120 mg/dl</TableCell>
                <TableCell>120 mg/dl</TableCell>
                <TableCell>120 mg/dl</TableCell>
                <TableCell
                  className="text-right mr-3"
                  style={{ display: "grid", placeItems: "end" }}
                >
                  <div className="flex ">
                    <Image
                      src="/icons/dropMenuIcon.svg"
                      alt="another icon"
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                    <Image
                      src="/icons/editIcon.svg"
                      alt="edit"
                      width={20}
                      height={20}
                    />
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">09/18/2000</TableCell>
                <TableCell>70%</TableCell>
                <TableCell>120 mg/dl</TableCell>
                <TableCell>120 mg/dl</TableCell>
                <TableCell>120 mg/dl</TableCell>
                <TableCell>120 mg/dl</TableCell>
                <TableCell>120 mg/dl</TableCell>
                <TableCell
                  className="text-right mr-3"
                  style={{ display: "grid", placeItems: "end" }}
                >
                  <div className="flex ">
                    <Image
                      src="/icons/dropMenuIcon.svg"
                      alt="another icon"
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                    <Image
                      src="/icons/editIcon.svg"
                      alt="edit"
                      width={20}
                      height={20}
                    />
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">09/18/2000</TableCell>
                <TableCell>70%</TableCell>
                <TableCell>120 mg/dl</TableCell>
                <TableCell>120 mg/dl</TableCell>
                <TableCell>120 mg/dl</TableCell>
                <TableCell>120 mg/dl</TableCell>
                <TableCell>120 mg/dl</TableCell>
                <TableCell
                  className="text-right mr-3"
                  style={{ display: "grid", placeItems: "end" }}
                >
                  <div className="flex ">
                    <Image
                      src="/icons/dropMenuIcon.svg"
                      alt="another icon"
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                    <Image
                      src="/icons/editIcon.svg"
                      alt="edit"
                      width={20}
                      height={20}
                    />
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">09/18/2000</TableCell>
                <TableCell>70%</TableCell>
                <TableCell>120 mg/dl</TableCell>
                <TableCell>120 mg/dl</TableCell>
                <TableCell>120 mg/dl</TableCell>
                <TableCell>120 mg/dl</TableCell>
                <TableCell>120 mg/dl</TableCell>
                <TableCell
                  className="text-right mr-3"
                  style={{ display: "grid", placeItems: "end" }}
                >
                  <div className="flex ">
                    <Image
                      src="/icons/dropMenuIcon.svg"
                      alt="another icon"
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                    <Image
                      src="/icons/editIcon.svg"
                      alt="edit"
                      width={20}
                      height={20}
                    />
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">09/18/2000</TableCell>
                <TableCell>70%</TableCell>
                <TableCell>120 mg/dl</TableCell>
                <TableCell>120 mg/dl</TableCell>
                <TableCell>120 mg/dl</TableCell>
                <TableCell>120 mg/dl</TableCell>
                <TableCell>120 mg/dl</TableCell>
                <TableCell
                  className="text-right mr-3"
                  style={{ display: "grid", placeItems: "end" }}
                >
                  <div className="flex ">
                    <Image
                      src="/icons/dropMenuIcon.svg"
                      alt="another icon"
                      width={20}
                      height={20}
                      className="mr-2"
                    />
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
    </div>
  );
};

export default LaboratoryResults;
