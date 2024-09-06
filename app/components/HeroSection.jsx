import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section id="home" className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold h-auto sm:h-[auto]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I am {""}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Oluwafisayo",
                5000,
                "a FrontEnd Developer",
              ]}
              wrapper="span"
              speed={10}
              repeat={1}
            />
          </h1>

          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            With over 3 years of experience, I have honed my skills in web
            development. My expertise includes HTML, CSS, JavaScript, React.js, Next.js
            and TypeScript.
          </p>
          <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-200 text-white">
            <Link href="#email-section">Hire Me</Link>
          </button>
          <button className="px-0.5 py-0.5 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 bg-transparent hover:bg-slate-800 text-white mt-3">
            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
              <Link
                href={
                  "https://docs.google.com/document/d/1pFSzpMiSKNUaQb45jdFQ0mS2jTuV-D51/edit?rtpof=true&sd=true"
                }
              >
                Read my CV
              </Link>
            </span>
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="rounded-full bg-inherit absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
