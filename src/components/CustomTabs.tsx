import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

interface CustomTabsProps {
  content: { label: string; content: React.ReactNode }[];
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <>{children}</>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const CustomTabs: React.FC<CustomTabsProps> = ({ content }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{}}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          sx={{ borderBottom: "0px" }}
          TabIndicatorProps={{
            style: { display: 'none' }
          }}
        >
          {content.map((item, index) => (
            <Tab
              key={index}
              label={item.label}
              {...a11yProps(index)}
              sx={{
                textTransform: "none",
                borderBottom: "none",
                "&.MuiTabs-indicator": { display: "none" },
                "&.Mui-selected": {
                  backgroundColor: "#1976d2",
                  color: "white", // Color of active tab
                  border: "none",
                  borderRadius: "100px",
                },
                "&:hover": {
                  //   color: "#ED6A59", // Color of tab on hover
                },
              }}
            />
          ))}
        </Tabs>
      </Box>
      {content.map((item, index) => (
        <CustomTabPanel key={index} index={index} value={value}>
          <Box sx={{ backgroundColor: "#E1F6FF", padding: 2, borderRadius: 2 }}>
            {item.content}
          </Box>
        </CustomTabPanel>
      ))}
    </Box>
  );
};
