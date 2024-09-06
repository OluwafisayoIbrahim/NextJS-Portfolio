"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import { TabButton } from "./TabButton";
import HTMLIcon from "../../public/html-icon.svg";
import CSSIcon from "../../public/css-icon.svg";
import JavaScriptIcon from "../../public/javascript-icon.svg";
import TypeScriptIcon from "../../public/typescript-icon.svg";
import ReactIcon from "../../public/react-icon.svg";
import DegreeIcon from "../../public/degree.png";
import GraduateIcon from "../../public/graduation-hat.png";
import InternIcon from "../../public/intern-icon.png";
import CourseIcon from "../../public/course.png";
import CompanyIcon from "../../public/company.png";
import UniversityIcon from "../../public/university.png";
import APIIcon from "../../public/api-icon.png";
import GitIcon from "../../public/git-icon.svg";
import NextJSIcon from "../../public/nextjs.svg";
import TailwindCSSIcon from "../../public/tailwind-css.svg";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="pl-2 flex flex-row gap-6">
        <li className="flex flex-row mt-0 mb-5 sm:mb-3">
          <Image
            src={HTMLIcon}
            alt="HTML Icon"
            className="sm-medium lg-small"
            style={{ width: "30px", height: "30px" }}
          />
        </li>

        <li className="flex flex-row mt-0 mb-5 sm:mb-3">
          <Image
            src={CSSIcon}
            alt="CSS Icon"
            className="sm-medium lg-small"
            style={{ width: "30px", height: "30px" }}
          />
        </li>

        <li className="flex flex-row mt-0 mb-5 sm:mb-3">
          <Image
            src={JavaScriptIcon}
            alt="JavaScript Icon"
            className="sm-medium lg-small"
            style={{ width: "30px", height: "30px" }}
          />
        </li>

        <li className="flex flex-row mt-0 mb-5 sm:mb-3">
          <Image
            src={ReactIcon}
            alt="React Icon"
            className="sm-medium lg-small"
            style={{ width: "30px", height: "30px" }}
          />
        </li>

        <li className="flex flex-row mt-0 mb-5 sm:mb-3">
          <Image
            src={TypeScriptIcon}
            alt="Typescript Icon"
            className="sm-medium lg-small"
            style={{ width: "30px", height: "30px" }}
          />
        </li>

        <li className="flex flex-row mt-0 mb-5 sm:mb-3">
          <Image
            src={APIIcon}
            alt="API Icon"
            className="sm-medium lg-small"
            style={{ width: "30px", height: "30px" }}
          />
        </li>
        <li className="flex flex-row mt-0 mb-5 sm:mb-3">
          <Image
            src={GitIcon}
            alt="Git Icon"
            className="sm-medium lg-small"
            style={{ width: "30px", height: "30px" }}
          />
        </li>
        <li className="flex flex-row mt-0 mb-5 sm:mb-3">
          <Image
            src={NextJSIcon}
            alt="NextJS Icon"
            className="sm-medium lg-small"
            style={{ width: "30px", height: "30px" }}
          />
        </li>
        <li className="flex flex-row mt-0 mb-5 sm:mb-3">
          <Image
            src={TailwindCSSIcon}
            alt="TailwindCSS Icon"
            className="sm-medium lg-small"
            style={{ width: "30px", height: "30px" }}
          />
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="pl-2">
        <li className="flex flex-row mt-0 mb-5 sm:mb-3 gap-2">
          <Image
            src={GraduateIcon}
            alt="Graduate Icon"
            className="sm-medium lg-small"
            style={{ width: "30px", height: "30px" }}
          />
          Electrical and Electronics Engineering
        </li>
        <li className="flex flex-row mt-0 mb-5 sm:mb-3 gap-2">
          <Image
            src={UniversityIcon}
            alt="University Icon"
            className="sm-medium lg-small"
            style={{ width: "30px", height: "30px" }}
          />
          Olabisi Onabanjo University
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="pl-2">
        <li className="flex flex-row mt-0 mb-5 sm:mb-3 gap-2">
          <Image
            src={DegreeIcon}
            alt="Degree Icon"
            className="sm-medium lg-small"
            style={{ width: "30px", height: "30px" }}
          />
          B.Eng Electrical and Electronics Engineering (CGPA - 4.19)
        </li>
        <br />
        <li>Relevant Course Work</li>
        <li className="flex flex-row mt-0 mb-5 sm:mb-3 gap-2">
          <Image
            src={CourseIcon}
            alt="Course Icon"
            className="sm-medium lg-small"
            style={{ width: "30px", height: "30px" }}
          />
          CPE 205: Introduction to Computer Programming
        </li>
        <li className="flex flex-row mt-0 mb-5 sm:mb-3 gap-2">
          <Image
            src={CourseIcon}
            alt="Course Icon"
            className="sm-medium lg-small"
            style={{ width: "30px", height: "30px" }}
          />
          EEG 323: Computer Programming Language I(C++)
        </li>
        <li className="flex flex-row mt-0 mb-5 sm:mb-3 gap-2">
          <Image
            src={CourseIcon}
            alt="Course Icon"
            className="sm-medium lg-small"
            style={{ width: "30px", height: "30px" }}
          />
          EEG 324: Computer Programming Language II(C#)
        </li>
        <li className="flex flex-row mt-0 mb-5 sm:mb-3 gap-2">
          <Image
            src={CourseIcon}
            alt="Course Icon"
            className="sm-medium lg-small"
            style={{ width: "30px", height: "30px" }}
          />
          EEG 401: Technical Computing(MATLAB)
        </li>
        <li className="flex flex-row mt-0 mb-5 sm:mb-3 gap-2">
          <Image
            src={CourseIcon}
            alt="Course Icon"
            className="sm-medium lg-small"
            style={{ width: "30px", height: "30px" }}
          />
          CPE 501: Introduction to Software Programming
        </li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <>
        <ul className="pl-2">
          <li className="flex flex-row mt-0 mb-5 sm:mb-3 gap-2">
            <Image
              src={InternIcon}
              alt="Intern Icon"
              className="sm-medium lg-small"
              style={{ width: "30px", height: "30px" }}
            />
            Junior Engineer/Intern: Assisted in various engineering projects,
            gaining exposure to industrial processes and systems. Collaborated
            with a team to troubleshoot and maintain equipment. Worked with
            various software programs such as Agility, INSITE and PROTEUS.
          </li>
          <li className="flex flex-row mt-0 mb-5 sm:mb-3 gap-2">
            <Image
              src={CompanyIcon}
              alt="Company Icon"
              className="sm-medium lg-small"
              style={{ width: "30px", height: "30px" }}
            />
            PZ Cussons, Nigeria
          </li>
        </ul>
      </>
    ),
  },
];

