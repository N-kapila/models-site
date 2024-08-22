"use client";

import React from "react";
import { useRef, ChangeEvent, useState } from "react";
import {
  Box,
  Divider,
  Avatar,
  IconButton,
  Typography,
  Grid,
  Paper,
  Tooltip,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  ImageList,
  ImageListItem,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ShareIcon from "@mui/icons-material/Share";
import EditIcon from "@mui/icons-material/Edit";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import CloseIcon from "@mui/icons-material/Close";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import Link from "next/link";
import { useMediaQuery, useTheme } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

interface ImageItem {
  img: string;
  title: string;
  profileName: string;
  description: string;
  location: string;
}

const UserProfile = () => {
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [open, setOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState<ImageItem | null>(
    null
  );

  const theme = useTheme();
  const isXsOrSm = useMediaQuery(theme.breakpoints.down("sm"));
  const isMdOrUp = useMediaQuery(theme.breakpoints.up("md"));

  const cols = isMdOrUp ? 5 : 3;

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

  const handleClickOpen = (item: ImageItem) => {
    setSelectedImage(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  return (
    <Box
      sx={{
        width: "100vw",
        // height: "100%",
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

        {/* Profile Photo */}
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
              width: 170,
              height: 170,
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
              bottom: 10,
              right: 10,
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.8)",
              },
            }}
          >
            <PhotoCameraIcon />
          </IconButton>
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
            <Tooltip title="Follow" arrow>
              <Link href="" passHref>
                <IconButton aria-label="Edit" size="large" sx={{ mb: 1 }}>
                  <PersonAddAltOutlinedIcon
                    sx={{ fontSize: 25, color: "Black" }}
                  />
                </IconButton>
              </Link>
            </Tooltip>
            <Tooltip title="Edit Profile" arrow>
              <Link href="/user-settings" passHref>
                <IconButton aria-label="Edit" size="large" sx={{ mb: 1 }}>
                  <EditIcon sx={{ fontSize: 25 }} />
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

      <Grid container spacing={1} sx={{ mt: 5, ml: 2 }}>
        <Grid
          item
          md={2}
          sx={{ display: { xs: "none", sm: "none", md: "block" } }}
        >
          <Item>
            {" "}
            <Typography variant="h6" gutterBottom sx={{ color: "black" }}>
              Followings
              <Divider />
              <List
                dense
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                {[0, 1, 2, 3].map((value) => {
                  const labelId = `checkbox-list-secondary-label-${value}`;
                  return (
                    <ListItem key={value} disablePadding>
                      <ListItemButton>
                        <ListItemAvatar>
                          <Avatar
                            alt={`Avatar n°${value + 1}`}
                            src={`/static/images/avatar/${value + 1}.jpg`}
                          />
                        </ListItemAvatar>
                        <ListItemText
                          id={labelId}
                          primary={`Person ${value + 1}`}
                        />
                      </ListItemButton>
                    </ListItem>
                  );
                })}
              </List>
            </Typography>
          </Item>
        </Grid>

        <Grid item xs={11} md={9.5}>
          <Item>
            <ImageList
              sx={{ width: "100%", height: "100%" }}
              cols={cols}
              rowHeight={164 + 20}
              gap={8}
            >
              {itemData.map((item: ImageItem) => (
                <ImageListItem
                  key={item.img}
                  sx={{ position: "relative" }}
                  onClick={() => handleClickOpen(item)}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <IconButton
                    sx={{
                      position: "absolute",
                      bottom: 45,
                      left: 3,
                      color: "white",
                      "&:hover": {
                        color: "red",
                      },
                    }}
                  >
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton
                    sx={{
                      position: "absolute",
                      bottom: 5,
                      left: 3,
                      color: "white",
                      "&:hover": {
                        color: "blue",
                      },
                    }}
                  >
                    <ModeCommentIcon />
                  </IconButton>
                </ImageListItem>
              ))}
            </ImageList>

            <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
              <DialogTitle
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {selectedImage?.profileName}

                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    color: "black",
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </DialogTitle>

              <Box sx={{ display: "flex", ml: 3 }}>
                <LocationOnOutlinedIcon fontSize="small" />
                <Typography variant="subtitle2" gutterBottom>
                  {selectedImage?.location}
                </Typography>
              </Box>

              <DialogContent>
                <img
                  src={`${selectedImage?.img}?w=800&h=600&fit=crop&auto=format`}
                  alt={selectedImage?.title}
                  style={{ width: "100%", height: "auto" }}
                />
                <Box sx={{ p: 2 }}>
                  <IconButton
                    sx={{
                      color: "Black",
                      p: 2,
                      "&:hover": {
                        color: "red",
                      },
                    }}
                  >
                    <FavoriteBorderIcon />
                  </IconButton>
                  <IconButton
                    sx={{
                      color: "black",
                      p: 2,
                      "&:hover": {
                        color: "blue",
                      },
                    }}
                  >
                    <ModeCommentOutlinedIcon />
                  </IconButton>
                  <IconButton
                    sx={{
                      color: "black",
                      p: 2,
                      "&:hover": {
                        color: "black",
                      },
                    }}
                  >
                    <ShareIcon />
                  </IconButton>

                  <Typography variant="h6" gutterBottom>
                    {selectedImage?.title}
                  </Typography>
                  <Typography>{selectedImage?.description}</Typography>
                </Box>
              </DialogContent>
            </Dialog>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    profileName: "Alice Johnson",
    description: "Game time with a classic basketball.",
    location: "New York, USA",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    profileName: "John Doe",
    description: "A juicy burger with all the fixings.",
    location: "Los Angeles, USA",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    profileName: "Mike Anderson",
    description: "Capturing moments with an old-school camera.",
    location: "San Francisco, USA",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    profileName: "Emma Watson",
    description: "A perfect cup of coffee to start the day.",
    location: "Seattle, USA",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    profileName: "Olivia Brown",
    description: "A collection of stylish hats for every occasion.",
    location: "Paris, France",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    profileName: "Liam Smith",
    description: "Fresh organic honey straight from the hive.",
    location: "Austin, USA",
  },
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    profileName: "Noah Williams",
    description: "A delightful morning meal with a beautiful setup.",
    location: "Chicago, USA",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    profileName: "Ava Davis",
    description: "A lush green fern thriving in a cozy corner.",
    location: "Portland, USA",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    profileName: "Sophia Wilson",
    description: "Wild mushrooms growing in a damp forest.",
    location: "Vancouver, Canada",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato Basil",
    profileName: "Mason Moore",
    description: "Freshly picked tomatoes with basil leaves.",
    location: "Naples, Italy",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea Star",
    profileName: "Isabella Taylor",
    description: "A colorful sea star resting on the ocean floor.",
    location: "Sydney, Australia",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    profileName: "Ethan Jones",
    description: "An adventurous bike ride through scenic routes.",
    location: "Amsterdam, Netherlands",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato Basil",
    profileName: "Mason Moore",
    description: "Freshly picked tomatoes with basil leaves.",
    location: "Naples, Italy",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea Star",
    profileName: "Isabella Taylor",
    description: "A colorful sea star resting on the ocean floor.",
    location: "Sydney, Australia",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    profileName: "Ethan Jones",
    description: "An adventurous bike ride through scenic routes.",
    location: "Amsterdam, Netherlands",
  },
];

export default UserProfile;
