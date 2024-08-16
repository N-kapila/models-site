"use client";

import React from "react";
import { useRef, ChangeEvent, useState } from "react";
import {
  Box,
  Button,
  Avatar,
  IconButton,
  Typography,
  Grid,
  Tooltip,
} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import EditIcon from "@mui/icons-material/Edit";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Link from "next/link";

const UserProfile = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);
  const [profileImage, setProfileImage] = useState<string | null>(null);

  // References for file inputs
  const coverFileInputRef = useRef<HTMLInputElement | null>(null);
  const profileFileInputRef = useRef<HTMLInputElement | null>(null);

  // Handlers for opening file inputs
  const handleCoverClick = () => {
    if (coverFileInputRef.current) {
      coverFileInputRef.current.click();
    }
  };

  const handleProfileClick = () => {
    if (profileFileInputRef.current) {
      profileFileInputRef.current.click();
    }
  };

  // Handlers for file input changes
  const handleCoverFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setBackgroundImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProfileFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        margin: "0 auto",
        boxShadow: 3,
        overflow: "hidden",
      }}
    >
      {/* Cover Photo */}
      <Box
        sx={{
          height: 300,
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
          border: "1px solid #ccc",
        }}
      >
        {!backgroundImage && (
          <Typography variant="h6" sx={{ color: "rgba(0, 0, 0, 0.6)" }}>
            Upload a cover photo
          </Typography>
        )}
        {/* Edit Cover Photo Button */}
        <IconButton
          aria-label="edit cover photo"
          onClick={handleCoverClick}
          sx={{
            position: "absolute",
            right: 16,
            bottom: 16,
            color: "#000000",
            borderRadius: 2,
            backgroundColor: "#e0e1e4",
            padding: "4px 8px",
            fontSize: "0.75rem",
            "& .MuiSvgIcon-root": {
              fontSize: "1rem",
            },
            "&:hover": {
              backgroundColor: "#d0d2d5",
            },
          }}
        >
          <PhotoCameraIcon sx={{ mr: 0.5 }} />
          <Typography variant="caption">Edit cover photo</Typography>
        </IconButton>

        <input
          type="file"
          ref={coverFileInputRef}
          style={{ display: "none" }}
          onChange={handleCoverFileChange}
        />

        <Box
          sx={{
            position: "absolute",
            bottom: -80,
            left: 50,
            width: 160,
            height: 160,
          }}
        >
          <Avatar
            alt="User Profile"
            src={profileImage || undefined}
            sx={{
              width: 200,
              height: 200,
              position: "absolute",
              bottom: 0,
              left: 0,
              border: "5px solid white",
              cursor: "pointer",
            }}
          />

          <IconButton
            aria-label="edit profile photo"
            onClick={handleProfileClick}
            sx={{
              position: "absolute",
              bottom: 1,
              right: 1,
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.8)",
              },
            }}
          >
            <AddAPhotoIcon />
          </IconButton>

          {/* Hidden file input */}
          <input
            type="file"
            ref={profileFileInputRef}
            style={{ display: "none" }}
            onChange={handleProfileFileChange}
          />
        </Box>
      </Box>

      <Grid container>
        <Grid item xs={12} sm={12} md={8}>
          <Box sx={{ paddingTop: "100px", ml: 5 }}>
            <Typography variant="h3" component="h1">
              Nirmal Kapilarathne
            </Typography>
            <Typography variant="body1" color="gray">
              1.8K friends
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={4}>
          <Box
            sx={{
              mt: { md: "100px" },
              display: "flex",
              gap: 1,
              justifyContent: "center",
            }}
          >
            <Tooltip title="Edit Profile" arrow>
              <Link href="/user-settings" passHref>
                <IconButton aria-label="Edit" size="large" sx={{ mb: 1 }}>
                  <EditIcon />
                </IconButton>
              </Link>
            </Tooltip>
            <Tooltip title="Share Profile" arrow>
              <IconButton
                aria-label="Share"
                size="large"
                sx={{
                  mb: 1,
                }}
              >
                <ShareIcon sx={{ fontSize: 25, color: "blue" }} />
              </IconButton>
            </Tooltip>

            <Tooltip title="Phone" arrow>
              <IconButton
                aria-label="Phone"
                size="large"
                sx={{
                  mb: 1,
                }}
              >
                <PhoneEnabledIcon sx={{ fontSize: 25, color: "#162950" }} />
              </IconButton>
            </Tooltip>

            <Tooltip title="Mail" arrow>
              <IconButton
                aria-label="Email"
                size="large"
                sx={{
                  mb: 1,
                }}
              >
                <MailOutlineIcon sx={{ fontSize: 25, color: "#34A853" }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="WhatsApp" arrow>
              <IconButton
                aria-label="whatsapp"
                size="large"
                sx={{
                  mb: 1,
                }}
              >
                <WhatsAppIcon sx={{ fontSize: 25, color: "#075E54" }} />
              </IconButton>
            </Tooltip>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ pl: 5, pr: 5 }}>
        <Typography variant="subtitle1" gutterBottom>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Typography>
      </Box>
    </Box>
  );
};

export default UserProfile;
