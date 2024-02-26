"use client";
// import { DropdownMenuCheckboxItemProps } from "@radix-ui/
// react-dropdown-menu";
import { FaEllipsisV } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import * as React from "react";
// import viewActionButton from "../buttons/viewActionButton";
import GetPatientListComponent from "../../components/data/getPatientList-comp";

// type Checked = DropdownMenuCheckboxItemProps["checked"];

const PatientListTable: React.FC = () => {
  // const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  // const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  // const [showPanel, setShowPanel] = React.useState<Checked>(false);
  return (
    <>
  
      <div className=" grid grid-cols-12 w-full text-light-1 justify-between items-center  md:py-10">
        <div className="flex w-full col-start-2 col-span-4">
          <div>
            <div className="text-xl md:text-2xl font-semibold text-dark-5">
              Patient List
            </div>
            <div className="text-base md:text-base font-semibold text-gray opacity-50">
              Total 6 of patients
            </div>
          </div>
        </div>
        <div className="text-black flex col-start-11 md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">
                <FaEllipsisV />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>
                <div className="justify-center flex">ACTION</div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Add Patient</DropdownMenuItem>
              <DropdownMenuItem>Export</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className=" flex items-center col-start-8 col-span-6 md:col-start-7 justify-end md:col-span-5  lg:col-span-3 lg:col-start-9 ">
          <div className="hidden md:flex  gap-2">
            <div className="col-span-2  ">
              <button className=" uppercase py-2   px-3 md:px-4  rounded-md text-subtle-medium bg-blue text-white text-dark-1">
                Add Patient
              </button>
            </div>
            <div className="col-span-2 ">
              <button className=" uppercase py-2 px-3 md:px-8  rounded-md text-subtle-medium bg-red text-white text-dark-1">
                Export
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-10 col-start-2 ">
          <div className=" sm:text-sm md:text-base  text-xs font-bold text-gray opacity-60 uppercase grid grid-cols-10   ">
            {/* Table headers */}
            <div className="bg-gray-200 flex justify-center md:justify-start   col-span-2  md:px-2 py-2">
              Patient ID
            </div>
            <div className="bg-gray-200  flex justify-center md:justify-start col-span-2 md:px-4 py-2">
              Name{" "}
            </div>
            <div className="bg-gray-200  flex  justify-center md:justify-start col-span-2 md:px-4 py-2">
              Age
            </div>
            <div className="bg-gray-200  flex justify-center md:justify-start col-span-2 md:px-4 py-2">
              Gender
            </div>
            <div className="bg-gray-200  flex justify-center md:justify-start  col-span-2 border border-red md:px-4 py-2">
              Action
            </div>
          </div>
          <div className="gap-y-6 text-black grid grid-cols-10">
            {/* Table cells */}
            {/* Render dropdown buttons */}

            {Array.from({ length: 5 }).map((_, rowIndex) =>
              Array.from({ length: 5 }).map((_, colIndex) => {
                let textColorClass =
                  colIndex === 0 ? "text-black" : "text-gray opacity-60 "; // Checking if it's the Patient ID column
                let content =
                  colIndex === 4 ? (
                    <div className="text-black opacity-100 flex justify-center ">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="gray">View</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem>Add Patient</DropdownMenuItem>
                          <DropdownMenuItem>Export</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  ) : (
                    `Row ${rowIndex + 1}, Col ${colIndex + 1}`
                  ); // Render viewActionButton in the 5th column, otherwise render text
                return (
                  <div
                    key={`${rowIndex}-${colIndex}`}
                    className={` sm:text-sm md:text-base  text-xs  font-bold  border col-span-2 px-4 py-2 ${textColorClass}`}
                  >
                    {content}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientListTable;
