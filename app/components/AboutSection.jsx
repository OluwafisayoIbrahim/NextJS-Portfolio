"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import { TabButton } from "./TabButton";
import HTMLIcon from "../../public/html-icon.svg";
import CSSIcon from "../../public/css-icon.svg";
import JavaScriptIcon from "../../public/javascript-icon.svg";
import TypeScriptIcon from "../../public/typescript-icon.svg";
import ReactIcon from "../../public/react-icon.png";
import DegreeIcon from "../../public/degree.png";
import GraduateIcon from "../../public/graduation-hat.png";
import InternIcon from "../../public/intern-icon.png";
import CourseIcon from "../../public/course.png";
import CompanyIcon from "../../public/company.png"
import UniversityIcon from "../../public/university.png"

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="pl-2">
        <li className="flex flex-row mt-0 mb-5 sm:mb-3">
          <Image
            src={HTMLIcon}
            alt="HTML Icon"
            className="sm-medium lg-small"
            style={{ width: "30px", height: "30px" }}
          />
          HTML
        </li>

        <li className="flex flex-row mt-0 mb-5 sm:mb-3">
          <Image
            src={CSSIcon}
            alt="CSS Icon"
            className="sm-medium lg-small"
            style={{ width: "30px", height: "30px" }}
          />
          CSS
        </li>
        <li className="flex flex-row mt-0 mb-5 sm:mb-3">
          <Image
            src={JavaScriptIcon}
            alt="JavaScript Icon"
            className="sm-medium lg-small"
            style={{ width: "30px", height: "30px" }}
          />
          JavaScript
        </li>
        <li className="flex flex-row mt-0 mb-5 sm:mb-3">
          <Image
            src={ReactIcon}
            alt="React Icon"
            className="sm-medium lg-small"
            style={{ width: "30px", height: "30px" }}
          />
          ReactJS
        </li>
        <li className="flex flex-row mt-0 mb-5 sm:mb-3">
          <Image
            src={TypeScriptIcon}
            alt="Typescript Icon"
            className="sm-medium lg-small"
            style={{ width: "30px", height: "30px" }}
          />
          TypeScript
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
      <ul className="pl-2">
        <li className="flex flex-row mt-0 mb-5 sm:mb-3 gap-2">
          <Image
            src={InternIcon}
            alt="Intern Icon"
            className="sm-medium lg-small"
            style={{ width: "30px", height: "30px" }}
          />
          Junior Engineer/Intern
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
            I am passionate about creating dynamic web applications, constantly
            seeking new challenges. Specializing in TypeScript and React.js,
            with JavaScript, HTML, and CSS background, I aim to create fluid
            user experiences. I enjoy working with cross-functional teams and
            embracing the ever-changing web development field. I am passionate
            about creating dynamic and user-friendly web applications, and I am
            constantly looking for new challenges to advance my frontend
            programming abilities. I keep up with the most recent developments
            in the field to guarantee that the answers my objective is to
            contribute positively to the online user experience by embracing the
            dynamic and constantly evolving world of web development.
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
