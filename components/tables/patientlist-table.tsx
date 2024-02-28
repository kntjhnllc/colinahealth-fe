// import { DropdownMenuCheckboxItemProps } from "@radix-ui/
// react-dropdown-menu";
import { FaEllipsisV } from "react-icons/fa";
import Loading from "../../app/(root)/patient-list/loading"; // Import the Loading component

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
const sampleData = [
  { id: 1, name: "John", age: 25, gender: "Male" },
  { id: 2, name: "Alice", age: 30, gender: "Female" },
  { id: 3, name: "Bob", age: 40, gender: "Male" },
  { id: 4, name: "Emily", age: 35, gender: "Female" },
  { id: 5, name: "Michael", age: 28, gender: "Male" },
];
const PatientListTable: React.FC = () => {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<Error | null>(null);
  const [data, setData] = React.useState<any[]>([]);
  const [totalPages, setTotalPages] = React.useState<number>(0);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/patient-information/list"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setData(jsonData.data);
        setTotalPages(jsonData.totalPages);
      } catch (error: any) {
        // Explicitly specify the type of 'error'
        setError(error); // Ensure 'error' is of type 'Error | null'
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  if (loading) {
    return <Loading />; // Render the Loading component while data is being fetched
  }

  if (error) {
    return <p>Error: {error.message}</p>; // Render error message if data fetching fails
  }
  // const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  // const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  // const [showPanel, setShowPanel] = React.useState<Checked>(false);
  return (
    <div className=" grid grid-cols-12 border border-light-2 pt-10 shadow-md w-full md:py-12 text-light-1 justify-between items-center  ">
      <div className="col-start-2 col-span-10 pb-8 ">
        <div className="grid grid-cols-12  ">
          <div className="col-span-4 md:col-span-5">
            <p className="text-xl md:text-2xl   font-semibold text-dark-5">
              Patient List
            </p>
          </div>

          <div className="text-black col-start-12 md:hidden">
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
          <div className="col-start-7 col-span-7 lg:col-start-8 lg:col-span-5 lg:justify-end justify-center flex ">
            <div className="hidden md:flex  gap-2">
              <button className=" uppercase py-2   text-xs md:px-4   rounded-md lg:text-sm font-semibold bg-blue text-white text-dark-1">
                Add Patient
              </button>
              <div className="col-span-2 ">
                <button className=" uppercase py-2 px-3 md:px-8  text-xs rounded-md lg:text-sm font-semibold bg-red text-white text-dark-1">
                  Export
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="text-base md:text-base font-semibold text-gray opacity-50">
          Total 6 of patients
        </div>
      </div>
      {/* <div className=" col-span-10 col-start-2"> */}
      {/* <table className="w-full text-black text-sm border-collapse">
          <thead>
            <tr className=" grid grid-cols-10 uppercase sm:text-sm md:text-base lg:text-lg pb-4 text-xs font-bold text-gray opacity-60 ">
              <th className="flex justify-center md:justify-start col-span-2   md:px-1 py-2 border border-red">
                Patient ID
              </th>
              <th className="flex justify-center  md:justify-start col-span-2 px-1 py-2 border border-red">
                Name
              </th>
              <th className="flex justify-center md:justify-start col-span-2 px-1 py-2 border border-red">
                Age
              </th>
              <th className="flex  justify-center md:justify-start col-span-2 px-1 py-2 border border-red">
                Gender
              </th>
              <th className="  col-span-2 px-1 py-2 border border-red">
                Action
              </th>
            </tr>
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
          </thead>
        </table>
      </div> */}
      <div className="col-span-10 col-start-2  ">
        <div className=" sm:text-sm md:text-base lg:text-lg pb-4 text-xs font-bold text-gray opacity-60 uppercase grid grid-cols-10   ">
          {/* Table headers */}
          <div className="bg-gray-200 flex justify-center md:justify-start   col-span-2  md:px-1 py-2">
            Patient ID
          </div>
          <div className="bg-gray-200  flex justify-center md:justify-start col-span-2 md:px-1 py-2">
            Name{" "}
          </div>
          <div className="bg-gray-200  flex  justify-center md:justify-start col-span-2 md:px-1 py-2">
            Age
          </div>
          <div className="bg-gray-200  flex justify-center md:justify-start col-span-2 md:px-1 py-2">
            Gender
          </div>
          <div className="bg-gray-200  flex justify-center md:justify-center   col-span-2 md:px-1 py-2">
            Action
          </div>
        </div>

        <div className="col-span-10 col-start-2">
          {/* <div className="sm:text-sm md:text-base lg:text-lg pb-4 text-xs font-bold text-gray opacity-60 uppercase grid grid-cols-10">
            Table headers
            <div className="bg-gray-200 flex justify-center md:justify-start col-span-2 md:px-1 py-2">
              Patient ID
            </div>
            <div className="bg-gray-200 flex justify-center md:justify-start col-span-2 md:px-1 py-2">
              Name
            </div>
            <div className="bg-gray-200 flex justify-center md:justify-start col-span-2 md:px-1 py-2">
              Age
            </div>
            <div className="bg-gray-200 flex justify-center md:justify-start col-span-2 md:px-1 py-2">
              Gender
            </div>
            <div className="bg-gray-200 flex justify-center md:justify-center col-span-2 border border-red md:px-1 py-2">
              Action
            </div>
          </div> */}
          <div className="col-span-10 col-start-2">
            <div className="gap-y-6 text-black grid grid-cols-10">
              {/* Table cells */}
              {/* Render dropdown buttons */}
              {data.map((patient, index) => (
                <React.Fragment key={index}>
                  <div className="text-black opacity-100 col-span-2 px-1">
                    {patient.uuid}
                  </div>
                  <div className="text-black opacity-100 col-span-2 px-1">
                    {`${patient.firstName} ${patient.lastName}`}
                  </div>

                  <div className="text-black opacity-100 col-span-2 px-1">
                    {patient.age}
                  </div>
                  <div className="text-black opacity-100 col-span-2 px-1">
                    {patient.gender}
                  </div>
                  <div className="text-black opacity-100 col-span-2 px-1 flex justify-center">
                    <Button variant="gray" size="sm">
                      View
                    </Button>
                  </div>
                </React.Fragment>
              ))}
              {/* 
              {Array.from({ length: 5 }).map((_, rowIndex) =>
                Array.from({ length: 5 }).map((_, colIndex) => {
                  let textColorClass =
                    colIndex === 0 ? "text-black" : "text-gray opacity-60 "; // Checking if it's the Patient ID column
                  let content =
                    colIndex === 4 ? (
                      <div className="text-black opacity-100 flex justify-center ">
                        <Button variant="gray" size="sm">
                          View{" "}
                        </Button>
                      </div>
                    ) : (
                      `Row ${rowIndex + 1}, Col ${colIndex + 1}`
                    ); // Render viewActionButton in the 5th column, otherwise render text
                  return (
                    <div
                      key={`${rowIndex}-${colIndex}`}
                      className={` sm:text-xs md:text-sm  text-xs  font-bold  col-span-2  px-1 ${textColorClass}`}
                    >
                      {content}
                    </div>
                  );
                })
              )} */}
            </div>
          </div>
          ;
        </div>
      </div>
    </div>
  );
};
export default PatientListTable;
