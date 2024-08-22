"use client";

import React from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Grid,
  Paper,
  Button,
  Divider,
  Typography,
  Link,
} from "@mui/material";
import Image from "next/image";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import loginImg from "../../../public/assets/loginImg.jpg";
import googleIcon from "../../../public/assets/LogoGoogle.png";
import LabeledTextField from "../components/TextField";
import PasswordField from "../components/PasswordField";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  height: "100vh",
}));

const DottedDivider = styled(Divider)(({ theme }) => ({
  width: "100%",
  borderBottom: "1px dotted rgba(0, 0, 0, 0.12)",
  margin: "16px 0",
  [theme.breakpoints.up("lg")]: {
    display: "none",
  },
}));

export default function page() {
  // const [showPassword, setShowPassword] = React.useState(false);

  // const handleClickShowPassword = () => {
  //   setShowPassword(!showPassword);
  // };
  return (
    <Box sx={{ flexGrow: 1, padding: 1 }}>
      <Grid container spacing={2}>
        <Grid item sm={6} xs={12}>
          <Item>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                mb: 5,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  ml: { xs: 1, sm: 2, md: 3 },
                }}
              >
                <Link
                  href="/"
                  sx={{
                    "&:hover": {
                      transform: "scale(1.2)",
                    },
                  }}
                >
                  <img
                    src="/assets/logo7.png"
                    alt="Logo"
                    style={{
                      height: "40px",
                      width: "auto",
                      cursor: "pointer",
                    }}
                  />
                </Link>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Typography variant="subtitle1" gutterBottom sx={{ mr: 1 }}>
                  Create an account?
                </Typography>
                <Link
                  href="/user-register"
                  variant="subtitle1"
                  underline="none"
                  sx={{
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  Signup
                </Link>
              </Box>
            </Box>

            <Typography variant="h4" gutterBottom sx={{ color: "#000000" }}>
              Login to Your Account
            </Typography>

            <Box sx={{ width: "90%" }}>
              <Box sx={{ mb: 2 }}>
                <LabeledTextField
                  label="Email or Phone number"
                  textFieldProps={{
                    placeholder: "Enter Email or Phone number",
                  }}
                />
              </Box>

              <Box>
                <PasswordField label="Password" />
              </Box>
              <Box sx={{ width: "100%", textAlign: "end", p: 1 }}>
                <Link href="#" variant="subtitle1">
                  Forgot Password?
                </Link>
              </Box>

              <Box
                sx={{
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <Button variant="contained" sx={{ margin: 3 }} href="/">
                  Login
                </Button>
              </Box>
            </Box>
            <DottedDivider />

            <Box
              sx={{
                display: { xs: "none", lg: "block" },
              }}
            >
              <p>
                -------------------------------------------------------- OR
                --------------------------------------------------------
              </p>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "35%",
                m: 3,
              }}
            >
              <Button
                size="small"
                component="label"
                variant="outlined"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  // paddingLeft: 8,
                  // paddingRight: 8,
                }}
              >
                <Image
                  src={googleIcon}
                  alt="Google Icon"
                  width={15}
                  height={15}
                  style={{ marginRight: 8 }}
                />
                <b>Google</b>
              </Button>
              <br />
              <Button
                size="small"
                component="label"
                variant="outlined"
                startIcon={<FacebookRoundedIcon />}
              >
                <b> Facebook</b>
              </Button>
            </Box>
          </Item>
        </Grid>

        <Grid item sm={6} sx={{ display: { xs: "none", sm: "block" } }}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "100%",
              borderRadius: "16px",
              overflow: "hidden",
            }}
          >
            <Image
              src={loginImg}
              alt="register image"
              layout="fill"
              objectFit="cover"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
