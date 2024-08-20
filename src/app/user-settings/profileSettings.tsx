"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  FormControl,
  Select,
  SelectChangeEvent,
  MenuItem,
  InputLabel,
  TextField,
  Tooltip,
  InputAdornment,
  IconButton,
  Button,
  Stack,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import LabeledTextField from "../components/TextField";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const ProfileSettings: React.FC = () => {
  const [role, setRole] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [image, setImage] = useState<string | ArrayBuffer | null>(null);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleProfileImageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (event: SelectChangeEvent<string>) => {
    setRole(event.target.value);
  };

  const handleGenderChange = (event: SelectChangeEvent<string>) => {
    setGender(event.target.value);
  };
  return (
    <Box
      sx={{
        flexGrow: 1,
        p: 2,
        gap: 2,
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Box>
        <Typography variant="subtitle2" gutterBottom>
          What describes you the best?
        </Typography>
        <FormControl fullWidth size="small">
          <InputLabel id="demo-simple-select-label">Role</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={role}
            label="Role"
            onChange={handleChange}
          >
            <MenuItem value={10}>Visitor</MenuItem>
            <MenuItem value={20}>Photographer</MenuItem>
            <MenuItem value={30}>Model</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box>
        <Typography variant="subtitle2" gutterBottom>
          Name
        </Typography>

        <TextField
          fullWidth
          label="Enter Your Name"
          id="fullWidth"
          size="small"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Tooltip
                  title="This is the name displayed on your profile. Make sure to use your real name."
                  arrow
                >
                  <IconButton>
                    <InfoIcon />
                  </IconButton>
                </Tooltip>
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Box display="flex" alignItems="center">
        <Stack
          justifyContent="center"
          alignItems="center"
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 3, md: 10 }}
          gap={{ xs: 3 }}
          width="100%"
        >
          <Box sx={{ width: "100%" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 3.5,
              }}
            >
              <Typography variant="subtitle2" gutterBottom>
                Cover Photo
              </Typography>
              <InputAdornment position="end">
                <Tooltip title="1000px x 200px image is recommended." arrow>
                  <IconButton>
                    <InfoIcon />
                  </IconButton>
                </Tooltip>
              </InputAdornment>
            </Box>

            <Box
              sx={{
                width: "100%",
                maxWidth: "1000px",
                aspectRatio: "5/3",
                borderRadius: 1,
                overflow: "hidden",
                marginBottom: "16px",
                display: image ? "block" : "none",
              }}
            >
              <img
                src={image as string}
                alt="Cover"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
            <Button
              component="label"
              variant="contained"
              startIcon={<CloudUploadIcon />}
            >
              Upload Image
              <VisuallyHiddenInput type="file" onChange={handleImageChange} />
            </Button>
          </Box>

          <Box sx={{ width: "100%" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 3.5,
              }}
            >
              <Typography variant="subtitle2" gutterBottom>
                Profile Picture
              </Typography>
              <InputAdornment position="end">
                <Tooltip title="300px X 300px image is recommended." arrow>
                  <IconButton>
                    <InfoIcon />
                  </IconButton>
                </Tooltip>
              </InputAdornment>
            </Box>

            <Box
              sx={{
                width: "60%",
                maxWidth: "400px",
                aspectRatio: "1/1",
                borderRadius: "50%",
                overflow: "hidden",
                marginBottom: "16px",
                display: profileImage ? "block" : "none",
              }}
            >
              <img
                src={profileImage as string}
                alt="Cover"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
            <Button
              component="label"
              variant="contained"
              startIcon={<CloudUploadIcon />}
            >
              Upload Image
              <VisuallyHiddenInput
                type="file"
                onChange={handleProfileImageChange}
              />
            </Button>
          </Box>
        </Stack>
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
        <Typography variant="subtitle2" gutterBottom sx={{ textAlign: "left" }}>
          Gender
        </Typography>
        <FormControl fullWidth size="small" sx={{ textAlign: "left" }}>
          <InputLabel id="gender-select-label">Select your gender</InputLabel>
          <Select
            labelId="gender-select-label"
            id="gender-select"
            value={gender}
            onChange={handleGenderChange}
            label="Select your gender"
          >
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ width: "100%" }}>
        <Typography variant="subtitle2" gutterBottom>
          Birthday
        </Typography>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="MMMM d, yyyy"
          placeholderText="Select your birthday"
          customInput={
            <TextField
              fullWidth
              size="small"
              value={selectedDate ? format(selectedDate, "MMMM d, yyyy") : ""}
              placeholder="Select your birthday"
              sx={{ width: "100%" }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <CalendarMonthIcon />
                  </InputAdornment>
                ),
              }}
            />
          }
        />
      </Box>

      <Box>
        <LabeledTextField
          label="Bio"
          textFieldProps={{
            placeholder: "Enter your Bio",
            multiline: true,
            rows: 4,
          }}
        />
      </Box>

      <Box
        sx={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          textAlign: { xs: "center", sm: "left" },
        }}
      >
        <Button variant="contained" size="large">
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default ProfileSettings;
