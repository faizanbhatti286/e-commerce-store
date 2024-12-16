"use client";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import React from "react";
import { Check, Minus, Plus } from "lucide-react";
import { useParams } from "next/navigation";

const Product = [
  {
    id: 1,
    image: "/images/pic5.png",
    title: "VERTICAL STRIPED SHIRT",
    price: "$212",
    old_price: "$232",
    rating: 4.7,
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

export default function ProductDetail() {
  const params = useParams();
  const productdetail = params.productdetail;
  const item = Product.find((item) => item.id === Number(productdetail));

  // Ensure hooks are always called before conditional rendering.
  const [selectedSize, setSelectedSize] = React.useState('');
  const [quantity, setQuantity] = React.useState(1);
  const sizes = ['Small', 'Medium', 'Large', 'Xlarge'];

  if (!item) {
    return <h1>Product not found</h1>;
  }

  const rating = item.rating;
  const filledStars = Array(Math.floor(rating)).fill(<FaStar className="text-yellow-400" />);
  const emptyStars = Array(5 - Math.floor(rating)).fill(<FaStar className="text-gray-400" />);
  const stars = [...filledStars, ...emptyStars];

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <div className="flex flex-col md:flex-row justify-center sm:justify-evenly sm:mt-10 p-5 sm:p-0">
      {/* Left: Thumbnail images */}
      <div className="flex sm:flex-col justify-between items-center w-full sm:w-[152px] order-2 sm:order-1">
        <Image
          src={item.img1}
          className="w-[100px] sm:w-full h-[100px] sm:h-[150px] rounded-[20px]"
          alt="productdetail"
          width={100}
          height={100}
        />
        <Image
          src={item.img2}
          className="w-[100px] sm:w-full h-[100px] sm:h-[150px] sm:mt-3 rounded-[20px]"
          alt="productdetail"
          width={100}
          height={100}
        />
        <Image
          src={item.img3}
          className="w-[100px] sm:w-full h-[100px] sm:h-[150px] sm:mt-3 rounded-[20px]"
          alt="productdetail"
          width={100}
          height={100}
        />
      </div>

      {/* Middle: Main product image */}
      <div className="w-full sm:w-[444px] h-[260px] sm:h-[500px] mt-5 sm:mt-0 order-1 sm:order-2 rounded-[20px]">
        <Image
          src={item.img1}
          alt={item.title}
          className="w-full h-[95%] rounded-[20px]"
          width={300}
          height={300}
        />
      </div>

      {/* Right: Product details */}
      <div className="w-full sm:w-[600px] h-[500px] mt-3 order-3">
        <h1 className="text-2xl md:text-3xl font-bold">{item.title}</h1>
        <div className="flex text-yellow-400">{stars}</div>
        <p className="font-bold mt-1">
          {item.price}
          {item.old_price && <span className="text-gray-500 line-through ml-2">{item.old_price}</span>}
        </p>
        <p>
          This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
        </p>

        {/* Select Color */}
        <div className="mt-5">
          <p className="text-gray-500">Select Colors</p>
          <div className="flex space-x-3 mt-2">
            {['#4F4631', '#314F4A', '#31344F'].map((color, index) => (
              <div
                key={`color-${color}-${index}`} // Ensuring uniqueness with color value and index
                className="w-[37px] h-[37px] rounded-full flex justify-center items-center"
                style={{ backgroundColor: color }}
              >
                <Check className="text-white opacity-0 hover:opacity-100 cursor-pointer" />
              </div>
            ))}
          </div>
        </div>

        {/* Choose Size */}
        <div className="mt-4">
          <p className="text-gray-500">Choose size</p>
          <div className="flex space-x-3 mt-2">
            {sizes.map((size, index) => (
              <div
                key={`size-${size}-${index}`} // Ensuring uniqueness with size value and index
                className={`w-[80px] h-[40px] flex justify-center items-center rounded-[62] 
                  ${selectedSize === size ? 'bg-black text-white' : 'bg-[#F0F0F0] text-gray-400'}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </div>
            ))}
          </div>
        </div>

        {/* Quantity & Add to Cart */}
        <div className="flex justify-start items-center mt-7 space-x-4">
          <div className="w-[80px] h-[40px] flex justify-between p-3 items-center rounded-[62] bg-[#F0F0F0] text-gray-400">
            <Minus onClick={decreaseQuantity} />
            {quantity}
            <Plus onClick={increaseQuantity} />
          </div>
          <button className="bg-black text-white w-[300px] h-[30px]">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
