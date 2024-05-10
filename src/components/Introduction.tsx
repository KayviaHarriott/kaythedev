import { Box, Button } from "@mui/material";
import * as React from "react";
import profile_photo from "/assets/profile_photo.png";

export const Introduction = () => {
  return (
    <>
      <div className="py-[56px] flex flex-col flex-col-reverse lg:flex-row justify-center items-center mx-auto gap-[32px]">
        <div className="text-white max-w-[450px]">
          <p>Hi!</p>
          <div className="text-[32px] flex gap-2">
            <p className="font-[800]">I'm </p>
            <p className="font-bold text-[#ED6A59]">Kay Harriott</p>,
          </div>
          <p className="text-[#DFDFDF] py-6">
            Born and raised in Jamaica, I’m a software engineer and developer
            with over 5 years of experience. Driven to providing the best I can,
            I’ll work with you to create and develop the best tech solutions for
            your problems.
          </p>
          <div className="flex gap-3">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "white",
                color: "#1B2845",
                textTransform: "none",
              }}
            >
              Resume
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderColor: "#ED6A59",
                color: "#ED6A59",
                textTransform: "none",
              }}
            >
              Contact Me
            </Button>
          </div>
          <p>
            (P.S. I built this website with React, TypeScript, TailWindCSS and
            deployed via Netlify!)
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Box sx={{}} className="flex justify-center items-center">
            <img className="h-[300px]" src={profile_photo} />
          </Box>
        </div>
      </div>
    </>
  );
};
