import React from "react";
import { Box } from "@mui/material";
import { motion as m } from "framer-motion";
export const Interests = () => {

  
  return (
    <m.div
    // initial={{ y: "100%" }}
    // animate={{ y: "0%" }}
    // transition={{ duration: 1, ease: "easeOut" }}
    // exit={{opacity: 1}}
      className=" w-full bg-[#F9C784]"
    >
      <Box className="flex h-screen flex-col py-[16px]">
        <Box className="flex-grow flex items-center justify-center">
          <p className="text-[56px] font-bold text-[#FFFF]">Interests</p>
        </Box>
      </Box>
    </m.div>
  );
};
