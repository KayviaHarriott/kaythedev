import { Box } from "@mui/material";
import React from "react";

export const NavigationBar = () => {
  const links = [{label: "LinkedIn", url: ""}, {label: "GitHub", url: ""}, {label: "Resume", url: ""}]
  return (
   <Box className="max-w-[1800px] mx-auto">
      <div className="flex justify-between px-4 py-3 text-[white]">
        <div className="flex font-semibold">
          <p>kay</p>
          <p className="text-[#ED6A59]">the</p>
          <p>dev</p>
        </div>
        <div className="flex gap-4">
          {links.map((item, index)  => (
            <a href={item.url} key={index}><p>{item.label}</p></a>
          ))}
        </div>
      </div>
   </Box>
  );
};
