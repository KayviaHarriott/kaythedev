import React from "react";
import { Box } from "@mui/material";
import { NavigationBar } from "../components/Navigation";
import { motion as m } from "framer-motion";
import { Contact } from "./Contact";
import { Interests } from "./Interests";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { About } from "./About";

const tabs = [
  { page: "about", component: <About /> },
  { page: "contact", component: <Contact /> },
  { page: "interest", component: <Interests /> },
];

export const LandingPage = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <>
      <nav className="relative z-20">
        <ul className="flex gap-6 text-center items-center justify-center">
          {tabs.map((item) => (
            <li
              key={item.page}
              className={item === selectedTab ? "selected" : ""}
              onClick={() => setSelectedTab(item)}
            >
              {`${item.page}`}
              {item === selectedTab ? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
      <m.div
      // initial={{ y: "100%" }}
      // animate={{ y: "0%" }}
      // transition={{ duration: 1, ease: "easeOut" }}
      // exit={{opacity: 1}}
      // className="w-full h-full bg-[#]"
      >
       <Box className="left-0 top-0 absolute w-full">
          <AnimatePresence mode="wait">
            <m.div
              key={selectedTab ? selectedTab.page : "empty"}
              initial={{ y: 10, opacity: 1 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 1 }}
              transition={{ duration: 0.5 , ease: "easeOut"}}
            >
              {/* <Box className=" ">
                <Box className="flex-grow flex items-center justify-center">
                  <p className="text-[56px] font-bold text-[#FFFF]">kaythedev</p>
                </Box>
              </Box> */}
              {/* <Contact />
              <Interests /> */}
  
              {selectedTab ? selectedTab.component : ""}
            </m.div>
          </AnimatePresence>
       </Box>
      </m.div>
    </>
  );
};
