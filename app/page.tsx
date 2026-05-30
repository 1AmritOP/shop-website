"use client";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { motion } from "motion/react";
import ProductCard from "./components/ProductCard";
import { ArrowBigRight } from "lucide-react";
import React, { useEffect } from "react";
import { IProduct } from "./models/product";

export default function Home() {
  const [products, setProducts] = React.useState([]);
  const fetchProducts = async () => {
    try {
      const response = await fetch("/api/product");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  // fetchProducts();
  return (
    <>
      <div className="relative h-screen w-full bg-linear-to-br from-red-600 via-red-500 to-red-700 overflow-hidden">
        {/* Navbar absolute positioning so it doesn't push the centered text down */}
        <div className="absolute top-0 left-0 w-full z-50">
          <Navbar />
        </div>

        {/* 
    Added subtle radial gradient behind the text for a "glowing" spotlight effect 
  */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0%,transparent_60%)] pointer-events-none"></div>

        {/* 
    Typography Upgrades:
    - `leading-[0.85]` and `tracking-tighter` makes massive text look cohesive like a block.
    - `uppercase font-black` gives it a high-end fashion magazine feel.
    - `text-white drop-shadow-2xl` makes it stand out heavily from the background.
  */}
        <div className="relative z-10 h-full w-full flex flex-col items-center justify-center text-[22vw] sm:text-[16vw] md:text-[10vw] lg:text-[9vw] font-black uppercase tracking-tighter leading-[0.85] text-white drop-shadow-2xl select-none">
          {/* Line 1: GIRL'S */}
          <div className="flex overflow-hidden pb-2">
            <motion.h1
              initial={{ opacity: 0, y: -80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} // Smoother custom ease
            >
              Girl
              <span className="text-yellow-300 drop-shadow-[0_0_15px_rgba(253,224,71,0.5)]">
                &apos;
              </span>
            </motion.h1>
            <motion.span
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              s
            </motion.span>
          </div>

          {/* Line 2: FASHION */}
          <div className="flex overflow-hidden pb-2 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-200">
            <motion.h1
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
              Fash
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
              ion
            </motion.h1>
          </div>

          {/* Line 3: HUB */}
          <div className="flex gap-1 lg:gap-2">
            <motion.h1
              initial={{ opacity: 0, rotate: -60, x: -50 }}
              animate={{ opacity: 1, rotate: 0, x: 0 }}
              transition={{
                duration: 2,
                delay: 1,
                type: "spring",
                stiffness: 130,
                damping: 8,
                mass: 1,
              }}
              className="text-yellow-300"
            >
              H
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 2,
                delay: 1,
                type: "spring",
                stiffness: 130,
                damping: 8,
                mass: 1,
              }}
              className="text-yellow-300"
            >
              U
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, rotate: 60, x: 50 }}
              animate={{ opacity: 1, rotate: 0, x: 0 }}
              transition={{
                duration: 2,
                delay: 1,
                type: "spring",
                stiffness: 130,
                damping: 8,
                mass: 1,
              }}
              className="text-yellow-300"
            >
              B
            </motion.h1>
          </div>
        </div>
      </div>
      {/* langing page end */}

      {/* Product section start */}
      <div className="bgYellow pb-10">
        <div className="  red text-3xl md:text-5xl my-6 font-black h-full w-full flex items-center justify-center gap-2">
          <motion.h1
            animate={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
          >
            New
          </motion.h1>
          <motion.h1
            animate={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
          >
            Collection
          </motion.h1>
        </div>

        <div className=" flex gap-4 flex-wrap justify-center items-center">
          {
            products && products.map((product: IProduct, index) => (
              <ProductCard key={index} name={product.name} price={Number(product.price).toFixed(2)} img={product.img} />
            ))
          }
        </div>
      </div>

      {/* Product section end */}

      <div className=" text-3xl font-bold bgYellow red md:text-5xl py-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
        >
          Address
        </motion.h1>
      </div>

      <div className="Address bgYellow min-h-[70vh] grid grid-cols-1 lg:grid-cols-2 gap-10 py-16 px-6 md:px-12 lg:px-24">
        {/* Left Section: Details Card */}
        <div className="left flex flex-col justify-center items-center lg:items-start w-full h-full">
          <div className="bg-white/40 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-xl border border-white/50 flex flex-col gap-6 w-full max-w-lg">
            {/* Shop Name */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-500/20 pb-4">
              <span className="text-gray-700 font-bold uppercase tracking-wider text-sm">
                Shop Name
              </span>
              <div className="flex items-center gap-2">
                <span className="red text-red-500">
                  <ArrowBigRight size={22} />
                </span>
                <span className="font-extrabold text-gray-900 text-xl">
                  Girls Fashion HUB
                </span>
              </div>
            </div>

            {/* Address */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-500/20 pb-4">
              <span className="text-gray-700 font-bold uppercase tracking-wider text-sm">
                Address
              </span>
              <div className="flex items-center gap-2">
                <span className="red text-red-500">
                  <ArrowBigRight size={22} />
                </span>
                <span className="font-extrabold text-gray-900 text-lg sm:text-right">
                  PP ROAD, Buxar, Bihar
                </span>
              </div>
            </div>

            {/* Pincode */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-500/20 pb-4">
              <span className="text-gray-700 font-bold uppercase tracking-wider text-sm">
                Pincode
              </span>
              <div className="flex items-center gap-2">
                <span className="red text-red-500">
                  <ArrowBigRight size={22} />
                </span>
                <span className="font-extrabold text-gray-900 text-lg">
                  802101
                </span>
              </div>
            </div>

            {/* Owner */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2">
              <span className="text-gray-700 font-bold uppercase tracking-wider text-sm">
                Owner
              </span>
              <div className="flex items-center gap-2">
                <span className="red text-red-500">
                  <ArrowBigRight size={22} />
                </span>
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="font-extrabold text-blue-600 hover:text-blue-800 hover:underline underline-offset-4 transition-all text-lg"
                  href="https://www.instagram.com/hanisingh2023/"
                >
                  Hani
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Map */}
        <div className="right flex justify-center items-center w-full min-h-[400px]">
          <div className="w-full h-full min-h-[400px] rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white/70">
            <iframe
              className="w-full h-full object-cover"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.9761957152405!2d83.98502587411383!3d25.57245871640133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399275baff4ef6f7%3A0x47c45ccaf1e6cd40!2sJyoti%20Chowk%2C%20Babanagar%2C%20Buxar%2C%20Bihar%20802101!5e0!3m2!1sen!2sin!4v1779528199810!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
