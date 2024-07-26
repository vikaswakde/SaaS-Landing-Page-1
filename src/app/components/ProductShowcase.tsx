"use client";
import Image from "next/image";
import React, { useRef } from "react";
import productImage from "../../assets/images/app-screen.png";
import { motion, useScroll, useTransform } from "framer-motion";

const ProductShowcase = () => {
  const appImage = useRef<HTMLImageElement>(null);
  const { scrollYProgress } = useScroll({
    target: appImage,
    offset: ["start end", "end end"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [20, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.1, 1]);

  return (
    <div className="bg-black text-white py-[72px] bg-gradient-to-b from-black to-[#5D2CA8] sm:py-24">
      <div className="container">
        <h2 className="text-5xl sm:text-6xl  font-bold text-center tracking-tighter">
          Intuitive interface
        </h2>
        <div className="max-w-xl mx-auto ">
          <p className="text-center pt-5 text-xl text-white/70">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes,
            one task at a time.
          </p>
        </div>
        <motion.div
          style={{
            opacity,
            rotateX,
            transformPerspective: "700px",
          }}
        >
          <Image
            src={productImage}
            alt="product image"
            className="pt-14 mx-auto"
            ref={appImage}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ProductShowcase;
