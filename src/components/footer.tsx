import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";
import { CiFacebook, CiTwitter } from "react-icons/ci";
import NewsLetter from "./newletter";

export default function Footer() {
    return ( 
      <>
        <main className="bg-[#F0F0F0] relative p-7 sm:px-7 md:px-12 w-full h-full md:h-[550px] sm:h-[846px] flex flex-col justify-start items-center mt-32">
            {/* Adjusted the margin-top to ensure the newsletter is placed above content */}
             <span className="absolute md:top-[-180px] sm:top-[-120px] md:mt-[-2] sm:mt-7 ">
              <NewsLetter/>
             </span>

            <div className="w-full h-auto flex flex-col sm:flex-row md:flex-row items-start mt-32 md:mt-20 border-b-2 pt-3 pb-12">
                {/* Top Section */}
                <div className="w-full sm:w-full md:w-[40%] mt-5">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">SHOP.CO</h1>
                    <p className="mt-4 text-xl sm:text-lg md:text-xl">
                        We have clothes that suits your style and which you&apos;re proud to wear. From women to men.
                    </p>
                    <div className="flex space-x-2 mt-5">
                        <CiTwitter className="text-xl" />
                        <CiFacebook className="text-xl" />
                        <FaInstagram className="text-xl" />
                        <FaGithub className="text-xl" />
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 justify-between sm:place-items-start md:place-items-center mt-6 sm:mt-6 md:mt-0">
                    {/* Box 1 */}
                    <div className="mt-3">
                        <h2 className="text-xl sm:text-lg md:text-xl">Company</h2>
                        <ul className="space-y-1">
                            <li className="font-sans">About</li>
                            <li className="font-sans">Features</li>
                            <li className="font-sans">Works</li>
                            <li className="font-sans">Career</li>
                        </ul>
                    </div>

                    {/* Box 2 */}
                    <div>
                        <h2 className="text-xl sm:text-lg md:text-xl mt-4">Help</h2>
                        <ul className="space-y-1">
                            <li className="font-sans">Customer Support</li>
                            <li className="font-sans">Delivery Details</li>
                            <li className="font-sans">Terms & Conditions</li>
                            <li className="font-sans">Privacy Policy</li>
                        </ul>
                    </div>

                    {/* Box 3 */}
                    <div className="space-y-1 mt-4 sm:mt-4 md:mt-0">
                        <h2 className="text-xl sm:text-lg md:text-xl">FAQ</h2>
                        <ul>
                            <li className="font-sans">Account</li>
                            <li className="font-sans">Manage Deliveries</li>
                            <li className="font-sans">Orders</li>
                            <li className="font-sans">Payments</li>
                        </ul>
                    </div>

                    {/* Box 4 */}
                    <div className="space-y-1 mt-5 sm:mt-5 md:mt-0">
                        <h2 className="text-xl sm:text-lg md:text-xl">Resources</h2>
                        <ul>
                            <li className="font-sans">Free eBooks</li>
                            <li className="font-sans">DevelopmentTutorial</li>
                            <li className="font-sans">How to - Blog</li>
                            <li className="font-sans">Youtube Playlist</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Footer bottom section */}
            <div className="w-full flex flex-col sm:flex-row md:flex-row items-center lg:items-center pt-12 sm:mt-6 md:mt-7 lg:mt-10 justify-between">
                <p className="text-xs sm:text-sm md:text-sm lg:text-sm">Shop.co © Made by Faizan Bhatti, All Rights Reserved</p>
                <div className="flex justify-center mt-5 sm:mt-0 lg:mt-0">
                    <Image
                        src={"/images/paylogo.png"}
                        alt="Payment Logos"
                        height={30}
                        width={281}
                    />
                </div>
            </div>
        </main>
      </>
    );
}


