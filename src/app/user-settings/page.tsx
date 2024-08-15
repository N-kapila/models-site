"use client";

import React from "react";
import { Box, Tabs, Tab, Typography } from "@mui/material";
import ProfileSettings from "./profileSettings";
import PasswordSettings from "./passwordSettings";
import AccessSettings from "./accessSettings";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      style={{ width: "80%", height: "100%" }}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
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
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yPropsMobile(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Page: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: { xs: "none", md: "flex" },
          height: "100vh",
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{
            borderRight: 1,
            borderColor: "divider",
            p: 3,
            mt: 8,

            "& .MuiTab-root": {
              minHeight: 48,
              display: "flex",
              alignItems: "flex-start",
            },
            "& .MuiTab-root:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.08)",
            },
            "& .Mui-selected": {
              fontWeight: "bold",
            },
          }}
        >
          <Tab label="Update Profile" {...a11yProps(0)} />
          <Tab label="Change Password" {...a11yProps(1)} />
          <Tab label="Manage Access" {...a11yProps(2)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Typography variant="h3" gutterBottom>
            Update Profile
            <ProfileSettings />
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Typography variant="h3" gutterBottom>
            Change Password
            <PasswordSettings />
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Typography variant="h3" gutterBottom>
            Manage Access
            <AccessSettings />
          </Typography>
        </TabPanel>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: { xs: "block", md: "none" },
          height: "100vh",
        }}
      >
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            centered
            variant="fullWidth"
            sx={{
              "& .MuiTab-root": {
                fontSize: { xs: "10px", sm: "12px", md: "14px" },
                padding: { xs: "6px 8px", sm: "8px 12px" },
              },
            }}
          >
            <Tab label="Update Profile" {...a11yPropsMobile(0)} />
            <Tab label="Change Password" {...a11yPropsMobile(1)} />
            <Tab label="Manage Access" {...a11yPropsMobile(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Typography variant="h5" gutterBottom>
            Update Profile
            <ProfileSettings />
          </Typography>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Typography variant="h5" gutterBottom>
            Change Password
            <PasswordSettings />
          </Typography>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Typography variant="h5" gutterBottom>
            Manage Access
            <AccessSettings />
          </Typography>
        </CustomTabPanel>
      </Box>
    </Box>
  );
};

export default Page;
