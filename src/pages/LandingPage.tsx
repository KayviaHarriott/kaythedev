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
import { Helmet } from "react-helmet";
import { About } from "./About";

export const LandingPage = () => {
  useEffect(() => {
    document.title = "ktd | Kayvia Harriott";
  }, []);

  const styling = "max-w-[1200px] mx-auto px-[32px]";

  return (
    <>
      {/* Meta Tags */}
      <Helmet>
        <title>ktd | Kayvia Harriott</title>
        <meta
          name="description"
          content="Kay Harriott, a freelance web developer and software engineer. Born and raised in Jamaica, I’m a software engineer and developer
            with over 5 years of experience. Driven to providing the best I can,
            I’ll work with you to create and develop the best tech solutions for
            your problems."
        />
        <meta
          name="keywords"
          content={`React, TypeScript, developer, portfolio, kayvia harriott, kayvia, harriott, 
            web development, freelance web dev, make website, create website, wordpress, elementor freelance, 
            elementor, software developer, front-end developer, fullstack developer, frontend developer`}
        />
        <meta name="author" content="Kayvia Harriott" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Kayvia Harriott",
              "url": "https://kaythedev.com",
              "sameAs": [
                "https://www.linkedin.com/in/kayviaharriott",
                "https://github.com/KayviaHarriott"
              ],
              "jobTitle": "Software Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "KayTheDev"
              }
            }
          `}
        </script>
      </Helmet>
      <About/>
    </>
  );
};
