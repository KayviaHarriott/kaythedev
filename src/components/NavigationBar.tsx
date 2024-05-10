import { Box } from "@mui/material";
import React from "react";
import resume_pdf from '/assets/files/KayviaHarriott_Resume_Preview.pdf';

export const NavigationBar = () => {
  const links = [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/kayharriott/" },
    { label: "GitHub", url: "https://github.com/KayviaHarriott" },
    { label: "Resume", url: resume_pdf , color: "#ED6A59"},
  ];
  return (
    <Box className="max-w-[1800px] mx-auto">
      <div className="flex justify-between px-4 py-3 text-[white]">
        <div className="flex font-semibold">
          <p>kay</p>
          <p className="text-[#ED6A59]">the</p>
          <p>dev</p>
        </div>
        <div className="flex gap-4">
          {links.map((item, index) => (
            <a href={item.url} target="_blank" key={index}>
              <p className={`text-[${item.color}]`}>{item.label}</p>
            </a>
          ))}
        </div>
      </div>
    </Box>
  );
};
