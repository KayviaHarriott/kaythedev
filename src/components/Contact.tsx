import { Box } from "@mui/system";
import React, { useState, useRef } from "react";
import time_icon from "/assets/icons/time-icon.png";
import location_icon from "/assets/icons/location-icon.png";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    const service_key = import.meta.env.VITE_EMAILJS_SERVICE_KEY;
    const template_id = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const public_key = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    e.preventDefault();

    if (!form.current) {
      console.error("Form ref is not available");
      return;
    }

    emailjs
      .sendForm(service_key, template_id, form.current, {
        publicKey: public_key,
      })
      .then(
        () => {
          alert(
            "Thanks! I'm recieved your message and will be replying via email."
          );
          console.log("SUCCESS!");
          form.current?.reset(); 
        },
        (error) => {
          alert(
            "Oops! Something went wrong, please reload the page and try again."
          );
          console.log("FAILED...", error.text);
        }
      );
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
            maybe you have a website or project that needs redesigning? Feel
            free to contact me on my socials, or just send a quick message in
            the contact form.
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
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col bg-[#12688D] p-3 rounded-lg"
          >
            <p className="text-white pb-2">Send me a message</p>
            <div className="flex flex-col gap-2 pb-4">
              <input
                type="text"
                name="from_name"
                placeholder="Your name"
                className="p-2 rounded-sm"
                required
              />
              <input
                type="text"
                name="from_email"
                placeholder="Email"
                className="p-2 rounded-sm"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="p-2 rounded-sm"
                required
              />
              <textarea
                name="message"
                placeholder="Your message"
                className="p-2 rounded-sm h-[100px]"
                required
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
