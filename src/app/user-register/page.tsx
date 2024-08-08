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
  Link,
  MenuItem,
  FormControl,
  Select,
  SelectChangeEvent,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Image from "next/image";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import registerimg from "../../../public/assets/registerimg2.jpg";
import googleIcon from "../../../public/assets/LogoGoogle.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
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

const textFieldStyle = {
  marginBottom: "16px",
  "& .MuiInputBase-root": {
    height: "40px",
    display: "flex",
    alignItems: "center",
  },
  "& .MuiInputLabel-root": {
    top: "-6px",
  },
};

export default function Page() {
  const [role, setRole] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

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
                justifyContent: "flex-end",
                mb: 5,
              }}
            >
              <Typography variant="subtitle1" gutterBottom sx={{ mr: 1 }}>
                Already have an account?
              </Typography>
              <Link href="/user-login" variant="subtitle1" underline="none">
                Login
              </Link>
            </Box>

            <Typography variant="h4" gutterBottom sx={{ color: "#000000" }}>
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
                // label="Enter Your Name"
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
                //label="Enter Your Email"
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
                // label="Enter Your Phone Number"
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
              <FormControl
                fullWidth
                size="small"
                sx={{ mb: 2, textAlign: "left" }}
              >
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={role}
                  // label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Photographer</MenuItem>
                  <MenuItem value={20}>Model</MenuItem>
                  <MenuItem value={20}>Designer</MenuItem>
                </Select>
              </FormControl>

              <Typography
                variant="subtitle2"
                gutterBottom
                sx={{ textAlign: "left" }}
              >
                Password
              </Typography>
              <TextField
                fullWidth
                id="password"
                type={showPassword ? "text" : "password"}
                sx={textFieldStyle}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        onClick={handleClickShowPassword}
                        aria-label={
                          showPassword ? "Hide password" : "Show password"
                        }
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <Typography
                variant="subtitle2"
                gutterBottom
                sx={{ textAlign: "left" }}
              >
                Confirm Password
              </Typography>
              <TextField
                fullWidth
                id="confirm-password"
                type={showPassword ? "text" : "password"}
                sx={textFieldStyle}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        onClick={handleClickShowPassword}
                        aria-label={
                          showPassword ? "Hide password" : "Show password"
                        }
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <Button variant="contained" sx={{ margin: 3 }}>
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
}
