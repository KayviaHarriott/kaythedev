import React from "react";
import { Box } from "@mui/material";
import { NavigationBar } from "../components/Navigation";
import { motion as m } from "framer-motion";
export const LandingPage = () => {
  return (
    <m.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1, ease: "easeOut" }}
      exit={{opacity: 1}}
      className="absolute top-0 left-0 w-full h-full bg-[#748B75]"
    >
      <Box className=" h-screen w-screen flex flex-col py-[16px] ">
        <Box className="flex-grow flex items-center justify-center">
          <p className="text-[56px] font-bold text-[#FFFF]">kaythedev</p>
        </Box>
      </Box>
    </m.div>
  );
};
