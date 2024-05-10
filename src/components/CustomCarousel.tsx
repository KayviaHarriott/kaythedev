import React from "react";
import react_icon from "/assets/icons/language-and-frameworks/react-icon.png";
import nodejs_icon from "/assets/icons/language-and-frameworks/nodejs-icon.png";
import figma_icon from "/assets/icons/software-tools/figma-icon.png";
import postgresql_icon from "/assets/icons/database/postgresql-icon.webp";
import digitalocean_icon from "/assets/icons/software-tools/digitalocean-icon.png";
import git_icon from "/assets/icons/software-tools/git-icon.png";
import tailwind_icon from "/assets/icons/language-and-frameworks/tailwind-icon.png";
import typescript_iconfrom from "/assets/icons/language-and-frameworks/typescript-icon.png";

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
      image: postgresql_icon,
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
      image: typescript_iconfrom,
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
