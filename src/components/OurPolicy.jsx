import React from "react";
import { assets } from "../assets/assets";

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div>
        <img src={assets.exchange_icon} className="w-12s m-auto mb-5" />
        <p className="font-semibold">Easy Exchange</p>
        <p className="text-gray-400">We offer hassle free exchange policy</p>
      </div>
      <div>
        <img src={assets.quality_icon} className="w-12s m-auto mb-5" />
        <p className="font-semibold">5 Days Return Policy</p>
        <p className="text-gray-400">We provide 5 day's free return policy</p>
      </div>
      <div>
        <img src={assets.support_img} className="w-12 m-auto mb-5" />
        <p className="font-semibold">Customer Support</p>
        <p className="text-gray-400">24x7 Customer Online/Call Support</p>
      </div>
    </div>
  );
};

export default OurPolicy;
