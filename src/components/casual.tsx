import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import React from "react";


// Interface for TypeScript types
interface Casual {
  id: number;
  image: string;
  title: string;
  price: string;
  old_price?: string;
  rating: number;
}

// Mock product data
const Product: Casual[] = [
  {
    id: 1,
    image: "/images/pic12.png",
    title: "Polo with Contrast Trims",
    price: "$212",
    old_price:"242",
    rating: 4.0,
  },
  {
    id: 2,
    image: "/images/pic13.png",
    title: "Gradient Graphic T-shirt",
    price: "$145",
    rating: 3.5,
  },
  {
    id: 3,
    image: "/images/pic14.png",
    title: "Polo with Tipping Details",
    price: "$180",
    rating: 4.5,
  },
  {
    id: 4,
    image: "/images/pic15.png",
    title: "Black Striped T-shirt",
    price: "$120",
    old_price: "$160",
    rating: 4.5,
  },
  {
    id: 6,
    image: "/images/pic1.png",
    title: "T-SHIRT WITH TAPE DETAILS",
    price: "$120",
    rating: 4.5,
  },
  {
    id: 7,
    image: "/images/pic2.png",
    title: "SKINNY FIT JEANS",
    price: "$240",
    old_price: "$200",
    rating: 4.5,
  },
  {
    id: 8,
    image: "/images/pic3.png",
    title: "CHECKERED SHIRT",
    price: "$180",
    rating: 4.5,
  },
  {
    id: 9,
    image: "/images/pic4.png",
    title: "SLEEVE STRIPED T-SHIRT",
    price: "$130",
    old_price: "$160",
    rating: 4.7,
  },
];
// Reusable component for stars
const RatingStars = ({ rating }: { rating: number}) => {
  const stars = Array.from({ length: Math.floor(rating) }, (_, index) => (
    <FaStar key={index} className="text-yellow-400" />
  ));
  return <div className="flex text-yellow-400">{stars}</div>;
};



export default function Casual(){
    return(
       <div className="flex flex-col md:flex-row justify-center sm:justify-evenly sm:mt-10 p-5 sm:p-0">
            {/* Left side */}
            <div className="w-[122px] h-[600px] bg-black">

            </div>
             {/* right side */}
        <div className="w-full h-[600px] bg-purple-700  justify-center ">
        <div className="flex flex-col-3  md:justify-between px-8 mt-10">
        {Product.map((data) => (
          <div key={data.id} className="w-full md:w-1/4 rounded-[20px] p-4">
            {/* Image Container with Link */}
            
            <div>
            <div className="w-[230px] h-[230px] flex-col-2 order-3 bg-[#F0EEED] rounded-[20px] overflow-hidden">
                <Image
                  src={data.image}
                  alt={data.title}
                  className="w-full h-full object-cover"
                  width={100}
                  height={100}
                />
              </div>
              <div className="w-[230px] h-[230px] flex-col-2 order-3 bg-[#F0EEED] rounded-[20px] overflow-hidden">
                <Image
                  src={data.image}
                  alt={data.title}
                  className="w-full h-full object-cover"
                  width={100}
                  height={100}
                />
              </div>
              <div className="w-[230px] h-[230px] flex-col-2 order-3 bg-[#F0EEED] rounded-[20px] overflow-hidden">
                <Image
                  src={data.image}
                  alt={data.title}
                  className="w-full h-full object-cover"
                  width={100}
                  height={100}
                />
              </div>
            </div>

            {/* Product Title, Rating, and Price */}
            <div className="mt-4">
              <p className="text-lg font-bold">{data.title}</p>
              <RatingStars rating={data.rating} />
              <p className="font-bold mt-1">
                {data.price}
                {data.old_price && (
                  <span className="text-gray-400 font-bold line-through ml-2">
                    {data.old_price}
                  </span>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>

            </div>
        </div>
        
    )
}