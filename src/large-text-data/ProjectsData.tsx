import { Button } from "@mui/material";
import React from "react";
import cmd_picture1 from "/assets/projects/cmd_picture1.png";
import cmd_picture2 from "/assets/projects/cmd_picture2.png";
import cmd_picture3 from "/assets/projects/cmd_picture3.png";
import cmd_picture4 from "/assets/projects/cmd_picture4.png";
import { CheckMark } from "../components/CheckMark";

const CMD_ViewProjectLink = "https://centralmachinediagnostic.com";
const CMD_ViewDesignLink =
  "https://www.behance.net/gallery/186770535/Central-Machine-Diagnostics-Web-Design-and-Development";
export const projects = [
  {
    label: "Central Machine Diagnostics",
    content: (
      <div>
        <p className="font-bold">Central Machine Diagnostics</p>
        <p className="text-[14px]">Website Design & Building</p>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col lg:flex-row gap-[32px]">
            <div className="lg:w-3/5 text-[14px] flex flex-col gap-1">
              <p className="pt-2">
                In 2023, Central Machine Diagnostics reached out to me to
                redesign their website and also suggest a solution for hosting
                and deploying the website.
              </p>
              <p>
                The hiring manager explained that their current website was
                outdated, not catered towards their branding and contained too
                much text. They also explained they would like to do updates to
                the website without needed a third party technical user.
              </p>
              <div>
                <div className="hidden lg:block">
                  <p className="text-[14px] font-bold">
                    Main Troubles & Worries
                  </p>
                  <p>
                    One of the main problems of the initial deployment of the
                    website was that it took too long and the developers were
                    unresponsive during the project. I was able to reassure the
                    client and establish trust in the deployment and creation of
                    the website.
                  </p>
                </div>
              </div>
              <div>
                <div className="lg:hidden">
                  <p className="text-[14px] font-bold">
                    Main Troubles & Worries
                  </p>
                  <p>
                    One of the main problems of the initial deployment of the
                    website was that it took too long and the developers were
                    unresponsive during the project. I was able to reassure the
                    client and establish trust in the deployment and creation of
                    the website.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-2/5 flex flex-col items-center">
              <img
                className="rounded-md w-[500px] lg:w-full"
                src={cmd_picture2}
              />
              <p className="text-[12px] pt-2 font-[600]">Previous Design</p>
            </div>
          </div>

          <div className="flex flex-col flex-col-reverse lg:flex-row gap-4">
            <div className="flex gap-2 flex-col lg:w-3/5 justify-between">
              <div className="flex flex-col gap-2">
                <div className="">
                  <p className="text-[14px] font-bold">Hand Off</p>
                  <p className="text-[14px]">
                    Until the completion of the project, a one page 'Coming
                    Soon' page was deployed on the website alerting users who
                    would like to access the site of it's status.
                  </p>
                </div>

                <div className="">
                  <p className="text-[14px] font-bold">
                    Deliverables & Actions
                  </p>
                  <ul className="list-none">
                    {[
                      "Provided PDFs of Design via Figma",
                      "Met with and interpreted client queries and wants",
                      "Completed project in a timely manner to satisfy client",
                      "Led and guided a team on Wordpress with Elementor processes",
                    ].map((item, index) => (
                      <li className="flex gap-1 text-[14px]">
                        <CheckMark color={"#12688D"} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex gap-2 pt-3 hidden lg:flex">
                <Button
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    width: "fit-content",
                    boxShadow: "none",
                  }}
                  href={CMD_ViewProjectLink}
                  target="_blank"
                >
                  View the Project
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                    width: "fit-content",
                    boxShadow: "none",
                  }}
                  href={CMD_ViewDesignLink}
                  target="_blank"
                >
                  View the Designs
                </Button>
              </div>
            </div>

            <div className="lg:w-2/5 flex flex-col items-center">
              <img
                className="rounded-md w-[500px] lg:w-full"
                src={cmd_picture4}
              />
              <p className="text-[12px] pt-2 font-[600]">Current Design</p>
            </div>
          </div>
        </div>
        <div className="flex gap-2 pt-4 sm:flex-col lg:hidden">
          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              width: "100%",
              boxShadow: "none",
            }}
            href={CMD_ViewProjectLink}
            target="_blank"
          >
            View the Project
          </Button>
          <Button
            variant="outlined"
            sx={{
              textTransform: "none",
              width: "100%",
              boxShadow: "none",
            }}
            href={CMD_ViewDesignLink}
            target="_blank"
          >
            View the Designs
          </Button>
        </div>
      </div>
    ),
  },
  { label: "Clever School Teacher", content: <div><p className="text-center">Coming Soon!</p></div> },
  { label: "Health Care Jamaica", content: <div><p className="text-center">Coming Soon!</p></div>  },
  {
    label: "Jamaica Sargassum Early Advisory System",
    content:<div><p className="text-center">Coming Soon!</p></div> ,
  },
  { label: "Caribbean Knowledge Platform", content:<div><p className="text-center">Coming Soon!</p></div>  },
];
