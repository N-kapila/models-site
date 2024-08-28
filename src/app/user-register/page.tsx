"use client";

import React, { useState } from "react";
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
  FormHelperText,
  Alert,
} from "@mui/material";
import Image from "next/image";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import registerimg from "../../../public/assets/registerimg2.jpg";
import googleIcon from "../../../public/assets/LogoGoogle.png";
import LabeledTextField from "../components/TextField";
import PasswordField from "../components/PasswordField";
import { useRouter } from "next/navigation";

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
  const [role, setRole] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [phoneError, setPhoneError] = useState<boolean>(false);
  const [roleError, setRoleError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const [confirmPasswordHelperText, setConfirmPasswordHelperText] =
    useState("");
  const [passwordHelperText, setPasswordHelperText] = useState("");
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  const handleChange = (event: SelectChangeEvent<string>) => {
    setRole(event.target.value as string);
    if (event.target.value) {
      setRoleError(false);
    }
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    // Update the password state
    setPassword(value);

    // Validate password length
    if (value.length < 6) {
      setPasswordError(true);
      setPasswordHelperText("Password must be at least 6 characters long.");
    } else {
      setPasswordError(false);
      setPasswordHelperText("");
    }
  };

  const handleChangeConfirmPassword = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(event.target.value);
    if (event.target.value !== password) {
      setConfirmPasswordError(true);
      setConfirmPasswordHelperText("Passwords do not match.");
    } else {
      setConfirmPasswordError(false);
      setConfirmPasswordHelperText("");
    }
  };

  const router = useRouter();

  const handleRegister = () => {
    let valid = true;

    if (!name.trim()) {
      setNameError(true);
      valid = false;
    } else {
      setNameError(false);
    }

    if (!email.trim()) {
      setEmailError(true);
      valid = false;
    } else {
      setEmailError(false);
    }

    if (!phone.trim()) {
      setPhoneError(true);
      valid = false;
    } else {
      setPhoneError(false);
    }

    if (!role) {
      setRoleError(true);
      valid = false;
    } else {
      setRoleError(false);
    }

    if (password.length < 6) {
      setPasswordError(true);
      setPasswordHelperText("Password must be at least 6 characters long.");
      valid = false;
    } else {
      setPasswordError(false);
      setPasswordHelperText("");
    }

    if (confirmPassword !== password) {
      setConfirmPasswordError(true);
      setConfirmPasswordHelperText("Passwords do not match.");
      valid = false;
    } else {
      setConfirmPasswordError(false);
      setConfirmPasswordHelperText("");
    }

    if (valid) {
      setAlertMessage("User registration successful.");
      setAlertVisible(true);

      // Delay navigation to allow the alert to be visible
      setTimeout(() => {
        router.push("/user-login");
      }, 2000); // Adjust the timeout duration as needed
    }
  };

  // Handlers to clear errors when the user starts typing
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if (e.target.value.trim()) {
      setNameError(false);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (e.target.value.trim()) {
      setEmailError(false);
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
    if (e.target.value.trim()) {
      setPhoneError(false);
    }
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
                    value: name,
                    onChange: handleNameChange,
                  }}
                  error={nameError}
                  helperText={nameError ? "Name is required" : ""}
                />
              </Box>

              <Box>
                <LabeledTextField
                  label="Email"
                  textFieldProps={{
                    placeholder: "Enter Your Email",
                    value: email,
                    onChange: handleEmailChange,
                    type: "email",
                  }}
                  error={emailError}
                  helperText={emailError ? "Email is required" : ""}
                />
              </Box>

              <Box>
                <LabeledTextField
                  label="Phone Number"
                  textFieldProps={{
                    placeholder: "Enter Your Phone Number",
                    value: phone,
                    onChange: handlePhoneChange,
                    type: "tel",
                  }}
                  error={phoneError}
                  helperText={phoneError ? "Phone number is required" : ""}
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
                <FormControl
                  fullWidth
                  size="small"
                  sx={{ textAlign: "left" }}
                  error={roleError}
                >
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
                  {roleError && (
                    <FormHelperText>Role is required</FormHelperText>
                  )}
                </FormControl>
              </Box>

              <Box>
                <PasswordField
                  label="Password"
                  value={password}
                  onChange={handleChangePassword}
                  error={passwordError}
                  helperText={passwordHelperText}
                />
              </Box>

              <Box>
                <PasswordField
                  label="Confirm Password"
                  id="confirm-password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={handleChangeConfirmPassword}
                  error={confirmPasswordError}
                  helperText={confirmPasswordHelperText}
                />
              </Box>

              {alertVisible && alertMessage && (
                <Alert variant="filled" severity="success" sx={{ m: 1 }}>
                  {alertMessage}
                </Alert>
              )}
              <Button
                variant="contained"
                sx={{ margin: 2 }}
                onClick={handleRegister}
              >
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
