import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"Contact"} text2={"Us"} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img src={assets.contact_img} className="w-full md:max-w-[480px]" />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl">Our Store</p>
          <p className="text-gray-500">5327,Willams Street,London</p>
          <p className="text-gray-500">Tel : 123-456-789</p>
          <p className="font-semibold text-xl text-gray-600">Carres</p>
          <p className="text-gray-500">Learn more about us.</p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore
          </button>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default Contact;
