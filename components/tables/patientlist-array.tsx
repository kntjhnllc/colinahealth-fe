
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
// import GetPatientListComponent from "../../components/data/getPatientList-comp";

// type Checked = DropdownMenuCheckboxItemProps["checked"];

const PatientListTable: React.FC = () => {
  // const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  // const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  // const [showPanel, setShowPanel] = React.useState<Checked>(false);
  return (
    <div className="border border-light-2 pt-10 shadow-md w-full md:py-12 text-light-1 justify-between items-center">
      <div className="pb-8 px-4 md:px-0">
        <div className="flex justify-between items-center">
          <p className="text-xl md:text-2xl font-semibold text-dark-5">
            Patient List
          </p>
          <div className="hidden md:block">
            <Button variant="ghost">
              <FaEllipsisV />
            </Button>
          </div>
          <div className="md:hidden">{/* Dropdown for mobile view */}</div>
          <div className="hidden md:flex gap-2">
            <button className="uppercase py-2 px-4 rounded-md font-semibold bg-blue text-white text-dark-1">
              Add Patient
            </button>
            <button className="uppercase py-2 px-8 rounded-md font-semibold bg-red text-white text-dark-1">
              Export
            </button>
          </div>
        </div>
        <div className="text-base font-semibold text-gray opacity-50">
          Total 6 of patients
        </div>
      </div>
      <div className="text-black px-4 md:px-0">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-200 text-xs">
              <th className="px-2 py-2">Patient ID</th>
              <th className="px-2 py-2">Name</th>
              <th className="px-2 py-2">Age</th>
              <th className="px-2 py-2">Gender</th>
              <th className="px-2 py-2 border border-red">Action</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 5 }).map((_, rowIndex) => (
              <tr key={rowIndex} className="border-t">
                <td className="px-2 py-2">{`Row ${rowIndex + 1}`}</td>
                <td className="px-2 py-2">{`Row ${rowIndex + 1}`}</td>
                <td className="px-2 py-2">{`Row ${rowIndex + 1}`}</td>
                <td className="px-2 py-2">{`Row ${rowIndex + 1}`}</td>
                <td className="px-2 py-2 border border-red">
                  <div className="flex justify-center">
                    <Button variant="gray" size="sm">
                      View
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientListTable;
