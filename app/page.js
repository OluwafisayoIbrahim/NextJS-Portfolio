"use client";
import React, { useEffect, useState } from "react";
import { HeroSection } from "./components/HeroSection";
import { NavBar } from "./components/NavBar";
import { AboutSection } from "./components/AboutSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { EmailSection } from "./components/EmailSection";
import { Footer } from "./components/Footer";
import { AchievementsSection } from "./components/AchievementsSection";
import Head from "next/head";

export default function Home() {
  const [isDaytime, setIsDaytime] = useState(true);

  useEffect(() => {
    const updateBackground = () => {
      const currentTime = new Date();
      const currentHour = currentTime.getHours();
      const isDay = currentHour >= 6 && currentHour < 18; // Assume day between 6 AM and 6 PM

      setIsDaytime(isDay);
    };

    updateBackground();

    const intervalId = setInterval(updateBackground, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#2d89ef" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <main
        className={`flex min-h-screen flex-col ${
          isDaytime ? "bg-[#222222]" : "bg-black"
        }`}
      >
        <NavBar />
        <div className="container mt-24 mx-auto px-12 py-4">
          <HeroSection />
          <AchievementsSection />
          <AboutSection />
          <ProjectsSection />
          <EmailSection />
        </div>
        <Footer />
      </main>
    </>
  );
}
