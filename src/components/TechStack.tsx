import { Box } from "@mui/material";
import React from "react";
import react_icon from "/assets/icons/language-and-frameworks/react-icon.png";
import html5_icon from "/assets/icons/language-and-frameworks/html-icon.png";
import css_icon from "/assets/icons/language-and-frameworks/css-icon.png";
import javascript_icon from "/assets/icons/language-and-frameworks/javascript-icon.png";
import typescript_icon from "/assets/icons/language-and-frameworks/typescript-icon.png";
import postgre_sql_icon from "/assets/icons/database/postgresql-icon.webp";
import mysql_icon from "/assets/icons/database/my-sql-icon.png";
import mariadb_icon from "/assets/icons/database/mariadb-icon.png";
import figma_icon from "/assets/icons/software-tools/figma-icon.png";
import python_icon from "/assets/icons/language-and-frameworks/python-icon.webp";
import java_icon from "/assets/icons/language-and-frameworks/java-icon.png";
import framermotion_icon from "/assets/icons/language-and-frameworks/framermotion-icon.png";
import webflow_icon from "/assets/icons/software-tools/webflow-icon.png";
import docker_icon from "/assets/icons/software-tools/docker-icon.png";
import wordpress_icon from "/assets/icons/software-tools/wordpress-icon.png";
import elementor_icon from "/assets/icons/software-tools/elementor-icon.png";
import cypress_icon from "/assets/icons/software-tools/cypress-icon.png";
import git_icon from "/assets/icons/software-tools/git-icon.png";
import tailwind_icon from "/assets/icons/language-and-frameworks/tailwind-icon.png";


export const TechStack = () => {
  const techStack = [
    {
      label: "Database Languages",
      list: [
        { label: "PostgreSQL", icon: postgre_sql_icon },
        { label: "MySQL", icon: mysql_icon },
        { label: "MariaDB", icon: mariadb_icon },
      ],
      divColor: "#F2FBFF",
    },
    {
      label: "Languages & FrameWorks",
      list: [
        { label: "ReactJS", icon: react_icon },
        { label: "HTML5", icon: html5_icon },
        { label: "CSS", icon: css_icon },
        { label: "JavaScript", icon: javascript_icon },
        { label: "TypeScript", icon: typescript_icon },
        { label: "TailWindCSS", icon: tailwind_icon },
        { label: "Python", icon: python_icon },
        { label: "Java", icon: java_icon },
        { label: "Framer Motion", icon: framermotion_icon },
      ],
      divColor: "#E8F8FF",
    },
    {
      label: "Software & Tools",
      list: [
        { label: "Figma", icon: figma_icon },
        { label: "Webflow", icon: webflow_icon },
        { label: "Wordpress", icon: wordpress_icon },
        { label: "Elementor", icon: elementor_icon },
        { label: "Cypress", icon: cypress_icon },
        { label: "Docker", icon: docker_icon },
        { label: "Git", icon: git_icon },
      ],
      divColor: "#E1F6FF",
    },
  ];

  return (
    <>
      <div className="text-center pb-5">
        <p className="text-[#ED6A59] text-[12px]">Want to know what I use?</p>
        <p className="text-[#12688D] text-[24px] font-bold">
          Tech Stack & Tools
        </p>
      </div>
      <div className="">
        <div className="flex flex-col lg:flex-row gap-2">
          {techStack.map((item, index) => (
            <Box
              sx={{ backgroundColor: item.divColor, p: 2 }}
              key={index}
              className="lg:w-1/3"
            >
              <div className="text-center text-[#12688D] pb-4 ">
                {item.label}
              </div>
              <div className="flex gap-2 flex-wrap items-center justify-center">
                {item.list.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      // width: "fit-content",
                      width: "100px",
                      backgroundColor: "white",
                      p: 2,
                      borderRadius: 1,
                    }}
                    className="flex flex-col text-center items-center"
                  >
                    <img className="h-[50px]" src={item.icon} />
                    <p className="pt-2">{item.label} </p>
                  </Box>
                ))}
              </div>
            </Box>
          ))}
        </div>
      </div>
    </>
  );
};
