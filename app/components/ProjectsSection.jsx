"use client"
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Login Form Website",
    description: "A Login Form using HTML, CSS and JavaScript",
    image: "/images/projects/1.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/OluwafisayoIbrahim/Login-Form",
    previewUrl: "https://login-form-sigma-topaz.vercel.app/"
  },
  {
    id: 2,
    title: "Captcha Generator",
    description: "This CAPTCHA (Completely Automated Public Turing test to tell Computers and Humans Apart)is created in this context using HTML , CSS and Javascript.",
    image: "/images/projects/2.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/OluwafisayoIbrahim/Captcha-Generator",
    previewUrl: "https://captcha-generator-rho.vercel.app/"
  },
  {
    id: 3,
    title: "Calculator App",
    description:
      "This is a fully functional calculator web application built using React.js.",
    image: "/images/projects/3.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/OluwafisayoIbrahim/calculator-app",
    previewUrl: "https://calculator-app-eosin-delta.vercel.app/"
  },
  {
    id: 4,
    title: "Tic Tac Toe",
    description:
      "This is a classic Rock, Paper, Scissors game implemented in HTML, CSS, and JavaScript.",
    image: "/images/projects/4.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/OluwafisayoIbrahim/Rock-Paper-Scissors-Game",
    previewUrl: "https://calculator-app-6qcp.vercel.app/"
  },
  {
    id: 5,
    title: "Weather App",
    description:
      "This is a simple weather app built using React that allows users to search for the current weather conditions of a city.",
    image: "/images/projects/5.jpeg",
    tag: ["All", "App"],
    gitUrl: "https://github.com/OluwafisayoIbrahim/Weather-App-using-API",
    previewUrl: "https://weather-app-using-api-kappa.vercel.app/"
  },
  {
    id: 6,
    title: "QR Code Generator",
    description:
      "A simple QR Code Generator using HTML, CSS and Javascript. It is a simple web-based QR code generator that allows you to generate QR codes from text or URLs.",
    image: "/images/projects/6.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/OluwafisayoIbrahim/QR-code-Generator",
    previewUrl: "https://qr-code-generator-delta-liart.vercel.app/"
  },
  {
    id: 7,
    title: "Word Guess",
    description:
      "This is a simple web-based word guessing game that allows players to guess a randomly selected word based on a given hint. ",
    image: "/images/projects/7.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/OluwafisayoIbrahim/Word-Guess",
    previewUrl: "/"
  },
  {
    id: 8,
    title: "Currency Converter",
    description:
      "This is a simple React.js application that allows you to convert currency from one currency to another using the latest exchange rates",
    image: "/images/projects/8.jpeg",
    tag: ["All", "App"],
    gitUrl: "https://github.com/OluwafisayoIbrahim/Currenct-Converter-Using-React",
    previewUrl: "/"
  },
  {
    id: 9,
    title: "Note App",
    description:
      "This is a web application built using React and React Router that allows users to create, organize, and manage their notes. ",
    image: "/images/projects/9.jpeg",
    tag: ["All", "App"],
    gitUrl: "https://github.com/OluwafisayoIbrahim/Note-App",
    previewUrl: "/"
  },
  {
    id: 10,
    title: "To Do List",
    description:
      "This simple yet effective to-do list application is built using React, providing you with a user-friendly interface to manage your tasks.",
    image: "/images/projects/10.jpeg",
    tag: ["All", "App"],
    gitUrl: "https://github.com/OluwafisayoIbrahim/To-Do-List",
    previewUrl: "https://to-do-list-sable-iota.vercel.app/"
  },
  {
    id: 11,
    title: "Tic Tac Toe",
    description: "A simple and fun Tic-Tac-Toe game built with React.",
    image: "/images/projects/11.jpeg",
    tag: ["All", "App"],
    gitUrl: "https://github.com/OluwafisayoIbrahim/Tic-Tac-Toe",
    previewUrl: "https://tic-tac-toe-lime-tau.vercel.app/"
  },
  {
    id: 12,
    title: "AI Image generator",
    description:
      "This allows you to create AI-generated images based on a textual description. Users can input a description, and the component fetches an image generated by an AI model and displays it.",
    image: "/images/projects/12.jpeg",
    tag: ["All", "App"],
    gitUrl: "https://github.com/OluwafisayoIbrahim/AI-Image-Generator",
    previewUrl: "/"
  },
  {
    id: 13,
    title: "Get Location",
    description:
      "This is a simple code used to get the current position of a user using Geolocation API in Reactjs.",
    image: "/images/projects/13.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/OluwafisayoIbrahim/Get-Location-using-Geolocation-API",
    previewUrl: "/"
  },
  {
    id: 14,
    title: "Image Search",
    description:
      "This is a simple web-based image search engine that allows users to search for high-quality images using keywords.",
    image: "/images/projects/14.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/OluwafisayoIbrahim/Image-Search",
    previewUrl: "https://image-search-pearl-six.vercel.app/"
  },
  {
    id: 15,
    title: "GIF Generator",
    description:
      "This code is a web-based GIF Generator that allows users to search for and easily copy direct links to GIFs, providing a user-friendly interface for GIF enthusiasts.",
    image: "/images/projects/15.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/OluwafisayoIbrahim/GIF-Generator",
    previewUrl: "https://gif-generator-rosy-delta.vercel.app/"
  },
];

export const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" ref={ref}>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-4">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="App"
          isSelected={tag === "App"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap:12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

