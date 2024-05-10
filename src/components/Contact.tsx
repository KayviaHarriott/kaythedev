import { Box } from "@mui/system";
import React, { useState } from "react";
import time_icon from "/assets/icons/time-icon.png";
import location_icon from "/assets/icons/location-icon.png";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  

  const handleSubmit = (e: any) => {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));
  };

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
      <div
        id="contact-form"
        className="flex flex-col lg:flex-row items-center justify-center lg:items-left lg:justify-left "
      >
        <div className="lg:w-1/2 max-w-[500px] flex flex-col ">
          <div className="pb-2">
            <p className="text-[#ED6A59] text-[12px] max-w-[500px] text-center lg:text-left">
              Want to contact me?
            </p>
            <p className="text-[#12688D] text-[24px] font-bold max-w-[500px] text-center lg:text-left ">
              Let's get in touch!
            </p>
          </div>

          <p className="text-[#454545] text-center lg:text-left py-3">
            Have questions or any collabs you would like to work on together? Or
            may you have a website or project that needs redesigning? Feel free
            to contact me on my socials, or just send a quick message in the
            contact form.
          </p>
          <div className="flex flex-col gap-2 pt-[32px]">
            {info.map((item, index) => (
              <div
                key={index}
                className="flex flex-col lg:flex-row gap-2 items-center"
              >
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
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            className="flex flex-col bg-[#12688D] p-3 rounded-lg"
            // action="contact"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="Contact" />
            <input
              type="hidden"
              name="subject"
              value="Sales inquiry from mysitename.netlify.app"
            />
            <p className="text-white pb-2">Send me a message</p>
            <div className="flex flex-col gap-2 pb-4">
              <input
                type="text"
                id="fname"
                name="name"
                placeholder="Your name"
                className="p-2 rounded-sm"
                value={formData.name}
                onChange={handleChange}
                // value="contact"
              />
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                className="p-2 rounded-sm"
                value={formData.subject}
              onChange={handleChange}
                // value="contact"
              />
              <input
                type="text"
                id="message"
                name="message"
                placeholder="Your message"
                className="p-2 rounded-sm h-[100px] "
                value={formData.message}
                onChange={handleChange}
                // value="contact"
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
