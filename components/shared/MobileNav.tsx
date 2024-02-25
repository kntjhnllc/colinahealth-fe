"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
// import { Separator } from "@radix-ui/react-separator"
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { Input } from "../ui/input";
// import NavItems from "./NavItems"

const MobileNav = () => {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Image
            src="/icons/menu.svg"
            alt="menu"
            width={24}
            height={24}
            className="cursor-pointer text-white"
          />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
          <Image src="/images/logo.svg" alt="logo" width={128} height={38} />
          {/* <Separator className="border border-gray-50"/> */}
          {/* <NavItems /> */}
          Notification <br></br>Name
          <div className="relative ">
            <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-2xl" />
            <Input
              placeholder="Search"
              className="pl-10 rounded-full border border-gray-400 focus:outline-none"
            />
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
