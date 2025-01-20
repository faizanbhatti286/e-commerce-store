export default function Size() {
    return (
      <div className="w-full md:w-[247px] h-full md:h-[274px] gap-[20px] pt-2">
        <p className="font-bold mb-4 mt-2 text-xl pl-5">Size</p>
        <div className="grid grid-cols-2 gap-3 mt-1">
          {[
            "XX-Small", "X-Small", "Small", "Medium", "Large", "X-Large", "XX-Large", "3X-Large", "4X-Large"
          ].map((size) => (
            <div
              key={size}
              className="h-[40px] flex justify-center items-center rounded-full bg-[#F0F0F0] text-gray-400 hover:bg-black hover:text-white cursor-pointer"
            >
              {size}
            </div>
          ))}
        </div>
      </div>
    );
  }
  

