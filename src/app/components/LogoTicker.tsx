"use client";
import React from "react";

import acmeCorp from "../../assets/images/acme.png";
import quantumCorp from "../../assets/images/quantum.png";
import celestialCorp from "../../assets/images/celestial.png";
import echoCorp from "../../assets/images/echo.png";
import pulseCorp from "../../assets/images/pulse.png";
import Image from "next/image";
import { motion } from "framer-motion";

const LogoTicker = () => {
  const logoData = [
    { src: acmeCorp, alt: "acmeCorp" },
    { src: quantumCorp, alt: "quantumCorp" },
    { src: celestialCorp, alt: "celestialCorp" },
    { src: echoCorp, alt: "echoCorp" },
    { src: pulseCorp, alt: "pulseCorp" },
  ];
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-xl text-center text-white/70">
          Trusted by the world&apos;s most innovative teams
        </h2>
        <div className="overflow-hidden mt-9 before:content-[''] after:content-[''] before:absolute after:absolute before:h-full after:h-full before:w-20 after:w-20 relative after:right-0 before:left-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))] after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))]  before:z-10 after:z-50 ">
          <motion.div
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
            initial={{ translateX: 0 }}
            animate={{ translateX: "-50%" }}
            className="flex flex-none gap-16 pr-16"
          >
            {logoData.map(({ src, alt }) => (
              <Image
                src={src}
                alt={alt}
                key={alt}
                className="flex-none h-8 w-auto"
              />
            ))}
            {logoData.map(({ src, alt }) => (
              <Image
                src={src}
                alt={alt}
                key={alt}
                className="flex-none h-8 w-auto"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;
