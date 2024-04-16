import React from "react";
import { Box } from "@mui/material";
import { NavigationBar } from "../components/Navigation";
import { motion as m } from "framer-motion";
export const LandingPage = () => {
  return (
    <>
      <Box className="bg-[#748B75] h-screen w-screen flex flex-col py-[16px]">
        <Box className="flex-grow flex items-center justify-center">
          <p className="text-[56px] font-bold text-[#FFFF]">kaythedev</p>
        </Box>
        
      </Box>
    </>
  );
};
