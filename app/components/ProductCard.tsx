import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

const ProductCard = ({
  name,
  price,
  img,
}: {
  name: string;
  price: string;
  img: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="productCard group w-full max-w-[260px] rounded-2xl bg-white overflow-hidden shadow-sm hover:shadow-2xl border border-gray-100 transition-shadow duration-300 cursor-pointer flex flex-col"
    >
      {/* Image Section */}
      <div className="relative h-64 w-full bg-gray-50 overflow-hidden flex items-center justify-center">
        {/* Optional: 'NEW' Badge to make it look like a real shop */}
        <div className="absolute top-3 left-3 z-10 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md shadow-sm text-xs font-bold tracking-wider text-gray-800">
          NEW
        </div>

        <motion.div
          className="w-full h-full p-4 relative "
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <Image
            src={img}
            fill
            alt="product"
            loading="eager"
            className="w-full h-full py-1  object-contain drop-shadow-md"
          />
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col gap-1 bg-white">
        <h1 className="text-lg font-bold text-gray-800 truncate group-hover:text-red-500 transition-colors duration-300">
          {name}
        </h1>

        <div className="price flex items-center mt-2">
          <div className="flex items-baseline gap-1">
            <span className="font-extrabold text-lg text-green-700">₹</span>
            <span className="text-2xl font-black text-gray-900 tracking-tight">
              {price}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
