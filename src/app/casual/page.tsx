import { AccordionDemo } from "@/components/accordion";
import { BreadcrumbCollapsed } from "@/components/breadcrumb";
import { CheckboxDemo } from "@/components/checkbox";
import { AccordionDemo2 } from "@/components/dress";
import Shirts from "@/components/shirts";
import { SliderDemo } from "@/components/silder";
import Size from "@/components/size";
import { CiFilter } from "react-icons/ci";

export default function Casual() {
  return (
    <>
     <div className="pl-6">
       <BreadcrumbCollapsed />
     </div>
    <main className="flex flex-col sm:flex-row justify-center items-start space-x-6 p-6">
      {/* Left side (Filter Sidebar) */}
      <div className="w-full h-full md:w-[295px] md:h-[1200px] border rounded-[20px] p-6 bg-white shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h1 className="font-bold text-xl">Filter</h1>
          <CiFilter className="text-2xl" />
        </div>
        <hr className="w-[247px] border-[1px] border-[#0000001A]" />
        <div className="items-center mt-5">
          <AccordionDemo />
          <br />
          <hr className="w-[247px] border-[1px] border-[#0000001A] mt-2" />
          <SliderDemo />
          <hr className="w-[247px] border-[1px] border-[#0000001A] mt-2" />
          <CheckboxDemo />
          <hr className="w-[247px] border-[1px] border-[#0000001A] mt-2" />
          <Size />
          <br />
          <hr className="w-[247px] border-[1px] border-[#0000001A] mt-6" />
          <AccordionDemo2 />
        </div>
      </div>

      {/* Right side (Content Area) */}
      <div className="w-full h-full md:w-[900px] md:h-[1220px]  rounded-[20px] shadow-lg">
        <Shirts/>
      </div>
    </main>
    </>
  );
}

