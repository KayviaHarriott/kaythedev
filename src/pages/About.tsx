import React from "react";
import { Box } from "@mui/material";
import { motion as m } from "framer-motion";
export const About = () => {
  return (
    <m.div
      // initial={{ y: "100%" }}
      // animate={{ y: "0%" }}
      // transition={{ duration: 1, ease: "easeOut" }}
      // exit={{opacity: 1}}
      className="w-full bg-[#EDB973]" //748B75]"
    >
      <Box className="flex h-screen flex-col py-[16px]">
        <Box className="flex-grow flex flex-col">
          <div className="pt-[120px]">
            <p className="text-center font-bold text-[#FFFF] text-[32px]">
              kaythedev
            </p>
            <div className="flex w-full pt-[32px] gap-2">
              <div className="w-1/3 text-right">
                <p>about me</p>
              </div>
              <Box
                sx={{
                  boxShadow: "0px 0px 10px 2px rgba(0,0,0,0.1)",
                  backgroundColor: "white",
                  padding: 2,
                  borderRadius: 1,
                  fontSize: 14,
                }}
                className="w-2/3 max-w-[400px] flex flex-col gap-3"
              >
                <div>
                  <p>
                    hi! i'm kayvia, a 99'er born and raised in Jamaica. I'm a
                    software developer with an interest for UI/UX design.
                  </p>
                </div>

                <div className="flex flex-col gap-1">
                  <p>
                    i'm currently working on my website, but in the meanwhile
                    you can reach me here:
                  </p>
                  <div>
                    <p>kayvia@kaythedev.com</p>
                    <p>kayviaharriott</p>
                  </div>
                </div>
              </Box>
            </div>
          </div>
        </Box>
      </Box>
    </m.div>
  );
};
