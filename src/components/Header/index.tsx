"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "ABOUT", href: "#about" },
    { name: "PROJECTS", href: "#projects" },
    { name: "SKILLS", href: "#skills" },
    { name: "BOARD", href: "/dashboard" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative group"
          >
            <Link
              href="/"
              className="text-4xl font-black text-slate-900 relative z-10 tracking-tight"
            >
              <span className="relative">
                PORTFOLIO
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-slate-900 to-slate-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-16">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center space-x-16"
            >
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group relative text-slate-600 hover:text-slate-900 transition-colors font-bold tracking-wider text-sm uppercase"
                >
                  <span className="relative">
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-slate-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </span>
                </Link>
              ))}
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:hidden p-2 relative z-20"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-8 h-8 flex flex-col justify-center items-center">
              <span
                className={`block w-6 h-0.5 bg-slate-900 transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-1.5"
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-slate-900 transition-all duration-300 mt-1.5 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-slate-900 transition-all duration-300 mt-1.5 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : "translate-y-1.5"
                }`}
              ></span>
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMenuOpen ? "auto" : 0,
            opacity: isMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden absolute top-24 left-0 right-0 bg-white shadow-lg"
        >
          <div className="py-6 px-4 space-y-6">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: isMenuOpen ? 1 : 0,
                  x: isMenuOpen ? 0 : -20,
                }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="block text-slate-600 hover:text-slate-900 transition-colors text-lg font-bold tracking-wider uppercase"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
