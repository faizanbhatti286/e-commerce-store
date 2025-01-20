"use client";

import * as React from "react";
import { Checkbox } from "@/components/ui/checkbox";

const checkboxColors = [
  "bg-red-500",
  "bg-blue-500",
  "bg-green-500",
  "bg-yellow-500",
  "bg-purple-500",
  "bg-pink-500",
  "bg-orange-500",
  "bg-teal-500",
  "bg-cyan-500",
  "bg-black",
];

export function CheckboxDemo() {
  return (
    <div className="px-1">
      <h1 className="font-bold mb-4 mt-4 text-xl pl-5">Color</h1>
      <div className="grid grid-cols-5 gap-3 px-5 mt-2">
        {checkboxColors.map((color, index) => (
          <div key={index} className="flex items-center justify-center space-x-2">
            <Checkbox
              id={`checkbox-${index}`}
              className={`h-[37px] w-[37px] rounded-full ${color}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}


