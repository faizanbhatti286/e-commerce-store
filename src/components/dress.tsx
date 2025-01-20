import { CiFilter } from 'react-icons/ci'; // Import CiFilter from the appropriate library
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "./ui/button";

export function AccordionDemo2() {
  return (
    <div className="p-5 w-full md:w-[247px] h-full md:h-[160px] gap-[20px]">
      <div className="flex justify-between items-center">
        <p className="font-bold mb-4 mt-1 text-xl">Dress Style</p>
      </div>
      <Accordion type="single" collapsible className="w-[247px] h-[160px] gap-[20px]">
        <AccordionItem value="item-1">
          <AccordionTrigger className="w-[247px] h-[16px] justify-between">
            <CiFilter className="mr-2" /> Casual
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="w-[247px] h-[16px] justify-between">
            <CiFilter className="mr-2" /> Formal
          </AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="w-[247px] h-[16px] justify-between">
            <CiFilter className="mr-2" /> Shirts
          </AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="w-[247px] h-[16px] justify-between">
            <CiFilter className="mr-2" /> Party
          </AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="w-[247px] h-[16px] justify-between">
            <CiFilter className="mr-2" /> Gym
          </AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="flex justify-center items-center">
        <Button className="bg-black text-white w-[95%] px-5 mt-3">
          Apply Filter
        </Button>
      </div>
    </div>
  );
}



  
  