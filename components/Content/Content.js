"use client";
import { contents } from "@/utils/infos";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";
const Content = () => {
  return (
    <div className="grid grid-cols-1  py-20 laptop:grid-cols-2 w-full justify-center  ">
      {/* contents */}
      <div className="">
        {contents.map((content, index) => (
          <motion.div
            key={index}
            variants={slideIn("left", "spring", index * 0.2, 1.5)} // Adjust parameters as needed
            initial="hidden"
            whileInView="show"
            className="flex justify-center items-start gap-4 tablet:gap-10 py-4"
          >
            <div className="min-w-[50px]">
              <Image
                src={content.img}
                width={22}
                height={10}
                alt={content.title}
              />
            </div>
            <div className="">
              <h2 className="text-[28px] font-bold text-[#fff]">
                {content.title}
              </h2>
              <p className="text-white overflow-hidden tablet:w-[500px]">
                {content.des}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      {/* contact form */}
      <form
        action=""
        className="bg-[#3185FF] sticky top-[100px]  duration-200 delay-75 ease-linear mt-20 laptop:mt-0  laptop:w-[500px]  h-[700px] rounded-2xl py-6 px-4 "
      >
        <div className="flex gap-4 justify-center items-center w-full ">
          <Image
            src={"/images/cntrlWhiteLogo.png"}
            width={60}
            height={60}
            alt={"white_logo"}
          />
          <div className="">
            <h4 className="text-[#fff] font-bold leading-[40px] text-[28px]">
              TRY IT FREE
            </h4>
            <p className="text-[#fff] text-[16px]">
              Take control of your AI today
            </p>
          </div>
        </div>
        <div className="w-[95%] tablet:w-[90%] py-6 mx-auto">
          <div className="w-full py-4 grid grid-cols-2 gap-4  mx-auto">
            <input
              className="px-6 py-6 text-[#000] border-0 font-semibold focus:border-0 outline-none focus:outline-none focus:shadow-outline placeholder:font-semibold placeholder:text-[#2665EB] rounded-full"
              placeholder="FIRST NAME"
              type="text"
            />
            <input
              className="px-6 py-6 text-[#000] border-0 font-semibold focus:border-0 outline-none focus:outline-none focus:shadow-outline placeholder:font-semibold  placeholder:text-[#2665EB] rounded-full"
              placeholder="LAST NAME"
              type="text"
            />
          </div>
          <input
            className="px-6 py-6 w-full text-[#000] font-semibold border-0 focus:border-0 outline-none focus:outline-none focus:shadow-outline placeholder:font-semibold  placeholder:text-[#2665EB] rounded-full"
            placeholder="E-MAIL"
            type="email"
          />

          <input
            className="px-6 my-4 py-6 w-full text-[#000] font-semibold border-0 focus:border-0 outline-none focus:outline-none focus:shadow-outline placeholder:font-semibold  placeholder:text-[#2665EB] rounded-full"
            placeholder="Phone"
            type="number"
          />

          <div className="bg-white rounded-full">
            <select
              id="experience"
              name="experience"
              className="block  w-full pl-6 py-6 pr-16 font-semibold rounded-full text-[#2665EB] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option selected disabled value="" className="text-[#2665EB]">
                {" "}
                AI Experience
              </option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>
          <input
            className="px-6 my-4 py-6 w-full text-[#000] font-semibold border-0 focus:border-0 outline-none focus:outline-none focus:shadow-outline placeholder:font-semibold  placeholder:text-[#2665EB] rounded-full"
            placeholder="Industry"
            type="text"
          />

          <button className="text-white border-2 border-[#fff]   duration-200 delay-100 ease-linear  px-6 py-5 rounded-full font-semibold  w-full relative">
            {" "}
            GET STARTED TODAY{" "}
            <Image
              src={"/images/rightArrow.png"}
              alt="arrow-icon"
              width={20}
              height={20}
              className="absolute top-[22px] right-[60px]"
            />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Content;
