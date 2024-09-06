"use client"; // Ensure this file is treated as a client-side module
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Bars3Icon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { motion, AnimatePresence } from "framer-motion";
import NavLink from "./NavLink";

const navLinks = [
  { title: "Home", path: "#home" },
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#email-section" },
];

export const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      navLinks.forEach((link) => {
        const section = document.querySelector(link.path);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveLink(link.path);
          }
        }
      });
    };

    const handleHashChange = () => {
      setActiveLink(window.location.hash || "#home");
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", handleHashChange);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleLinkClick = (href) => {
    setActiveLink(href);
    setNavbarOpen(false);
  };

  return (
    <>
      {/* Navbar for larger screens */}
      <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90 md:block hidden">
        <div className="flex flex-wrap lg:py-4 items-center justify-between mx-auto px-4 py-2">
          <Link
            href="/"
            className="text-2xl md:text-5xl text-white font-semibold"
          >
            Oluwafisayo&apos;s Portfolio
          </Link>
          <div
            className="menu md:w-auto"
            id="large-screen-navbar"
          >
            <ul className="flex flex-col md:flex-row p-4 md:p-0 mt-0">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    href={link.path}
                    title={link.title}
                    isActive={activeLink === link.path}
                    onClick={() => handleLinkClick(link.path)}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar and Overlay */}
      <div className="md:hidden">
        <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
          <div className="flex flex-wrap lg:py-4 items-center justify-between mx-auto px-4 py-2">
            <Link
              href="/"
              className="text-lg sm:text-xl md:text-sm lg:text-3xl xl:text-4xl text-white font-semibold"
            >
              Oluwafisayo&apos;s Portfolio
            </Link>
            <div className="mobile-menu block md:hidden">
              <button
                onClick={() => setNavbarOpen(!navbarOpen)}
                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
              >
                {navbarOpen ? (
                  <ArrowLeftIcon className="h-5 w-5" />
                ) : (
                  <Bars3Icon className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </nav>

        <AnimatePresence>
          {navbarOpen && (
            <motion.div
              className="menu-overlay fixed top-0 left-0 right-0 bottom-0 bg-[#121212] backdrop-blur-sm bg-opacity-90 flex items-center justify-center z-50"
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.3 }}
            >
              <div className="mobile-menu absolute top-2 right-4">
                <button
                  onClick={() => setNavbarOpen(false)}
                  className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                >
                  <ArrowLeftIcon className="h-5 w-5" />
                </button>
              </div>
              <MenuOverlay links={navLinks} onLinkClick={handleLinkClick} activeLink={activeLink} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default NavBar;
