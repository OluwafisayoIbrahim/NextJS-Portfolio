"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import HTMLIcon from "../../app/components/icons/HTMLIcon"
import CSSIcon from "../../app/components/icons/CSSIcon"
import JavaScriptIcon from "../../app/components/icons/JavaScriptIcon"
import TypeScriptIcon from "../../app/components/icons/TypeScriptIcon";
import ReactIcon from "../../app/components/icons/ReactIcon";
import NextJSIcon from "./icons/NextJSIcon";
import TailwindCSSIcon from "./icons/TailwindCSSIcon";

const projectsData = [
  {
    id: 1,
    title: "Tutored Outfits",
    description: "A clothing store which is a contemporary ready-to-wear brand that specializes in crafting stylish and versatile attire for modern women.",
    image: "/images/projects/20.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://tailor-web-template.vercel.app/",
    previewUrl: "https://tailor-web-template.vercel.app/",
    codeTypes: [
      { name: "NextJS", icon: <NextJSIcon /> },
      { name: "TailwindCSS", icon: <TailwindCSSIcon /> },
    ],
  },
  {
    id: 2,
    title: "Shopify Clone",
    description:
      "This is a Shopify Clone created with HTML, CSS and Javascript. Originally a PSD on Figma converted to HTML.",
    image: "/images/projects/17.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/OluwafisayoIbrahim/Hackathon",
    previewUrl: "https://hackathon-two-phi.vercel.app",
    codeTypes : [
      { name: "HTML", icon: <HTMLIcon />},
      { name: "CSS", icon: <CSSIcon />},
      { name: "JavaScript", icon: <JavaScriptIcon />},
    ]
  },
  {
    id: 3,
    title: "Note App",
    description:
      "This is a web application built using React and React Router that allows users to create, organize, and manage their notes. ",
    image: "/images/projects/9.jpeg",
    tag: ["All", "App"],
    gitUrl: "https://github.com/OluwafisayoIbrahim/Note-App",
    previewUrl: "https://note-app-psi-amber.vercel.app/",
    codeTypes : [
      { name: "ReactJS", icon: <ReactIcon />},
      { name: "TypeScript", icon: <TypeScriptIcon />}
    ]
  },
  {
    id: 4,
    title: "Calculator App",
    description:
      "This is a fully functional calculator web application built using React.js.",
    image: "/images/projects/3.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/OluwafisayoIbrahim/calculator-app",
    previewUrl: "https://calculator-app-eosin-delta.vercel.app/",
    codeTypes : [
      { name: "ReactJS", icon: <ReactIcon />},
    ]
  },
  {
    id: 5,
    title: "Weather App",
    description:
      "This is a simple weather app built using React that allows users to search for the current weather conditions of a city.",
    image: "/images/projects/5.jpeg",
    tag: ["All", "App"],
    gitUrl: "https://github.com/OluwafisayoIbrahim/Weather-App-using-API",
    previewUrl: "https://weather-app-using-api-kappa.vercel.app/",
    codeTypes : [
      { name: "ReactJS", icon: <ReactIcon />},
    ]
  },
  {
    id: 6,
    title: "To Do List",
    description:
      "This simple yet effective to-do list application is built using React, providing you with a user-friendly interface to manage your tasks.",
    image: "/images/projects/10.jpeg",
    tag: ["All", "App"],
    gitUrl: "https://github.com/OluwafisayoIbrahim/To-Do-List",
    previewUrl: "https://to-do-list-sable-iota.vercel.app/",
    codeTypes : [
      { name: "ReactJS", icon: <ReactIcon />},
    ]
  },
  {
    id: 7,
    title: "Tic Tac Toe",
    description: "A simple and fun Tic-Tac-Toe game built with React.",
    image: "/images/projects/11.jpeg",
    tag: ["All", "App"],
    gitUrl: "https://github.com/OluwafisayoIbrahim/Tic-Tac-Toe",
    previewUrl: "https://tic-tac-toe-lime-tau.vercel.app/",
    codeTypes : [
      { name: "ReactJS", icon: <ReactIcon />},
    ]
  },
  {
    id: 8,
    title: "Image Search",
    description:
      "This is a simple web-based image search engine that allows users to search for high-quality images using keywords.",
    image: "/images/projects/14.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/OluwafisayoIbrahim/Image-Search",
    previewUrl: "https://image-search-pearl-six.vercel.app/",
    codeTypes : [
      { name: "HTML", icon: <HTMLIcon />},
      { name: "CSS", icon: <CSSIcon />},
      { name: "JavaScript", icon: <JavaScriptIcon />},
    ]
  },
  {
    id: 9,
    title: "GIF Generator",
    description:
      "This code is a web-based GIF Generator that allows users to search for and easily copy direct links to GIFs, providing a user-friendly interface for GIF enthusiasts.",
    image: "/images/projects/15.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/OluwafisayoIbrahim/GIF-Generator",
    previewUrl: "https://gif-generator-rosy-delta.vercel.app/",
    codeTypes : [
      { name: "HTML", icon: <HTMLIcon />},
      { name: "CSS", icon: <CSSIcon />},
      { name: "JavaScript", icon: <JavaScriptIcon />},
    ]
  },
  {
    id: 10,
    title: "List App",
    description:
      "This is a simple To-Do List application with TypeScript and JavaScript.",
    image: "/images/projects/16.jpeg",
    tag: ["All", "App"],
    gitUrl: "https://github.com/OluwafisayoIbrahim/List-Generator",
    previewUrl: "https://list-green.vercel.app/",
    codeTypes : [
      { name: "JavaScript", icon: <JavaScriptIcon />},
      { name: "TypeScript", icon: <TypeScriptIcon />}
    ]
  },
  {
    id: 11,
    title: "Shopping Cart",
    description:
      "This is a Shopping Cart Website created with React Typescript.",
    image: "/images/projects/19.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/OluwafisayoIbrahim/Shopping-Cart",
    previewUrl: "https://shopping-cart-indol-alpha.vercel.app/",
    codeTypes : [
      { name: "ReactJS", icon: <ReactIcon />},
      { name: "TypeScript", icon: <TypeScriptIcon />}
    ]
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
              codeTypes={project.codeTypes}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};
