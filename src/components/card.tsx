import { IoIosStar } from "react-icons/io";

interface Data {
  text: string;
  p: string;
  date?: string;
}

export default function Card(props: Data) {
  return (
    <div className="w-full max-w-[360px] lg:max-w-[610px] h-auto rounded-[20px] border border-[#0000001A] shadow-md p-4 mx-auto">
      <div className="relative">
        {/* Flex container for stars and three dots */}
        <div className="flex justify-between items-center mb-4">
          {/* Stars icon aligned to the left */}
          <div className="flex gap-1 text-xl text-[#FFC633]">
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
          </div>

          {/* Three dots icon aligned to the right */}
          <div className="text-gray-500 text-2xl">
            <div>...</div>
          </div>
        </div>

        {/* Reviewer Name aligned to the left */}
        <h3 className="text-[18px] sm:text-[20px] font-bold text-gray-800 mb-2 text-center sm:text-left">{props.text}</h3>

        {/* Review Text */}
        <p className="text-[14px] sm:text-[16px] text-[#00000099] text-justify mb-4">
          {props.p.length > 150 ? `${props.p.slice(0, 150)}...` : props.p} {/* Truncate text if too long */}
        </p>

        {/* Date */}
        {props.date && (
          <p className="text-gray-600 text-sm sm:text-md font-normal mt-2 text-center sm:text-left">
            Posted on {props.date}
          </p>
        )}
      </div>
    </div>
  );
}







