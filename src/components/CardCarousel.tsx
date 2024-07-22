import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CircleIcon from "@mui/icons-material/Circle";

interface CardCarouselProps {}

export const Deprecated: React.FC<CardCarouselProps> = ({}) => {
  const [cardValue, setCardValue] = useState(0);

  const handleDownButton = () => {
    if (cardValue < 3 /**max value */) {
      setCardValue(cardValue + 1);
    }
  };

  const handleUpButton = () => {
    if (cardValue != 0) {
      setCardValue(cardValue - 1);
    }
  };

  const MUI_ButtonStyle = { padding: "0px", margin: "0px" };
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center">
      <Box
        className="p-[16px] rounded-lg flex "
        sx={{ boxShadow: "8px 8px 10px 2px rgba(0,0,0,0.2)" }}
      >
        <div className="flex justify-center items-center gap-[24px]">
          <div className="py-[4px] pl-[4px] pr-[24px] w-[350px] h-[150px]">
            {[
              <div key="1">
                <p>Card One</p>
              </div>,
              <div key="2">
                <p>Card Two</p>
              </div>,
              <div key="3">
                <p>Card Three</p>
              </div>,
              <div key="4">
                <p>Card Four</p>
              </div>,
            ].map((item, index) => (
              <div key={index} hidden={index == cardValue ? false : true}>
                {" "}
                {item}
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-[4px]">
            {[0, 1, 2, 3].map((item, index) => (
              <CircleIcon
              key={index}
                sx={{
                  width: "8px",
                  m: 0,
                  p: 0,
                  height: "auto",
                  color: cardValue == index ? "black" : "lightgray",
                }}
              />
            ))}
          </div>
        </div>
      </Box>
      <div className="flex flex-row lg:flex-col">
        <Button
          sx={[
            MUI_ButtonStyle,
            {
              color: cardValue == 0 ? "lightgray" : "black",
              cursor: cardValue == 0 ? "default" : "pointer",
            },
          ]}
          variant="text"
          disabled={cardValue == 0 ? true : false}
          onClick={() => handleUpButton()}
        >
          <KeyboardArrowUpIcon />
        </Button>
        <Button
          sx={[
            MUI_ButtonStyle,
            {
              color: cardValue == 3 ? "lightgray" : "black",
              //   cursor: cardValue == 3 ? "default" : "pointer",
            },
          ]}
          variant="text"
          disabled={cardValue == 3 ? true : false}
          onClick={() => handleDownButton()}
        >
          <KeyboardArrowDownIcon />
        </Button>
      </div>
    </div>
  );
};
