import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";
import React from "react";

interface ToggleProps {
  options: { label: string }[];
}
export const ToggleButtons: React.FC<ToggleProps> = ({ options }) => {
  const [alignment, setAlignment] = useState<string | null>("left");

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      {options.map((item, index) => (
        <ToggleButton
          sx={{ border: "none", color: "white" }}
          value={item.label}
          aria-label={item.label}
        >
          {item.label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};
