import React from "react";
import { Input } from "../ui/input";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import Image from "next/image";
import MobileNav from "./MobileNav";
import { IoNotifications } from "react-icons/io5";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IoIosArrowDown } from "react-icons/io";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  return (
    <div className="w-full flex bg-[#007C85] items-center justify-center py-4 px-20">
      <div className="md:w-1/4 w-full md:relative z-0 items-center justify-center">
        <Link href="/patient-list">
          <Image
            src="/icons/colinahealthlogowithtext.png"
            className="md:ml-5  md:w-[250px] w-[250px]"
            alt="colinahealth"
            width="300"
            height="40"
          />
        </Link>
      </div>
      <div className="w-1/4"></div>
      <div className="w-1/4 relative">
        <div className="relative hidden md:block">
          <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-2xl" />
          <Input
            placeholder="Search"
            className="pl-10 rounded-full border border-gray-400 focus:outline-none focus:border-gray-600"
          />
        </div>
      </div>
      <div className="w-1/4 md:flex hidden items-center justify-between pl-5">
        <div className="flex items-center">
          <IoNotifications className="text-white text-2xl cursor-pointer" />
        </div>
        <div className="flex">
          <Avatar className="mr-2 w-9 h-9">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h1 className="text-white text-xl mt-1 truncate">Kent John Liloc</h1>
          <div className="ml-5 mt-1">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <img
                  className=""
                  src="/icons/profileMenu.svg"
                  alt="profileMenu"
                  width="18"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Language</DropdownMenuItem>
                <DropdownMenuItem>Account Settings</DropdownMenuItem>
                <Link href="/">
                  <DropdownMenuItem>Sign Out</DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      <div className="w-full text-end z-5 absolute md:hidden right-5">
        <MobileNav />
      </div>
    </div>
  );
};

export default Header;
