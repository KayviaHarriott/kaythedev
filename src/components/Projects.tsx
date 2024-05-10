import { Box, Button } from "@mui/material";
import React from "react";

export const Projects = () => {
  const projects = [
    {
      label: "Jamaica Sargassum Early Advisory System (JSEAS)",
      description: "Lorem ipsum dolor",
      image: "",
    },
    {
      label: "Central Machine Diagnostics",
      description: "Lorem ipsum dolor",
      image: "",
    },
    {
      label: "Climate Change Caribbean",
      description: "Lorem ipsum dolor",
      image: "",
    },
    {
      label: "Healthcare Jamaica",
      description: "Lorem ipsum dolor",
      image: "",
    },
    {
      label: "Cleverr School Teachers",
      description: "Lorem ipsum dolor",
      image: "",
    },
  ];

  return (
    <>
      <div className="pb-2">
        <p className="text-[#ED6A59] text-[12px] w-[500px]">Want to see</p>
        <p className="text-[#12688D] text-[24px] font-bold w-[500px]">
          Projects I've Worked On
        </p>
      </div>
     <div className="flex gap-2 h-[100%] max-w-[1200px] overflow-x-auto">
        {projects.map((item, index) => (
          <Box
            sx={{ border: "1px solid #F3F3F3", borderRadius: 1, p: 1, height: "100%"}}
            key={index}
            className=""
          >
            <Box
              sx={{
                height: "100px",
                width: "300px",
                backgroundColor: "gray",
                borderRadius: 1,
              }}
            ></Box>
            <p className="font-semibold pt-2"> {item.label}</p>
            <p className="text-[14px] pb-2">{item.description}</p>
            <Button
              variant="contained"
              sx={{
                boxShadow: "none",
                backgroundColor: "#1B2845",
                textTransform: "none",
                width: "100%",
              }}
            >
              View Project
            </Button>
          </Box>
        ))}
     </div>
    </>
  );
};
