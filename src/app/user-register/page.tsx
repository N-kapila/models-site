"use client";

import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Grid,
  Paper,
  Button,
  Divider,
  Typography,
  TextField,
} from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GoogleIcon from "@mui/icons-material/Google";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
}));

const DottedDivider = styled(Divider)({
  width: "100%",
  borderBottom: "1px dotted rgba(0, 0, 0, 0.12)",
  margin: "16px 0",
});

const textFieldStyle = {
  marginBottom: "16px",
  "& .MuiInputBase-root": {
    height: "40px",
  },
};

export default function Page() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item sm={6} sx={{ display: { xs: "none", sm: "block" } }}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Item>
            <Typography variant="h4" gutterBottom>
              Create Your Account
            </Typography>
            <Box sx={{ width: "90%" }}>
              <Typography
                variant="subtitle2"
                gutterBottom
                sx={{ textAlign: "left" }}
              >
                Name
              </Typography>
              <TextField
                fullWidth
                label="Enter Your Name"
                id="name"
                sx={textFieldStyle}
              />

              <Typography
                variant="subtitle2"
                gutterBottom
                sx={{ textAlign: "left" }}
              >
                Email
              </Typography>
              <TextField
                fullWidth
                label="Enter Your Email"
                id="email"
                sx={textFieldStyle}
              />

              <Typography
                variant="subtitle2"
                gutterBottom
                sx={{ textAlign: "left" }}
              >
                Phone Number
              </Typography>
              <TextField
                fullWidth
                label="Enter Your Phone Number"
                id="phoneNumber"
                sx={textFieldStyle}
              />

              <Typography
                variant="subtitle2"
                gutterBottom
                sx={{ textAlign: "left" }}
              >
                Role
              </Typography>
              <TextField
                fullWidth
                label="Enter Your Email"
                id="email"
                sx={textFieldStyle}
              />

              <Typography
                variant="subtitle2"
                gutterBottom
                sx={{ textAlign: "left" }}
              >
                Password
              </Typography>
              <TextField
                fullWidth
                label="Enter Your Password"
                id="password"
                sx={textFieldStyle}
              />
            </Box>
            <DottedDivider />
            <Button
              component="label"
              variant="outlined"
              startIcon={<GoogleIcon />}
            >
              <b>Google</b>
            </Button>
            <Button
              component="label"
              variant="outlined"
              startIcon={<FacebookRoundedIcon />}
            >
              <b>Facebook</b>
            </Button>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
