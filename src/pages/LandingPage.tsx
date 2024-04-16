import { Box } from "@mui/material";
import * as React from "react";
import { NavigationBar } from "../components/Navigation";
export const LandingPage = () => {
  return (
    <>
      <div className="">
        {/* <NavigationBar/> */}
        <Box className="flex flex-col items-center h-screen">
          <div className="flex flex-col gap-2">
            <p className="text-center">kaythedev</p>
            <Box
              sx={{
                boxShadow: "2px 4px 10px 0.1px rgba(0,0,0,0.1)",
                padding: 2,
                borderRadius: 2,
              }}
            >
              <p className="text-[gray] max-w-[300px] text-center text-[14px]">
                Hi! My name is Kayvia, a 99'er born and raised in Jamaica. Nice
                to meet you and thanks for checking out my website {`:)`}
              </p>
            </Box>
          </div>
        </Box>
      </div>
    </>
  );
};
