import { Box, Button } from "@mui/material";
import React from "react";
import { CustomTabs } from "./CustomTabs";
import { projects } from "../large-text-data/ProjectsData";

export const Projects = () => {
  
  return (
    <>
      <div className="pb-2">
        <p className="text-[#ED6A59] text-[12px] max-w-[500px]">Want to see</p>
        <p className="text-[#12688D] text-[24px] font-bold max-w-[500px]">
          Projects I've Worked On
        </p>
      </div>
      <CustomTabs content={projects} />
    </>
  );
};
