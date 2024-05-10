import "./styles.css";
import { useEffect } from "react";
import React from "react";
import { NavigationBar } from "../components/NavigationBar";
import { Box } from "@mui/material";
import { Introduction } from "../components/Introduction";
import { AboutMe } from "../components/AboutMe";
import { TechStack } from "../components/TechStack";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { CustomCarousel } from "../components/CustomCarousel";

export const LandingPage = () => {
  useEffect(() => {
    document.title = "ktd | Kayvia Harriott";
  }, []);

  const styling = "max-w-[1200px] mx-auto px-[32px]";

  return (
    <>
      {/* Introduction */}
      <div className="bg-[#1B2845]">
        <NavigationBar />
        <Box className={`${styling} flex`}>
          <Introduction />
        </Box>
      </div>
      {/* Carousel */}
      <div className="bg-[#E9F4FF] ">
        <Box className={`${styling}`}>
          <CustomCarousel/>
        </Box>
      </div>
      {/* About */}
      <div className="">
        <Box className={`${styling} py-[56px]`}>
          <AboutMe />
        </Box>
      </div>
      {/* Tech Stack & Tools */}
      <div>
        <Box className={`${styling} py-[56px]`}>
          <TechStack />
        </Box>
      </div>
      {/* Projects */}
      <div>
        <Box className={`${styling} pt-[56px]`}>
          {/* <Projects /> */}
        </Box>
      </div>
      {/* Contact */}
      <div className="bg-[#E9F4FF]">
        <Box className={`${styling} py-[56px]`}>
          <Contact />
        </Box>
      </div>
      {/* Footer */}
      <div className="bg-[#0E445B]">
        <Box sx={{ height: "30px" }}></Box>
      </div>
    </>
  );
};
