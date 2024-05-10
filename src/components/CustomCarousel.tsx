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
import digitalocean_icon from "/assets/icons/software-tools/digitalocean-icon.png";
import nodejs_icon from "/assets/icons/language-and-frameworks/nodejs-icon.png";

export const CustomCarousel = () => {
  const list = [
    {
      label: "React",
      image: react_icon,
    },
    {
      label: "NodeJS",
      image: nodejs_icon,
    },
    {
      label: "Figma",
      image: figma_icon,
    },
    {
      label: "PostgreSQL",
      image: postgre_sql_icon,
    },
    {
      label: "Digital Ocean",
      image: digitalocean_icon,
    },
    {
      label: "Git",
      image: git_icon,
    },
    {
      label: "TailWindCSS",
      image: tailwind_icon,
    },
    {
      label: "TypeScript",
      image: typescript_icon,
    },

    {
      label: "HITML5",
      image: html5_icon,
    },

    {
      label: "MySQL",
      image: mysql_icon,
    },
    {
      label: "Python",
      image: python_icon,
    },
    {
      label: "Java",
      image: java_icon,
    },
    {
      label: "CSS",
      image: css_icon,
    },

    {
      label: "Framer Motion",
      image: framermotion_icon,
    },
    {
      label: "WebFlow",
      image: webflow_icon,
    },
    {
      label: "Docker",
      image: docker_icon,
    },
    {
      label: "Wordpress",
      image: wordpress_icon,
    },
    {
      label: "Elementor",
      image: elementor_icon,
    },
    {
      label: "JavaScript",
      image: javascript_icon,
    },
    {
      label: "Cypress",
      image: cypress_icon,
    },
  ];
  return (
    <div>
      {/* <img
        className="filter grayscale"
        src={image}
        //   alt={image.alt_description}
      /> */}

      <div className="py-[24px] w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          {list.map((item, index) => (
            <li key={index}>
              <img
                src={item.image}
                className="h-[30px] filter grayscale"
                alt={item.label}
              />
            </li>
          ))}
        </ul>

        <ul
          className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
          aria-hidden="true"
        >
          {list.map((item, index) => (
            <li key={index}>
              <img
                src={item.image}
                className="h-[30px] filter grayscale"
                alt={item.label}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
