"use client";
import clsx from "clsx";
import React, { useState } from "react";
import { BiMinusCircle } from "react-icons/bi";
import { FaPlusCircle } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
const fqyData = [
  {
    id: 1,
    question: "What payment methods do you accept?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolordignissimos labore sed voluptates consequatur,delectus minima id ea molestiae provident?",
  },
  {
    id: 2,
    question: "How does the pricing work for teams?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolordignissimos labore sed voluptates consequatur,delectus minima id ea molestiae provident?",
  },
  {
    id: 3,
    question: "Can I change my plan later?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolordignissimos labore sed voluptates consequatur,delectus minima id ea molestiae provident?",
  },
  {
    id: 4,
    question: "Is my data secure?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolordignissimos labore sed voluptates consequatur,delectus minima id ea molestiae provident?",
  },
];

interface accordionProps {
  id: number;
  question: string;
  answer: string;
}

export const AccordionItem = ({ id, question, answer }: accordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
      <div className="flex  items-center py-7 border-b border-gray-400">
        <h4 className="text-lg font-bold flex-1  -tracking-tight">
          {question}
        </h4>
        <span>
          {isOpen ? (
            <BiMinusCircle className="h-6 w-6" />
          ) : (
            <FaPlusCircle className="h-6 w-6" />
          )}
        </span>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, paddingTop: 0, height: 0, paddingBottom: 0 }}
            animate={{
              opacity: 1,
              paddingTop: "16px",
              paddingBottom: "4px",
              height: "6rem",
            }}
            exit={{ opacity: 0, paddingTop: 0, height: 0, paddingBottom: 0 }}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FYQ = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24 bg-gradient-to-b from-[#5D2CA8] to-black">
      <div className="container">
        <h2 className="font-bold text-5xl sm:text-6xl sm:max-w-2xl mx-auto text-center tracking-tight">
          Frequently asked questions
        </h2>
        <div className="pt-12 sm:max-w-2xl mx-auto">
          {fqyData.map(({ id, question, answer }) => (
            <AccordionItem
              key={id}
              id={id}
              question={question}
              answer={answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FYQ;
