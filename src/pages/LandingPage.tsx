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
  { page: "about", component: <About />, backgroundColor: "#EDB973"}, //748B75" },
  { page: "contact", component: <Contact />, backgroundColor: "#EDB973"} ,// ED6A59" },
  { page: "interest", component: <Interests />, backgroundColor: "#EDB973" },
];

export const LandingPage = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <>
      <nav className="relative z-20">
        <ul className="flex gap-4 text-right items-center justify-end py-4  px-4 text-[white] text-[14px]">
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
        className="overflow-hidden "
        key={selectedTab ? selectedTab.page : "empty"}
        initial={{
          x: -50,
          opacity: 1,
          zIndex: 1,
          background: selectedTab ? "transparent" : "white",
        }}
        animate={{
          x: 0,
          opacity: 1,
          zIndex: 1,
          background: selectedTab ? "transparent" : "white",
        }}
        exit={{ x: 50, opacity: 1, zIndex: 0, background: "white" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Box
          sx={{ backgroundColor: selectedTab.backgroundColor }}
          className="left-0 top-0 absolute w-full px-[56px]"
        >
          <AnimatePresence mode="wait">
            <m.div
              key={selectedTab ? selectedTab.page : "empty"}
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              {selectedTab ? selectedTab.component : ""}
            </m.div>
          </AnimatePresence>
        </Box>
      </m.div>
    </>
  );
};
