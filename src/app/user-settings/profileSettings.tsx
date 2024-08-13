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
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

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
  const [image, setImage] = useState<string | ArrayBuffer | null>(null);

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
  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
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
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
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
            component="img"
            src={image as string}
            alt="Cover Photo"
            sx={{
              width: "500px",
              height: "300px",
              borderRadius: 1,
              marginRight: "50px",
              display: image ? "block" : "none",
            }}
          />
          <Button
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
          >
            Upload Image
            <VisuallyHiddenInput type="file" onChange={handleImageChange} />
          </Button>
        </Box>
      </Box>

      {/* <Typography variant="subtitle2" gutterBottom>
        What describes you the best?
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        What describes you the best?
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        What describes you the best?
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        What describes you the best?
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        What describes you the best?
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        What describes you the best?
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        What describes you the best?
      </Typography> */}
    </Box>
  );
};

export default ProfileSettings;
