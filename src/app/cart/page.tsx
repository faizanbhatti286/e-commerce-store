"use client";
import Image from "next/image";
import React, { useState } from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa"; // Import FaStar for ratings
import { BreadcrumbCollapsed } from "@/components/breadcrumb";

// Interface for TypeScript types
interface CartItem {
  id: number;
  image: string;
  title: string;
  size: string;
  color: string;
  price: string;
  quantity: number;
  rating: number; // Add rating field to CartItem
}

// Mock product data
const initialProducts: CartItem[] = [
  {
    id: 1,
    image: "/images/pic13.png",
    title: "Gradient Graphic T-shirt",
    size: "large",
    color: "white",
    price: "$145",
    quantity: 1,
    rating: 4, // Rating out of 5
  },
  {
    id: 2,
    image: "/images/pic14.png",
    title: "Polo with Tipping Details",
    size: "large",
    color: "white",
    price: "$180",
    quantity: 1,
    rating: 5, // Rating out of 5
  },
  {
    id: 3,
    image: "/images/pic15.png",
    title: "Black Striped T-shirt",
    size: "large",
    color: "white",
    price: "$120",
    quantity: 1,
    rating: 3, // Rating out of 5
  },
];

// Reusable component for stars
const RatingStars = ({ rating }: { rating: number }) => {
  const stars = Array.from({ length: Math.floor(rating) }, (_, index) => (
    <FaStar key={index} className="text-yellow-400" />
  ));
  return <div className="flex text-yellow-400">{stars}</div>;
};

export default function CartPage() {

  const [products, setProducts] = useState<CartItem[]>(initialProducts);

  const decreaseQuantity = (id: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  const increaseQuantity = (id: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const removeItem = (id: number) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  const calculateTotal = () => {
    return products.reduce(
      (total, product) =>
        total + parseFloat(product.price.replace("$", "")) * product.quantity,
      0
    );
  };

  return (
    <>
      <div className="pl-5">
        <BreadcrumbCollapsed/> {/* Use Breadcrumb here */}
        <h1 className="text-4xl font-bold mt-8 mb-6 md:pl-[150px]">Your Cart</h1>
      </div>
      <div className="flex flex-col md:flex-row mt-6 gap-8 justify-center">
        {/* Left side - Product list */}
        <div className="md:w-[715px] h-[518px] p-4 border border-gray-300 rounded-[20px] relative">
          {products.map((item) => (
            <div
              key={item.id}
              className=" w-full flex items-center gap-4 mb-6 pb-4 border-b-2 relative"
            >
              <button
                onClick={() => removeItem(item.id)}
                className="absolute right-0 top-0 text-xl text-red-600 mt-[-4px] mr-[-1px]"
              >
                <RiDeleteBin5Fill />
              </button>

              <div className="w-[124px] h-[124px] rounded-[16px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={124}
                  height={124}
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col justify-between w-full">
                <h3 className="font-bold">{item.title}</h3>
                <p className="text-sm">Size: {item.size}</p>
                <p className="text-sm">Color: {item.color}</p>
                <p className="text-sm font-bold">{item.price}</p>

                {/* Rating Stars */}
                <RatingStars rating={item.rating} />

                <div className="flex items-center gap-2 mt-2 justify-end">
                  <div className="flex items-center gap-2 border border-gray-300 bg-[#F0F0F0] text-gray-400 rounded-[50px] p-1">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="text-xl p-1"
                    >
                      <Minus />
                    </button>
                    <span className="px-2">{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="text-xl p-1"
                    >
                      <Plus />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right side - Cart summary */}
        <div className="md:w-[495px] h-[350px] md:h-[400px] border rounded-[20px] flex flex-col justify-start p-6">
          <div className="w-[90%] space-y-2">
            <h1 className="text-xl font-semibold">Order Summary</h1>
            <p className="flex justify-between">
              Subtotal <span>${calculateTotal().toFixed(2)}</span>
            </p>
            <p className="flex justify-between">
              Discount (-20%) <span>$10.00</span>
            </p>
            <p className="flex justify-between">
              Delivery Fee <span>${(calculateTotal() * 0.07).toFixed(2)}</span>
            </p>
            <hr />
            <p className="flex justify-between font-bold mt-4 text-xl">
              Total{" "}
              <span>
                ${(
                  calculateTotal() + 10 + calculateTotal() * 0.07
                ).toFixed(2)}
              </span>
            </p>
          </div>

          <div className="flex gap-2 w-full mt-4">
            <input
              className="w-full md:w-[326px] h-[48px] bg-[#F0F0F0] py-2 px-5 rounded-[16px] text-gray-600 outline-none"
              placeholder="Add promo code"
            />
            <Button className="w-full md:w-[119px] h-[48px] rounded-[62px] bg-black text-white">
              Apply
            </Button>
          </div>

          <Button className="w-full md:w-[450px] h-[60px] rounded-[62px] bg-black text-white py-2 mt-4">
            Go To Checkout
            <FaArrowRight />
          </Button>
        </div>
      </div>
    </>
  );
}


