export const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabCange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.jpeg"
          width={500}
          height={500}
          alt="about image"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Hello World!👋🌎
            <br />
            <br />
            Hey there! 👋 I&apos;m Oluwafisayo Ibrahim. 💻✨ I&apos;m a frontend developer 
            focused on TypeScript and React.js for  building interactive and easy-to-use web apps, 
            and JavaScript, HTML, and CSS🛠️ .Whether it&apos;s coding or taking on new challenges,
            I&apos;m all in😎. I enjoy the ever-evolving world of web development and collaborating 
            with people from all kinds of backgrounds💻.I&apos;m always on the lookout for new trends to 
            keep things fresh🌐💡. Let&apos;s team up and make the web a more exciting place together! 🚀
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabCange("skills")}
              active={tab === "skills"}
            >
              {""}
              Skills{""}
            </TabButton>
            <TabButton
              selectTab={() => handleTabCange("education")}
              active={tab === "education"}
            >
              {""}
              Education{""}
            </TabButton>
            <TabButton
              selectTab={() => handleTabCange("certifications")}
              active={tab === "certifications"}
            >
              {""}
              Certifications{""}
            </TabButton>
            <TabButton
              selectTab={() => handleTabCange("experience")}
              active={tab === "experience"}
            >
              {""}
              Experience{""}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};
