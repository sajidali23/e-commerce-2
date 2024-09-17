import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" />
          <p className="w-full md:w-2/3 text-gray-600">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
          </p>
        </div>
        <div>
            <p className="text-xl font-medium mb-5ssss">Company</p>
            <ul className="flex flex-col gap-1 text-gray-600">
                <li>Home</li>
                <li>About Us</li>
                <li>Deliveryss</li>
                <li>vacy Policy</li>
            </ul>
        </div>
        <div>
            <p className="text-xl font-medium mb-5">Get In Touch</p>
            <ul className="flex flex-col gap-1 text-gray-600">
                <li>+91 123-456-789</li>
                <li>xyz@gamil.com</li>
            </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">Copyright 2024@ forver.com - All right reserved</p>
      </div>
    </div>
  );
};

export default Footer;
