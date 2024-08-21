"use client";

import React, { useState } from "react";
import {
  Box,
  Paper,
  Grid,
  Typography,
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardMedia,
  CardContent,
  CardActions,
  Dialog,
  useMediaQuery,
  Menu,
  MenuItem,
} from "@mui/material";
import { styled, Theme } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import { keyframes } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const images = [
  "https://www.photowant.com/wp-content/uploads/2022/10/Modeling-in-Kerala-Photowant-110.jpg",
  "https://www.ukmodels.co.uk/wp-content/uploads/2020/08/shutterstock_397813951-scaled.jpg",
  "https://www.ukmodels.co.uk/wp-content/uploads/2020/08/shutterstock_1458127937-scaled.jpg",
  "https://www.ukmodels.co.uk/wp-content/uploads/2020/08/shutterstock_746398405-scaled.jpg",
  "https://www.photowant.com/wp-content/uploads/2022/10/Modeling-in-Kerala-Photowant-110.jpg",
  "https://i.pinimg.com/originals/8f/99/ce/8f99cea8764e26e2ee0c95e0597c9be4.jpg",
  "https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/6156/large_thumb%403x.jpg", // This will be the "+5 more" card
];

const StyledDialog = styled(Dialog)(({ theme }: { theme: Theme }) => ({
  "& .MuiDialog-paper": {
    width: "90vw",
    height: "70vh",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      width: "90vw",
      height: "90vh",
    },
  },
}));

const ImageContainer = styled(Box)(({ theme }: { theme: Theme }) => ({
  position: "relative",
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#000", // Set background color
}));

const StyledImage = styled("img")(({ theme }: { theme: Theme }) => ({
  maxWidth: "100%",
  maxHeight: "100%",
  objectFit: "contain",
  animation: `${effect} 0.5s ease-in-out`,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "auto",
  },
}));

const effect = keyframes`
///////slideIn
//   0% {
//     transform: translateX(100%);
//     opacity: 0;
//   }
//   100% {
//     transform: translateX(0);
//     opacity: 1;
//   }

/////fadeInScaleUp
0% {
    opacity: 0;
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }

////zoomIn
//   0% {
//     transform: scale(0.5);
//     opacity: 0;
//   }
//   100% {
//     transform: scale(1);
//     opacity: 1;
//   }


////slideFromTop
// 0% {
//     transform: translateY(-100%);
//     opacity: 0;
//   }
//   100% {
//     transform: translateY(0);
//     opacity: 1;
//   }
`;

const options = ["Save Post", "Copy Link", "Report"];
const ITEM_HEIGHT = 48;

const Page: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullScreen = useMediaQuery("(max-width:600px)"); // Directly use media query string

  const handleOpen = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const MenuOpen = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Card sx={{ minWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <>
              <IconButton aria-label="settings" onClick={handleClick}>
                <MoreVertIcon />
              </IconButton>
              <Menu
                id="long-menu"
                anchorEl={anchorEl}
                open={MenuOpen}
                onClose={handleMenuClose}
                PaperProps={{
                  style: {
                    maxHeight: ITEM_HEIGHT * 4.5, // Adjust max height based on the number of items
                    width: "15ch", // Adjust width as needed
                  },
                }}
              >
                {options.map((option) => (
                  <MenuItem key={option} onClick={handleClose}>
                    {option}
                  </MenuItem>
                ))}
              </Menu>
            </>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>

        <Box sx={{ p: 3 }}>
          <Grid container spacing={2}>
            {images.slice(0, 3).map((image, index) => (
              <Grid item xs={6} sm={6} md={3} key={index}>
                <Card>
                  <CardMedia
                    component="img"
                    image={image}
                    alt={`Image ${index + 1}`}
                    sx={{
                      height: {
                        xs: 200,
                        md: 300,
                      },
                      cursor: "pointer",
                      transition: "transform 0.3s ease-in-out",
                      "&:hover": {
                        transform: "scale(1.15)",
                      },
                    }}
                    onClick={() => handleOpen(index)}
                  />
                </Card>
              </Grid>
            ))}
            <Grid item xs={6} sm={6} md={3}>
              <Card sx={{ position: "relative" }}>
                <CardMedia
                  component="img"
                  image={images[3]} // Use the fourth image as background
                  alt="More images"
                  sx={{
                    filter: "blur(4px)",
                    height: {
                      xs: 200,
                      md: 300,
                    },
                    cursor: "pointer",
                  }}
                  onClick={() => handleOpen(3)}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "24px",
                    fontWeight: "bold",
                  }}
                  onClick={() => handleOpen(3)}
                >
                  +{images.length - 3} more
                </Box>
              </Card>
            </Grid>
          </Grid>

          <StyledDialog
            open={open}
            onClose={handleClose}
            fullScreen={fullScreen}
            maxWidth="md"
          >
            <ImageContainer>
              <StyledImage
                key={currentIndex}
                src={images[currentIndex]}
                alt={`Image ${currentIndex + 1}`}
              />
              <IconButton
                onClick={handleClose}
                sx={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  color: "#fff",
                }}
              >
                <CloseIcon />
              </IconButton>
              <IconButton
                onClick={handlePrev}
                sx={{
                  position: "absolute",
                  left: 16,
                  color: "#fff",
                }}
              >
                <ArrowBackIosNewIcon />
              </IconButton>
              <IconButton
                onClick={handleNext}
                sx={{
                  position: "absolute",
                  right: 16,
                  color: "#fff",
                }}
              >
                <ArrowForwardIosIcon />
              </IconButton>
            </ImageContainer>
          </StyledDialog>
        </Box>

        <CardActions sx={{ ml: 3 }}>
          <IconButton
            sx={{
              color: "Black",
              p: 1,
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
              p: 1,
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
              p: 1,
              "&:hover": {
                color: "black",
              },
            }}
          >
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Page;
