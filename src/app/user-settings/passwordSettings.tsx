"use client";

import React from "react";
import { Box, Button, Link } from "@mui/material";
import PasswordField from "../components/PasswordField";

const PasswordSettings: React.FC = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        p: 2,
        gap: 2,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box>
        <PasswordField label=" Old Password" placeholder="Enter Old Password" />
      </Box>
      <Box>
        <PasswordField label="New Password" placeholder="Enter New Password" />
      </Box>

      <Box>
        <PasswordField
          label="Confirm New Password"
          id="confirm-password"
          placeholder="Re-Enter New Password"
        />
      </Box>

      <Box sx={{ width: "100%", textAlign: "end" }}>
        <Link href="#" variant="subtitle1">
          Forgot Password?
        </Link>
      </Box>

      <Box
        sx={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          textAlign: { xs: "center", sm: "left" },
          mt: 2,
        }}
      >
        <Button variant="contained" size="large">
          Change Password
        </Button>
      </Box>
    </Box>
  );
};

export default PasswordSettings;
