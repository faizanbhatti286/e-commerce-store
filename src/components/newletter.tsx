import { TfiEmail } from "react-icons/tfi";

export default function NewsLetter() {
    return (
        <div className="lg:w-[1360px] md:h-[180px] w-[340px] h-[280px] top-[-150px] rounded-[20px] bg-[#000000] relative lg:left-[22px] lg:right-[23px] md:mr-4  lg:top-[90px] sm:top-[20px] md:mt-3 ">
            <div className="md:flex justify-between items-start h-full">
                {/* Heading - No changes to this part */}
                <h5 className="lg:w-[555px] lg:h-[90px] md:w-[297px] h-[105] font-extrabold lg:text-[35px] text-[32px] lg:leading-[50px] leading-[35px] text-[#FFFFFF] lg:pt-[40px] pt-[32px] lg:pl-[40px] pl-[24px]">
                    STAY UPTO DATE ABOUT OUR LATEST OFFERS
                </h5>
                {/* Content centered */}
                <div className="lg:mt-[28px] mt-[34px] lg:ml-[160px] md:ml-[10px] flex flex-col justify-center items-center ">
                    {/* Email Input */}
                    <div className="lg:w-[349px] lg:h-[48px] w-[311px] h-[42px] rounded-[62px] bg-[#FFFFFF] flex text-[#00000066] ml-12 mr-12 lg:mt-4  mt-4">
                        <TfiEmail className="ml-5 mt-4" />
                        <input 
                            type="email" 
                            placeholder="Enter your email address" 
                            className="py-[12px] px-[16px] leading-[21.6px] text-[20px] bg-transparent border-none outline-none w-full  " 
                        />
                    </div>
                    {/* Subscribe Button */}
                    <div className="lg:w-[349px] lg:h-[48px] w-[311px] h-[42px] rounded-[62px] bg-[#FFFFFF] text-[#000000] mt-2">
                        <p className="py-[12px] px-[16px] leading-[21.6px] text-[16px] text-center">Subscribe to Newsletter</p>
                    </div>
                </div>
            </div>
        </div>
    );
}


