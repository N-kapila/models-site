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
  Link,
  MenuItem,
  FormControl,
  Select,
  SelectChangeEvent,
  InputLabel,
} from "@mui/material";
import Image from "next/image";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import registerimg from "../../../public/assets/registerimg2.jpg";
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
  justifyContent: "space-between",
  alignItems: "center",
}));

const DottedDivider = styled(Divider)(({ theme }) => ({
  width: "100%",
  borderBottom: "1px dotted rgba(0, 0, 0, 0.12)",
  margin: "16px 0",
  [theme.breakpoints.up("lg")]: {
    display: "none",
  },
}));

const page: React.FC = () => {
  const [role, setRole] = React.useState("");

  const handleChange = (event: SelectChangeEvent<string>) => {
    setRole(event.target.value);
  };

  return (
    <Box sx={{ flexGrow: 1, padding: 1 }}>
      <Grid container spacing={2}>
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
              src={registerimg}
              alt="register image"
              layout="fill"
              objectFit="cover"
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
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
                  Already have an account?
                </Typography>
                <Link
                  href="/user-login"
                  variant="subtitle1"
                  underline="none"
                  sx={{
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  Login
                </Link>
              </Box>
            </Box>

            <Typography variant="h4" gutterBottom sx={{ color: "#000000" }}>
              Create Your Account
            </Typography>

            <Box
              sx={{
                width: "90%",
                gap: 2,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box>
                <LabeledTextField
                  label="Name"
                  textFieldProps={{
                    placeholder: "Enter Your Name",
                  }}
                />
              </Box>

              <Box>
                <LabeledTextField
                  label="Email"
                  textFieldProps={{
                    placeholder: "Enter Your Email",
                  }}
                />
              </Box>

              <Box>
                <LabeledTextField
                  label="Phone Number"
                  textFieldProps={{
                    placeholder: "Enter Your Phone Number",
                  }}
                />
              </Box>

              <Box>
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  sx={{ textAlign: "left" }}
                >
                  Role
                </Typography>
                <FormControl fullWidth size="small" sx={{ textAlign: "left" }}>
                  <InputLabel id="role-select-label">
                    Select your role
                  </InputLabel>
                  <Select
                    labelId="role-select-label"
                    id="role-select"
                    value={role}
                    onChange={handleChange}
                    label="Select your role"
                  >
                    <MenuItem value="photographer">Photographer</MenuItem>
                    <MenuItem value="model">Model</MenuItem>
                    <MenuItem value="designer">Designer</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              <Box>
                <PasswordField label="Password" />
              </Box>

              <Box>
                <PasswordField
                  label="Confirm Password"
                  id="confirm-password"
                  placeholder="Confirm Password"
                />
              </Box>

              <Button variant="contained" sx={{ margin: 3 }} href="/user-login">
                Register
              </Button>
            </Box>

            <DottedDivider />

            <Box sx={{ display: { xs: "none", lg: "block" } }}>
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
      </Grid>
    </Box>
  );
};

export default page;
