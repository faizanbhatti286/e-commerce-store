"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

// Define the structure of the product data
interface ProductDetail {
  id: number;
  image: string;
  title: string;
  price: string;
  old_price?: string;
  rating: number;
  description: string;
}

// Sample product data (using const instead of let)
const ProductData: ProductDetail[] = [
  {
    id: 1,
    image: "/images/pic1.png",
    title: "T-SHIRT WITH TAPE DETAILS",
    price: "$120",
    rating: 4.5,
    description: "A stylish T-shirt with tape details perfect for casual wear.",
  },
  {
    id: 2,
    image: "/images/pic2.png",
    title: "SKINNY FIT JEANS",
    price: "$240",
    old_price: "$200",
    rating: 4.5,
    description: "Skinny fit jeans with a modern cut, comfortable and fashionable.",
  },
  // Add more products as needed
];

export default function ProductDetailPage() {
  const router = useRouter();
  const { productdetail } = router.query; // Get product ID from URL
  
  const [product, setProduct] = useState<ProductDetail | null>(null);

  useEffect(() => {
    if (productdetail) {
      const productId = parseInt(productdetail as string);
      const selectedProduct = ProductData.find((prod) => prod.id === productId);
      setProduct(selectedProduct || null);
    }
  }, [productdetail]); // Ensure useEffect runs when productdetail changes

  if (!product) {
    return <div>Loading...</div>; // Handle loading state
  }

  // Generate stars dynamically based on the rating
  const stars = [];
  for (let i = 0; i < Math.floor(product.rating); i++) {
    stars.push(<FaStar key={`full-${product.id}-${i}`} className="text-yellow-400" />);
  }
  if (product.rating % 1 >= 0.5) {
    stars.push(<FaStar key={`half-${product.id}`} className="text-yellow-400 opacity-50" />);
  }

  return (
    <div className="w-full h-auto mt-10 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">{product.title}</h1>
      <div className="flex flex-col md:flex-row justify-center items-center md:justify-between px-8 mt-10">
        <div className="w-full md:w-1/2 p-4">
          {/* Image Section */}
          <Image
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover"
            width={500}
            height={500}
          />
        </div>

        <div className="w-full md:w-1/2 p-4">
          {/* Product Details */}
          <p className="text-lg font-bold mb-2">{product.description}</p>
          <div className="flex text-yellow-400">{stars}</div>
          <p className="font-bold text-xl mt-2">{product.price}</p>
          {product.old_price && (
            <span className="text-gray-400 font-bold line-through ml-2">{product.old_price}</span>
          )}
        </div>
      </div>

      {/* View All Button */}
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

