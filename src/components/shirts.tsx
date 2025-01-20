import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import React from "react";

// Interface for TypeScript types
interface Shirts {
  id: number;
  image: string;
  title: string;
  price: string;
  old_price?: string;
  rating: number;
}

// Mock product data
const Product: Shirts[] = [
  {
    id: 1,
    image: "/images/pic13.png",
    title: "Gradient Graphic T-shirt",
    price: "$145",
    rating: 3.5,
  },
  {
    id: 2,
    image: "/images/pic14.png",
    title: "Polo with Tipping Details",
    price: "$180",
    rating: 4.5,
  },
  {
    id: 3,
    image: "/images/pic15.png",
    title: "Black Striped T-shirt",
    price: "$120",
    old_price: "$160",
    rating: 4.5,
  },
  {
    id: 4,
    image: "/images/pic2.png",
    title: "SKINNY FIT JEANS",
    price: "$240",
    old_price: "$200",
    rating: 4.5,
  },
  {
    id: 5,
    image: "/images/pic3.png",
    title: "CHECKERED SHIRT",
    price: "$180",
    rating: 4.5,
  },
  {
    id: 6,
    image: "/images/pic4.png",
    title: "SLEEVE STRIPED T-SHIRT",
    price: "$130",
    old_price: "$160",
    rating: 4.7,
  },
  {
    id: 7,
    image: "/images/pic5.png",
    title: "VERTICAL STRIPED SHIRT",
    price: "$212",
    old_price: "$232",
    rating: 4.7,
  },
  {
    id: 8,
    image: "/images/pic6.png",
    title: "COURAGE GRAPHIC T-SHIRT",
    price: "$145",
    old_price: "",
    rating: 4.0,
  },
  {
    id: 9,
    image: "/images/pic7.png",
    title: "LOOSE FIT BERMUDA SHORTS",
    price: "$80",
    rating: 3.5,
  },
];

// Reusable component for stars
const RatingStars = ({ rating }: { rating: number }) => {
  const stars = Array.from({ length: Math.floor(rating) }, (_, index) => (
    <FaStar key={index} className="text-yellow-400" />
  ));
  return <div className="flex text-yellow-400">{stars}</div>;
};

export default function Shirts() {
  return (
    <div className="w-full h-auto mt-10 px-6">
      <h1 className="text-2xl md:text-4xl font-bold mb-2 pl-2">Casual</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-2 pl-2">
        {Product.map((data) => (
          <div key={data.id} className="rounded-[20px] px-2">
            {/* Image Container */}
            <div className="w-full h-[230px] bg-[#F0EEED] rounded-[20px] overflow-hidden">
              <Image
                src={data.image}
                alt={data.title}
                className="w-full h-full object-cover"
                width={230}
                height={230}
              />
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
                {data.old_price && parseFloat(data.price.substring(1)) < parseFloat(data.old_price.substring(1)) && (
                  <span className="text-red-500 ml-2 font-semibold">Discount</span>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}



  
  