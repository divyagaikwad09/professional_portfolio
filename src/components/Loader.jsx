import React from "react";
import { motion } from "framer-motion";

function Loader() {
  return (
    <div className="h-screen flex justify-center items-center bg-[#050816]">
      <div className="text-center">
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "linear",
          }}
          className="w-20 h-20 rounded-full border-4 border-indigo-500 border-t-transparent mx-auto"
        />

        <h2 className="mt-8 text-3xl font-bold gradient-text">
          Divya Gaikwad
        </h2>

        <p className="text-gray-400 mt-2">
          Loading Portfolio...
        </p>
      </div>
    </div>
  );
}

export default Loader;