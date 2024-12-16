import { IoLogoTwitter } from "react-icons/io";
import { RiFacebookFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import Image from "next/image";
import NewsLetter from "@/components/newletter";

export default function Footer() {
  return (
    <>
      <NewsLetter />
      <footer className="bg-[#F0F0F0] w-full h-auto pt-16 pb-8 px-4 sm:px-8 lg:px-20">
        <div className="max-w-[1440px] mx-auto pt-12 pb-0 flex flex-col lg:flex-row justify-between items-start gap-16 lg:h-[499px] lg:space-y-0">
          {/* Company Info Section */}
          <div className="flex flex-col gap-4 justify-start items-start">
            <h3 className="font-satoshi text-4xl font-bold mb-4">SHOP.CO</h3>
            <p className="font-satoshi text-sm text-[#00000099] mb-8 max-w-xs">
              We have clothes that suit your style and which you’re proud to wear. From women to men.
            </p>
            <div className="flex gap-4">
              <div className="h-[35px] w-[35px] rounded-full bg-white flex justify-center items-center">
                <IoLogoTwitter className="text-xl" aria-label="Twitter" />
              </div>
              <div className="h-[35px] w-[35px] rounded-full bg-black text-white flex justify-center items-center">
                <RiFacebookFill className="text-xl" aria-label="Facebook" />
              </div>
              <div className="h-[35px] w-[35px] rounded-full bg-white flex justify-center items-center">
                <FaInstagram className="text-xl" aria-label="Instagram" />
              </div>
              <div className="h-[35px] w-[35px] rounded-full bg-white flex justify-center items-center">
                <IoLogoGithub className="text-xl" aria-label="GitHub" />
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div className="flex flex-wrap lg:w-2/3 justify-between">
            <div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
              <h5 className="font-satoshi text-lg font-semibold mb-4 tracking-wide">COMPANY</h5>
              <ul className="font-satoshi text-sm text-[#00000099] space-y-4">
                <li>About</li>
                <li>Features</li>
                <li>Works</li>
                <li>Career</li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
              <h5 className="font-satoshi text-lg font-semibold mb-4 tracking-wide">HELP</h5>
              <ul className="font-satoshi text-sm text-[#00000099] space-y-4">
                <li>Customer Support</li>
                <li>Delivery Details</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
              <h5 className="font-satoshi text-lg font-semibold mb-4 tracking-wide">FAQ</h5>
              <ul className="font-satoshi text-sm text-[#00000099] space-y-4">
                <li>Account</li>
                <li>Deliveries</li>
                <li>Orders</li>
                <li>Payments</li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
              <h5 className="font-satoshi text-lg font-semibold mb-4 tracking-wide">RESOURCES</h5>
              <ul className="font-satoshi text-sm text-[#00000099] space-y-4">
                <li>Free eBooks</li>
                <li>Developer Tutorials</li>
                <li>How-to Blogs</li>
                <li>YouTube Playlists</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#0000001A] mt-0 mb-4"></div>

        {/* Footer Bottom Section */}
        <div className="flex flex-col-2 lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          <div className="font-satoshi text-sm text-[#00000099] text-center lg:text-left">
            Shop.co © 2000-2023, All Rights Reserved
          </div>
          <div className="flex justify-center">
            <Image
              src={"/images/paylogo.png"}
              alt="Payment Logos"
              height={30}
              width={281}
            />
          </div>
        </div>
      </footer>
    </>
  );
}
