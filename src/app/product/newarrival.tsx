import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import React from "react";
import Link from "next/link";

// Interface for TypeScript types
interface NewArrival {
  id: number;
  image: string;
  title: string;
  price: string;
  old_price?: string;
  rating: number;
}

// Mock product data
const Product: NewArrival[] = [
  {
    id: 1,
    image: "/images/pic1.png",
    title: "T-SHIRT WITH TAPE DETAILS",
    price: "$120",
    rating: 4.5,
  },
  {
    id: 2,
    image: "/images/pic2.png",
    title: "SKINNY FIT JEANS",
    price: "$240",
    old_price: "$200",
    rating: 4.5,
  },
  {
    id: 3,
    image: "/images/pic3.png",
    title: "CHECKERED SHIRT",
    price: "$180",
    rating: 4.5,
  },
  {
    id: 4,
    image: "/images/pic4.png",
    title: "SLEEVE STRIPED T-SHIRT",
    price: "$130",
    old_price: "$160",
    rating: 4.7,
  },
];

// Reusable component for stars
const RatingStars = ({ rating }: { rating: number }) => {
  const stars = Array.from({ length: Math.floor(rating) }, (_, index) => (
    <FaStar key={index} className="text-yellow-400" />
  ));
  return <div className="flex text-yellow-400">{stars}</div>;
};

export default function Products() {
  return (
    <div className="w-full h-auto mt-15 pl-10">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center mt-20 mb-8">NEW ARRIVALS</h1>
      <div className="flex flex-col md:flex-row justify-center md:items-center md:justify-between px-8 mt-10">
        {Product.map((data) => {
          return (
            <div key={data.id} className="w-full md:w-1/4 rounded-[20px] p-4">
              {/* Image Container with Link */}
              <Link href={`/product/${data.id}`}>
                <div className="w-[190px] h-[190px] md:w-[290px] md:h-[290px] bg-[#F0EEED] rounded-[20px] overflow-hidden">
                  <Image
                    src={data.image}
                    alt={data.title}
                    className="w-full h-full object-cover "
                    width={230}
                    height={230}
                  />
                </div>
              </Link>

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
          );
        })}
      </div>

      {/* Centered 'View All' Button */}
      <div className="flex justify-center mt-8 mb-12">
        <Link href="/new-arrivals">
          <button
            className="text-lg font-Satoshi font-medium text-black px-16 py-2 border-2 border-gray-200 rounded-full"
            aria-label="View all new arrivals"
          >
            View All
          </button>
        </Link>
      </div>
    </div>
  );
}

