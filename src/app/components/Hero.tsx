"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import ArrowWIcon from "../../assets/icons/arrow-w.svg";
import cursorImage from "../../assets/images/cursor.png";
import messageImage from "../../assets/images/message.png";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="bg-black text-white py-[4.5rem] bg-[linear-gradient(to_bottom,#200D42_0%,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] relative overflow-clip">
      <div className="absolute h-[375px] w-[750px] sm:w-[1538px] sm:h-[768px] lg:w-[2400px] lg:h-[1200px]  left-1/2 -translate-x-1/2 top-[calc(100%-96px)] sm:top-[calc(100%-110px)] bg-black rounded-[100%] border border-[#B48CDE] bg-[radial-gradient(closest-side,#000000_82%,#9560EB_100%)]" />
      <div className="container relative">
        <div className="flex items-center justify-center">
          <Link
            className="border border-white/30 rounded-lg text-center px-2 py-1 inline-flex gap-3"
            href={"#"}
          >
            <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] text-transparent bg-clip-text [-webkit-background-clip:text]">
              Version 2.0 is here
            </span>
            <div className="inline-flex items-center justify-center gap-1">
              <span>Read More</span>
              <ArrowWIcon />
            </div>
          </Link>
        </div>
        <div className="flex justify-center mt-8">
          <div className="inline-flex relative">
            <h1 className=" font-bold text-7xl sm:text-9xl tracking-tighter leading-[72px]">
              One Task <br />
              at a Time
            </h1>
            <motion.div
              className="absolute top-[108px] right-[476px] hidden sm:inline"
              drag
              dragSnapToOrigin
            >
              <Image
                src={cursorImage}
                alt=""
                className="max-w-none"
                width={200}
                height={200}
                draggable="false"
              />
            </motion.div>
            <motion.div
              className="absolute top-[56px] left-[498px] hidden sm:inline"
              drag
              dragSnapToOrigin
            >
              <Image
                src={messageImage}
                alt=""
                className="max-w-none"
                width={200}
                height={200}
                draggable="false"
              />
            </motion.div>
          </div>
        </div>
        <div className="pt-8 max-w-md mx-auto">
          <p className="text-xl text-center leading-7 text-white">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </p>
        </div>
        <div className="pt-8 flex items-center justify-center  ">
          <Link
            className="bg-white text-black font-medium text-base lg:text-[20px] h-[48px] py-3 px-4 rounded-xl text-center flex items-center justify-center "
            href={"#"}
          >
            Get for Free
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
