import Image from "next/image";
import { FaStar } from "react-icons/fa"; // Corrected import
import React from "react";
import Link from "next/link";

// Define the structure for product data
interface Topselling {
  id: number;
  image: string;
  title: string;
  price: string;
  old_price?: string;
  rating: number;
}

// Product data
const Product: Topselling[] = [
  {
    id: 1,
    image: "/images/pic5.png",
    title: "VERTICAL STRIPED SHIRT",
    price: "$212",
    old_price: "$232",
    rating: 4.7,
  },
  {
    id: 2,
    image: "/images/pic6.png",
    title: "COURAGE GRAPHIC T-SHIRT",
    price: "$145",
    old_price: "",
    rating: 4.0,
  },
  {
    id: 3,
    image: "/images/pic7.png",
    title: "LOOSE FIT BERMUDA SHORTS",
    price: "$80",
    rating: 3.5,
  },
  {
    id: 4,
    image: "/images/pic8.png",
    title: "FADED SKINNY JEANS",
    price: "$210",
    old_price: "",
    rating: 4.7,
  },
];

// Reusable component for rendering the star rating
const RatingStars = ({ rating }: { rating: number }) => {
  const stars = [];
  for (let i = 0; i < Math.floor(rating); i++) {
    stars.push(<FaStar key={`full-${i}`} className="text-yellow-400" />);
  }
  if (rating % 1 >= 0.5) {
    stars.push(<FaStar key={`half`} className="text-yellow-400 opacity-50" />);
  }
  return <div className="flex">{stars}</div>;
};

export default function Topselling() {
  return (
    <div className="w-full h-auto mt-10 pl-10">
      {/* Adjusted hr element width to match the image width */}
      <hr className="md:w-[1400px] border-[1px] mx-8 flex justify-center items-center" />
      
      <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-8 mt-20">TOP SELLING</h1>
      
      <div className="flex flex-col md:flex-row justify-center items-center md:justify-between px-8 mt-10">
        {Product.map((data) => (
          <div key={data.id} className="w-full md:w-1/4 rounded-[20px] p-4">
            {/* Image Container with Link */}
            <Link href={`/product/${data.id}`}>
              <div className="w-[190px] h-[190px] md:w-[290px] md:h-[290px] bg-[#F0EEED] rounded-[20px] overflow-hidden">
                <Image
                  src={data.image}
                  alt={data.title}
                  className="w-full h-full object-cover"
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
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Centered 'View All' Button */}
      <div className="flex justify-center mt-8 mb-12">
        <Link href="/top-selling">
          <button
            className="text-lg font-Satoshi font-medium text-black px-16 py-2 border-2 border-gray-200 rounded-full"
            aria-label="View all top selling items"
          >
            View All
          </button>
        </Link>
      </div>
    </div>
  );
}


