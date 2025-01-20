import Link from "next/link";
import { SheetSide } from "./sheet";
import { NavigationMenuDemo } from "@/components/navigationmenu";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";
import { RiAccountCircleLine } from "react-icons/ri";

export default function Header() {
  return (
    <header className="w-full h-[80px] bg-white flex flex-row sm:flex-row justify-between items-center">
      {/* Left Section */}
      <div className="max-w-[1170px] h-full flex md:flex-row  items-center sm:px-6 md:px-8 lg:px-0 px-18 space-x-3"> {/* Reduced space */}
        <SheetSide />
        <h1 className="text-xl sm:text-3xl font-bold pl-1 ">SHOP.CO</h1>
      </div>

      {/* Navbar for Medium and Larger Screens */}
      <ul className="hidden md:flex md:space-x-5 items-start flex-col">
        <li className="space-x-9 flex items-center text-xl">
          <Link href={""}><NavigationMenuDemo /></Link>
          <Link href={""}>On Sale</Link>
          <Link href={""}>New Arrivals</Link>
          <Link href={"/casual"}>Brands</Link>
        </li>
      </ul>

      {/* Search Input (Visible on medium and larger screens) */}
      <div className="hidden md:block ">
        <div className="flex justify-start items-center w-[380px] h-[40px] rounded-[62px] bg-[#F0F0F0]"> {/* Increased width */}
          <IoSearchOutline className="text-xl ml-2" />
          <input placeholder="Search for Product..." className="w-full h-full ml-2 outline-none rounded-[62px] bg-[#f0f0f0]" />
        </div>
      </div>

      {/* Icons (Cart, Account) */}
      <div className="flex items-between space-x-5 md:mr-7">
        <IoSearchOutline className="text-xl md:hidden" />
        <Link href={"/cart"}>
        <IoCartOutline className="text-2xl" />
        </Link>
     
        <RiAccountCircleLine className="text-2xl" />
      </div>
      
    </header>
  );
}



