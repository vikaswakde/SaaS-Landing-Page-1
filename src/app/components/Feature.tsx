"use client";
import EcoSystemIcon from "../../assets/icons/ecosystem.svg";
import React, { useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

const Feature = ({ title, desc }: { title: string; desc: string }) => {
  const border = useRef<HTMLDivElement>(null);
  const offsetX = useMotionValue(-100);
  const offsetY = useMotionValue(-100);
  let maskImageB = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`;
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (!border.current) return;
      const borderRect = border.current.getBoundingClientRect();
      offsetX.set(e.x - borderRect.x);
      offsetY.set(e.y - borderRect.y);
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);
  return (
    <div
      className=" border border-gray-300 text-center py-10 px-5 flex flex-col items-center sm:flex-1 rounded-xl relative"
      ref={border}
    >
      <motion.div
        className="absolute border-2 border-purple-500 inset-0 rounded-xl"
        style={{
          WebkitMaskImage: maskImageB,
          maskImage: maskImageB,
        }}
      ></motion.div>
      <div className="bg-white text-black h-14 w-14 inline-flex items-center justify-center  rounded-xl ">
        <EcoSystemIcon className="" />
      </div>
      <h4 className="font-bold pt-6 text-base">{title}</h4>
      <p className=" mt-2 text-white/70">{desc}</p>
    </div>
  );
};

export default Feature;
