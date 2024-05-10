import { Box } from "@mui/system";
import React from "react";
import time_icon from "/assets/icons/time-icon.png";
import location_icon from "/assets/icons/location-icon.png";

export const Contact = () => {
  const info = [
    {
      title: "Based In",
      subtitle: "Kingston, Jamaica",
      icon: location_icon,
    },
    {
      title: "Availability",
      subtitle: "Open to remote collaborations",
      icon: time_icon,
    },
  ];
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-center lg:items-left lg:justify-left ">
        <div className="lg:w-1/2 max-w-[500px] flex flex-col ">
          <div className="pb-2">
            <p className="text-[#ED6A59] text-[12px] w-[500px] text-center lg:text-left">
              Want to contact me?
            </p>
            <p className="text-[#12688D] text-[24px] font-bold w-[500px] text-center lg:text-left ">
              Let's get in touch!
            </p>
          </div>

          <p className="text-[#454545] text-center lg:text-left">
            Random tech bits? Front-end development? Documentation? I love it!
            Ever since I could remember, I’ve always had an interest towards
            technology and it’s development. This interest has driven me into my
            career field today striving to learn more and more.
          </p>
          <div className="flex flex-col gap-2 pt-[32px]">
            {info.map((item, index) => (
              <div key={index} className="flex flex-col lg:flex-row gap-2 items-center">
                <Box
                  sx={{
                    backgroundColor: "#12688D",
                    height: "fit-content",
                    borderRadius: 1,
                    p: 1,
                  }}
                >
                  <img className="h-[30px]" src={item.icon} />
                </Box>
                <div className="flex flex-col text-center lg:text-left">
                  <p className="font-bold">{item.title}</p>
                  <p>{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center w-full pt-6 lg:pt-0">
          <form className="flex flex-col bg-[#12688D] p-3 rounded-lg">
            {/* <form > //action="/action_page.php"> */}
            <p className="text-white pb-2">Send me a message</p>
            <div className="flex flex-col gap-2 pb-4">
              <input
                type="text"
                id="fname"
                name="fname"
                placeholder="Your name"
                className="p-2 rounded-sm"
              />
              <input
                type="text"
                id="lname"
                name="lname"
                placeholder="Subject"
                className="p-2 rounded-sm"
              />
              <input
                type="text"
                id="message"
                name="message"
                placeholder="Your message"
                className="p-2 rounded-sm h-[100px] "
              />
            </div>
            <input
              type="submit"
              value="Submit"
              className="p-2 bg-[#FF9D90] text-[white]"
            />
          </form>
        </div>
      </div>
    </>
  );
};
