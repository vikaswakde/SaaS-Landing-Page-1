import Image from "next/image";
import React from "react";
import EcoSystemIcon from "../../assets/icons/ecosystem.svg";
import Feature from "./Feature";

const featuresData = [
  {
    id: 1,
    title: "Integration Ecosystem",
    desc: "Enhance your productivity by connecting with your tools, keeping your essentials in one place.",
    headImg: "",
  },
  {
    id: 2,
    title: "Goal Setting and Tracking",
    desc: "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
    headImg: "",
  },
  {
    id: 3,
    title: "Secure Data Encryption",
    desc: "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
    headImg: "",
  },
];

const Features = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <div className="flex flex-col items-center">
          <h2 className="text-5xl sm:text-6xl font-bold text-center  tracking-tighter">
            Everything you need
          </h2>
          <div className="max-w-xl mx-auto">
            <p className="pt-5 text-center text-white/70 text-xl  ">
              Enjoy customizable lists, team work tools, and smart tracking all
              in one place. Set tasks, get reminders, and see your progress
              simply and quickly.
            </p>
          </div>
          <div className="flex flex-col gap-4 pt-16 sm:flex-row sm:gap-5  sm:max-w-3xl lg:max-w-5xl ">
            {featuresData.map(({ id, headImg, title, desc }) => (
              <Feature key={id} title={title} desc={desc} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
