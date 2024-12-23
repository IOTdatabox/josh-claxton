import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import Img from "../../smallComp/image/Img";
export default function MyName() {
  const router = useRouter();
  return (
    <div
      className="h-full flex flex-col justify-center
      px-8 2xl:px-72 xl:px-56 lg:px-32  md:px-28 sm:px-8 py-24 sm:py-32 "
    >
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: 0, duration: 0 },
          y: { delay: 0, duration: 0 },
        }}
        className="text-gray-300 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4"
      >
        Josh Claxton
      </motion.h1>
      <motion.h2
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: 0, duration: 0 },
          y: { delay: 0, duration: 0 },
        }}
        className="text-gray-800 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4"
      >
        Making full-featured web applications.
      </motion.h2>
    </div>
  );
}
