"use client"; 

import { FaStar } from "react-icons/fa"; 
import Image from "next/image";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Check, Minus, Plus } from "lucide-react";
import { useState } from "react";
import Review from "./review";
import ProductDetailPage from "./alsolike";
import Link from "next/link";

// Product data interface
interface IProducts {
  title: string;
  price: string;
  id: number;
  rating?: number;
  old_price?: string;
  image: string;
  img1: string;
  img2: string;
  img3: string;
}

// Sample product data
const products: IProducts[] = [
  {
    id: 1,
    image: "/images/pic5.png",
    title: "One Life Graphic T-shirt",
    price: "$260",
    old_price: "$230",
    rating: 4.5,
    img1: "/images/pic9.png",
    img2: "/images/pic10.png",
    img3: "/images/pic11.png",
  },
  {
    id: 2,
    image: "/images/pic6.png",
    title: "COURAGE GRAPHIC T-SHIRT",
    price: "$145",
    old_price: "",
    rating: 4.0,
    img1: "/images/pic9.png",
    img2: "/images/pic10.png",
    img3: "/images/pic11.png",
  },
  {
    id: 3,
    image: "/images/pic7.png",
    title: "LOOSE FIT BERMUDA SHORTS",
    price: "$80",
    rating: 3.5,
    img1: "/images/pic9.png",
    img2: "/images/pic10.png",
    img3: "/images/pic11.png",
  },
  {
    id: 4,
    image: "/images/pic8.png",
    title: "FADED SKINNY JEANS",
    price: "$210",
    old_price: "",
    rating: 4.7,
    img1: "/images/pic9.png",
    img2: "/images/pic10.png",
    img3: "/images/pic11.png",
  },
];

// Reusable component for stars
const RatingStars = ({ rating }: { rating: number }) => {
  const totalStars = 5;
  const fullStars = Math.floor(rating); // Full stars
  const halfStar = rating % 1 >= 0.5 ? 1 : 0; // Half star if necessary
  const emptyStars = totalStars - fullStars - halfStar; // Empty stars

  const stars = [
    ...Array(fullStars).fill(<FaStar key="full" className="text-yellow-400" />),
    ...Array(halfStar).fill(<FaStar key="half" className="text-yellow-300" />),
    ...Array(emptyStars).fill(<FaStar key="empty" className="text-gray-300" />),
  ];

  return <div className="flex">{stars}</div>;
};

export default function Pro_Detail() {
  const { id } = useParams();
  const productId = id ? Number(id) : null;
  const [quantity, setQuantity] = useState<number>(1);

  // Find the product by its ID
  const item = products.find((item) => item.id === productId);

  if (!item) {
    return (
      <div className="text-center mt-10">
        <h1 className="text-2xl font-semibold">Product not found</h1>
        <p className="text-gray-600 mt-3">Sorry, the product you are looking for is not available.</p>
      </div>
    );
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center sm:justify-evenly sm:mt-10 p-5 sm:p-0">
        {/* Left: product images */}
        <div className="flex sm:flex-col justify-between items-center w-full sm:w-[152px] order-2 sm:order-1">
          <Image
            src={item.img1}
            className="w-[100px] sm:w-full h-[100px] sm:h-[150px] rounded-[20px]"
            alt={item.title}
            width={100}
            height={100}
            aria-label={`Image of ${item.title}`}
          />
          <Image
            src={item.img2}
            className="w-[100px] sm:w-full h-[100px] sm:h-[150px] sm:mt-3 rounded-[20px]"
            alt={item.title}
            width={100}
            height={100}
          />
          <Image
            src={item.img3}
            className="w-[100px] sm:w-full h-[100px] sm:h-[150px] sm:mt-3 rounded-[20px]"
            alt={item.title}
            width={100}
            height={100}
          />
        </div>

        {/* Mid: main product image */}
        <div className="w-full sm:w-[444px] h-[260px] sm:h-[500px] mt-2 sm:mt-0 order-1 sm:order-2 rounded-[20px]">
          <Image
            src={item.img1}
            alt={item.title}
            className="w-full h-[95%] rounded-[20px]"
            width={300}
            height={300}
            aria-label={item.title}
          />
        </div>

        {/* Right: product details */}
        <div className="w-full sm:w-[600px] h-[500px] mt-3 order-3">
          <h1 className="text-4xl leading-[48px] font-bold">{item.title}</h1>

          {/* Display Rating */}
          {item.rating && <RatingStars rating={item.rating} />}
          
          {/* Display Price and Old Price */}
          <div className="flex items-center mt-3">
            <p className="font-bold text-xl">{item.price}</p>
            {item.old_price && (
              <span className="text-gray-400 ml-3 line-through">{item.old_price}</span>
            )}
            {item.old_price && parseFloat(item.price.substring(1)) < parseFloat(item.old_price.substring(1)) && (
              <span className="text-red-500 ml-3 font-semibold">Discount</span>
            )}
          </div>

          <p className="mt-3 text-gray-600">
            This graphic t-shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
          </p>
          <hr className="my-4" />

          {/* Select color */}
          <div className="mt-5">
            <p className="text-gray-500">Select Colors</p>
            <div className="flex space-x-3 mt-2">
              {["#4F4631", "#314F4A", "#31344F"].map((color, index) => (
                <div
                  key={index}
                  className="w-[37px] h-[37px] rounded-full flex justify-center items-center cursor-pointer hover:opacity-80 hover:border-2 hover:border-black"
                  style={{ backgroundColor: color }}
                  aria-label={`Color option ${index + 1}`}
                >
                  <Check className="text-white opacity-0 hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>
          <hr />

          {/* Choose size */}
          <div className="mt-4">
            <p className="text-gray-500">Choose Size</p>
            <div className="flex space-x-3 mt-2">
              {["Small", "Medium", "Large", "X-Large"].map((size) => (
                <div 
                  key={size} 
                  className="w-[80px] h-[40px] flex justify-center items-center rounded-[62px] bg-[#F0F0F0] text-gray-400 hover:bg-black hover:text-white cursor-pointer"
                  aria-label={`Size option ${size}`}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>
          <hr />

          {/* Quantity selector */}
          <div className="w-[100px] h-[40px] flex justify-between p-3 items-center rounded-[62px] bg-[#F0F0F0] text-gray-400 mt-5">
            <button onClick={decreaseQuantity} className="cursor-pointer" aria-label="Decrease quantity">
              <Minus />
            </button>
            <span>{quantity}</span>
            <button onClick={increaseQuantity} className="cursor-pointer" aria-label="Increase quantity">
              <Plus />
            </button>
          </div>

          {/* Add to Cart Button */}
          <Link href={"/cart"}>
            <Button className="bg-black text-white w-[300px] hover:bg-transparent hover:text-black border-2 border-black mt-5">
              Add to Cart
            </Button>
          </Link>
        </div>
      </div>

      {/* Additional components */}
      {item && (
        <>
          <Review />
          <ProductDetailPage />
        </>
      )}
    </div>
  );
};





