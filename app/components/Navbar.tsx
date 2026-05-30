import { PackagePlus } from "lucide-react";
import { motion } from "framer-motion"; // Note: Changed to "framer-motion" which is standard
import Link from "next/link";

const Navbar = () => {
  const role = "admin";

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // Matched smooth easing from hero
      className="flex items-center justify-between px-5 md:px-8 py-4 relative z-50 mt-4 md:mt-6 mx-4 md:mx-10 rounded-full bg-gradient-to-br from-gray-900 via-black to-black shadow-2xl border border-white/10"
    >
      {/* Logo Section */}
      <div className="logo flex items-baseline cursor-pointer">
        <h1 className="font-black text-2xl md:text-3xl text-white tracking-tight">
          GFH
        </h1>
        {/* Added a subtle glow to your yellow dot */}
        <div className="rounded-full w-2.5 h-2.5 ml-1 bgYellow shadow-[0_0_10px_rgba(253,224,71,0.6)]"></div>
      </div>

      {/* Menu Section */}
      <div className="menu flex gap-3 md:gap-4 items-center">
        {role === "admin" && (
          <Link href="/product/add">
          <button 
            type="button"
            className="group cursor-pointer flex items-center gap-2 border border-yellow-400 text-yellow-400 hover:bg-[#f1e29f] hover:text-black px-3 py-1.5 md:px-5 md:py-2 rounded-full font-semibold text-sm md:text-base transition-all duration-300"
          >
            <PackagePlus size={20} className="md:w-[22px] md:h-[22px] group-hover:scale-110 transition-transform" />
            {/* Hide text on very small screens to prevent layout breaking */}
            <span className="hidden sm:inline">Add Product</span>
          </button>
          </Link>
        )}
        

      </div>
    </motion.nav>
  );
};

export default Navbar;