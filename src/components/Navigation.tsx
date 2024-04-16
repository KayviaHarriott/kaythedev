import * as React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export const NavigationBar = () => {
  return (
    <>
      <Box className="flex justify-center z-20 relative">
        <nav className="">
          <ul className="flex gap-6">
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <Link to={"/contact"}>
              <li>Contact</li>
            </Link>
            <Link to={"/interests"}>
              <li>Interests</li>
            </Link>
          </ul>
        </nav>
      </Box>
    </>
  );
};
