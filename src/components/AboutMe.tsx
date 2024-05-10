import React from "react";
// import { GitHub } from "react-feather";
import { BehanceSquareFilled } from "@ant-design/icons";
import { Instagram, LinkedIn } from "@mui/icons-material";
import { GitHub } from "@mui/icons-material";
import { BehanceSquareOutlined } from "@ant-design/icons";
import { Box } from "@mui/material";
import deal_icon from "/assets/icons/deal-icon.png"
import program_icon from "/assets/icons/web-design-icon.png"
import webdesign_icon from "/assets/icons/program-icon.png"
export const AboutMe = () => {
  const socials = [
    { label: "LinkedIn", url: "", icon: <LinkedIn /> },
    { label: "GitHub", url: "", icon: <GitHub /> },
    { label: "Behance", url: "", icon: <BehanceSquareOutlined /> },
    { label: "Instagram", url: "", icon: <Instagram /> },
  ];
  const skills = [
    {
      icon: program_icon,
      label: "UI/UX Design",
      description: "Lorem ipsum dolor get it heurm my lim.",
    },
    {
      icon: webdesign_icon,
      label: "Web Development",
      description: "Lorem ipsum dolor get it heurm my lim.",
    },
    {
      icon: deal_icon,
      label: "Collaborative Opportunities",
      description: "Lorem ipsum dolor get it heurm my lim.",
    },
  ];
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-start lg:gap-[32px]">
        <div className="">
          <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start">
            <p className="text-[#ED6A59] text-[12px] max-w-[500px] text-center lg:text-left">
              Want to know about me?
            </p>
            <p className="text-[#12688D] text-[24px] font-semibold max-w-[500px] text-center lg:text-left">
              I put heart, effort, and grit into <br></br>
              <span className="italic">everything</span> I do!
            </p>
            <p className="text-[#454545] text-[14px] max-w-[700px] lg:max-w-[450px] py-3 text-center lg:text-left">
              Random tech bits? Front-end development? Documentation? I love it!
              Ever since I could remember, I’ve always had an interest towards
              technology and it’s development. This interest has driven me into
              my career field today striving to learn more and more.
            </p>
          </div>
          <div className="flex gap-4 justify-center items-center">
            {socials.map((item, index) => (
              <div key={index}>
                <a href={item.url} className="flex items-center">
                  {item.icon}
                  <p>{item.label}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center pt-[50px]">
         <div className="flex flex-col lg:flex-row gap-4 flex-wrap justify-center">
            {skills.map((item, index) => (
              <Box
                key={index}
                sx={{
                  boxShadow: "3px 4px 13.6px 5px rgba(0,87,255,0.1)",
                  p: 2,
                  borderRadius: 1,
                  maxWidth: "250px"
                }}
                className="flex flex-col justify-center items-center"
              >
                {/* <Box sx={{width: "40px", height: "40px", backgroundColor: "green", borderRadius: 10, }}></Box> */}
                <img className="w-[50px]" src={item.icon} />
                <p className="text-center font-semibold text-[#12688D] pt-2">{item.label} </p>
                <p className="text-center text-[#747474] text-[14px]">{item.description}</p>
              </Box>
            ))}
         </div>
        </div>
      </div>
    </>
  );
};
