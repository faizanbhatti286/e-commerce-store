"use client";

import Card from "@/components/card"; // Ensure the path is correct for your file structure

export default function Review() {
  const testimonials = [
    {
      text: "Samantha",
      p: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
      date: "2023-8-23",
    },
    {
      text: "Alex M.",
      p: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
      date: "2023-8-15",
    },
    {
      text: "Ethan R.",
      p: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
      date: "2023-8-16",
    },
    {
      text: "Olivia P.",
      p: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
      date: "2023-8-17",
    },
    {
      text: "Liam K.",
      p: "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
      date: "2023-8-18",
    },
    {
      text: "Ava H.",
      p: "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
      date: "2023-8-19",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center mx-auto gap-12 px-4 md:px-6 pt-3">
      <div className="w-full max-w-[1200px] flex justify-start items-center mx-auto mt-8">
        <h4 className="text-[#000000] text-[24px] sm:text-[28px] leading-[36px] font-bold text-left">
          All Reviews
        </h4>
      </div>

      {/* Reviews Grid Layout */}
      <div className="w-full max-w-[1200px] grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8 justify-items-center">
        {testimonials.map((testimonial, index) => (
          <div className="relative group" key={index}>
            {/* Pass props directly to the Card */}
            <Card
              text={testimonial.text}
              p={testimonial.p}
              date={testimonial.date} // Pass the date prop if available
            />
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="w-[232px] h-[52px] flex justify-center mt-2Application error: a client-side exception has occurred (see the browser console for more information).">
        <button className="bg-white text-black px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-200">
          Load More Reviews
        </button>
      </div>
    </div>
  );
}

