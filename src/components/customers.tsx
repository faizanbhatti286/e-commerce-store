"use client";
import { useState } from "react";
import Card from "@/components/card";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

export default function Customer() {
  const testimonials = [
    {
      text: "Sarah M.",
      p: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    },
    {
      text: "Alex K.",
      p: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    },
    {
      text: "James L.",
      p: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    },
    {
      text: "Maria P.",
      p: "Shop.co has truly changed the way I shop for clothes! Every piece I've purchased has been of excellent quality, and I love the variety available.",
    },
    {
      text: "John T.",
      p: "I was skeptical at first, but after receiving my first order from Shop.co, I'm a fan. The clothes fit perfectly and the style is just what I was looking for.",
    },
    {
      text: "Emily G.",
      p: "I've never been more satisfied with an online shopping experience. Shop.co offers fast delivery, great prices, and the clothes are always top quality.",
    },
  ];

  // State to track the current index of the visible testimonial
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle the "next" button click
  const handleNext = () => {
    if (currentIndex < testimonials.length - 3) {
      setCurrentIndex(currentIndex + 3);
    }
  };

  // Function to handle the "previous" button click
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 3);
    }
  };

  return (
    <div className="flex flex-col justify-start items-center m-auto gap-10">
      <div className="w-full max-w-screen-xl h-[60px] flex justify-between items-center mx-auto px-4">
        <h4 className="text-[#000000] text-[32px] sm:text-[48px] font-bold">
          OUR HAPPY CUSTOMERS
        </h4>
        <div className="flex justify-between items-center gap-2">
          <FaArrowLeft
            onClick={handlePrev}
            className={`w-[24px] h-[24px] text-2xl text-gray-700 cursor-pointer ${
              currentIndex === 0 ? "text-gray-400 cursor-not-allowed" : ""
            }`}
          />
          <FaArrowRight
            onClick={handleNext}
            className={`w-[24px] h-[24px] text-2xl text-gray-700 cursor-pointer ${
              currentIndex === testimonials.length - 3
                ? "text-gray-400 cursor-not-allowed"
                : ""
            }`}
          />
        </div>
      </div>

      {/* Testimonial Cards Section */}
      <div className="lg:ml-[90px] mt-[50px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {/* Show 3 testimonials per view */}
        {testimonials
          .slice(currentIndex, currentIndex + 3) // Show up to 3 testimonials
          .map((testimonial, index) => (
            <Card
              key={index}
              text={testimonial.text}
              p={testimonial.p.length > 100 ? `${testimonial.p.slice(0, 100)}...` : testimonial.p} // Limit text length for mobile
            />
          ))}
      </div>
    </div>
  );
}
