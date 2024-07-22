import { Box, Button } from "@mui/material";
import * as React from "react";
import profile_photo from "/assets/profile_photo.png";
import resume_pdf from "/assets/files/KayviaHarriott_Resume_Preview.pdf";
import customText_1 from "/assets/handwriting-doodles/handwriting_text_1.png";
import customText_1_mobile from "/assets/handwriting-doodles/handwriting_text_1_mobile.png";
// import customText_2 from "/assets/handwriting-doodles/handwriting_text_2.png";
// import customText_3 from "/assets/handwriting-doodles/handwriting_text_3.png";
// import customText_4 from "/assets/handwriting-doodles/handwriting_text_4.png";

export const Introduction = () => {
  const scrollToContact = () => {
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="py-[56px] flex flex-col flex-col-reverse lg:flex-row justify-center items-center mx-auto gap-[32px]">
        <div className="text-white max-w-[450px]">
          <p className="text-center lg:text-left">Hi!</p>
          <div className="text-[32px] flex gap-2 text-center items-center justify-center lg:items-start lg:justify-start">
            <p className="font-[800]">I'm </p>
            <p className="font-bold text-[#ED6A59]">Kay Harriott</p>,
          </div>
          <Box
            sx={{
              "::selection": {
                color: "red", // Change this to your desired text color
                backgroundColor: "blue", // Change this to your desired background color
              },
            }}
          >
            <p className="text-[#DFDFDF] pt-2 pb-4 text-center lg:text-left">
              Born and raised in Jamaica, I’m a software engineer and developer
              with over 5 years of experience. Driven to providing the best I
              can, I’ll work with you to create and develop the best tech
              solutions for your problems.
            </p>
          </Box>
          <div className="flex gap-3 justify-center lg:justify-start">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "white",
                color: "#1B2845",
                textTransform: "none",
                fontWeight: "bold",
                "&&:hover": {
                  backgroundColor: "white",
                  boxShadow: "none",
                },
              }}
              href={resume_pdf}
              target="_blank"
            >
              Resume
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderColor: "#ED6A59",
                color: "#ED6A59",
                textTransform: "none",
                fontWeight: "bold",
                "&&:hover": {
                  boxShadow: "none",
                  border: "1px solid #ED6A59",
                },
              }}
              onClick={() => scrollToContact()}
            >
              Contact Me
            </Button>
          </div>
          {/* <p className="pt-4 text-center lg:text-left">
            (P.S. I built this website with React, TypeScript, TailWindCSS and
            deployed via Netlify!)
          </p> */}
          <img className="pt-4 hidden lg:block" src={customText_1} />
          <div className="flex items-center justify-center">
            {" "}
            <img
              className="pt-[32px]  block lg:hidden h-[90px]"
              src={customText_1_mobile}
            />{" "}
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Box sx={{}} className="flex justify-center items-center">
            <img className="h-[200px] lg:h-[300px]" src={profile_photo} />
          </Box>
        </div>
      </div>
    </>
  );
};
