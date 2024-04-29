import { Box, Button } from "@mui/material";
import React from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import { useRef } from "react";
import { EmailRounded, Mail } from "@mui/icons-material";
import { Instagram, GitHub } from "react-feather";
import { BehanceOutlined } from "@ant-design/icons";
export const About = () => {
  //   const ref = useRef(null);

  //   function useParallax(value: MotionValue<number>, distance: number) {
  //     return useTransform(value, [0, 1], [-distance, distance]);
  //   }
  //   const { scrollYProgress } = useScroll({ target: ref });

  //   const y = useParallax(scrollYProgress, 100);

  const list = [{ title: "What I Know", url: "" }];
  const socialsList = [
    {
      title: "Behance",
      icon: (
        <p className="text-[28px]">
          <BehanceOutlined />
        </p>
      ),
      link: "https://www.behance.net/kaythedev",
    },
    {
      title: "GitHub",
      icon: <GitHub />,
      link: `https://github.com/KayviaHarriott`,
    },
    {
      title: "Instagram",
      icon: <Instagram />,
      link: `https://instagram.com/kayviaharriott`,
    },
  ];
  return (
    <>
      <Box className="flex w-screen">
        <Box className="flex h-screen w-full justify-center items-center">
          <Box className="flex px-[32px] gap-4">
            <Box className="sm:w-1/3 max-w-[300px] flex flex-col items-end text-right flex flex-col gap-4 mt-[-12px]">
              <div className="flex">
                <p
                  //   style={{ scrollSnapAlign: "center" }}
                  className="text-[32px] font-bold"
                >
                  kay
                </p>
                <p
                  //   style={{ scrollSnapAlign: "center" }}
                  className="text-[32px] text-[#ED6A59] font-bold"
                >
                  the
                </p>
                <p
                  //   style={{ scrollSnapAlign: "center" }}
                  className="text-[32px] font-bold"
                >
                  dev
                </p>
              </div>
              <div className="flex flex-col items-end gap-1 mt-[-12px]">
                {["software engineer", "web developer"].map((items, index) => (
                  <Box
                    key={index}
                    sx={{ borderRadius: 1, width: "fit-content" }}
                    className="bg-[black] text-[white] text-[14px] flex justify-center items-center py-2 px-2"
                  >
                    <p>{items}</p>
                  </Box>
                ))}
                <div className="pt-2 flex flex-row gap-2 items-center justify-center text-center">
                  {socialsList.map((item, index) => (
                    <a key={index} href={item.link} target="_blank">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {item.icon}
                      </motion.div>
                    </a>
                  ))}
                </div>
              </div>
              <p></p>
            </Box>
            <Box className="sm:w-2/3 max-w-[350px] sm:max-w-[400px]">
              <div className="flex flex-col gap-3">
                <p className="font-bold">
                  Oops... I'm not done building this yet!
                </p>
                <p className="text-[14px]">
                  I'm currently working on my website... but I can still do
                  yours! Feel free to contact me via email or instagram to talk
                  about it~
                </p>
                <div className="">
                  <p className="font-light italic text-[14px]">
                    Have a question?
                  </p>
                  <a href="mailto:kayvia@kaythedev.com">
                    {" "}
                    <motion.div
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <p className="font-bold italic text-[#ED6A59]">
                        kayvia@kaythedev.com
                      </p>
                    </motion.div>
                  </a>
                </div>
                <div className="justify-content sm:items-center flex flex-col pt-4">
                  <p className="text-[14px] italic pb-2 font-bold text-[#348DE0]">
                    New! Check out my web design and development plans for web
                    design and developments:
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    {[
                      {
                        title: "UI/UX Design",
                        description:
                          "With Figma, let's get your website designs started!",
                        url: "https://www.fiverr.com/s/ge4wwv",
                      },
                      {
                        title: "Web Development",
                        description:
                          "Using WordPress and Elementor, let's build your dream website!",
                        url: "https://www.fiverr.com/s/0pvVja",
                      },
                    ].map((item, index) => (
                      <Box
                      key={index}
                        sx={{
                          p: 2,
                          border: "1px solid rgba(0,0,0,0.1)",
                          borderRadius: 2,
                          width: "fit-content",
                          maxWidth: "200px",
                        }}
                        className="flex flex-col items-center text-center"
                      >
                        <p className="font-bold">{item.title}</p>
                        <p className="text-[gray] pb-2 text-[14px]">
                          {item.description}
                        </p>
                        <Button
                          variant="contained"
                          href={item.url}
                          target="_blank"
                          sx={{
                            textTransform: "none",
                            boxShadow: "none",
                            color: "black",
                            backgroundColor: "white",
                            border: "1px solid rgba(0,0,0,0.1)",
                            "&:hover": {
                              backgroundColor: "white",
                              boxShadow: "2px 2px 10px 1px rgba(0,0,0,0.1)"
                            }
                          }}
                        >
                          Visit
                        </Button>
                      </Box>
                    ))}
                  </div>
                </div>
                {/* <p>
                      Vitae varius ex faucibus in. Maecenas non consectetur justo.
                      Suspendisse arcu enim, maximus at accumsan sit amet, cursus eget
                      ex. Pellentesque in ex ac leo blandit euismod. Phasellus porta
                      finibus imperdiet.
                    </p> */}
              </div>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
