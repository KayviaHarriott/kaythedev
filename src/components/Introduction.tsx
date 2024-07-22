import { Box, Button } from "@mui/material";
import * as React from "react";
import profile_photo from "/assets/ProfilePhoto_Uncropped.png";
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
    <div className="flex">
        <div className="w-2/3">
          <p>Hi! I'm Kay Harriott</p>
          <p>
            Born and raised in Jamaica, I’m a software engineer and developer with
            over 5 years of experience. Driven to providing the best I can, I’ll
            work with you to create and develop the best tech solutions for your
            problems.
          </p>
          <div>
            <div className="flex">
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
          </div>
        </div>
        <div className="w-1/3">
        <img className="h-[200px] lg:h-[300px]" src={profile_photo} />
        </div>
    </div>
    </>
  );
};
