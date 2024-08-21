"use client";

import React from "react";
import PostPage from "./post-page";
import {
  Box,
  Grid,
  Stack,
  Paper,
  Typography,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import InterestsIcon from "@mui/icons-material/Interests";
import StoreIcon from "@mui/icons-material/Store";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const numberOfPosts = 6;
const postPages: React.ReactElement[] = [];

for (let i = 1; i <= numberOfPosts; i++) {
  postPages.push(<PostPage key={i} />);
}

const IconChip: React.FC<{
  label: string;
  icon: React.ReactElement;
  path: string;
}> = ({ label, icon, path }) => {
  return (
    <Chip
      icon={icon}
      label={label}
      component="a"
      href={path}
      clickable
      sx={{
        backgroundColor: "black",
        color: "white",
        "& .MuiChip-label": {
          color: "white",
        },
        "& .MuiChip-icon": {
          color: "white",
        },
        "&:hover": {
          backgroundColor: "#d0d2d5 ",
          color: "black",
          "& .MuiChip-label": {
            color: "black",
          },
          "& .MuiChip-icon": {
            color: "black",
          },
        },
        transition: "background-color 0.3s, color 0.3s",
        m: 1,
        p: 2,
      }}
    />
  );
};

function Page() {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={11} md={9}>
          {postPages.map((postPage, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              {postPage}
            </Box>
          ))}
        </Grid>

        <Grid
          item
          md={3}
          sx={{
            display: { xs: "none", sm: "none", md: "block" },
            mt: 3,
            position: "sticky",
            top: 0,
            height: "100vh",
          }}
        >
          <Stack spacing={2}>
            <Item>
              <Typography variant="h5" gutterBottom sx={{ color: "black" }}>
                Catagories
                <Divider />
                <Box sx={{ p: 2 }}>
                  <IconChip
                    label="Photographers"
                    icon={<CameraAltIcon />}
                    path="/"
                  />
                  <IconChip label="Models" icon={<FavoriteIcon />} path="/" />
                  <IconChip
                    label="Salons"
                    icon={<FaceRetouchingNaturalIcon />}
                    path="/"
                  />
                  <IconChip
                    label="Fashion Design"
                    icon={<ColorLensIcon />}
                    path="/"
                  />
                  <IconChip label="Shops" icon={<StoreIcon />} path="/" />
                  <IconChip
                    label="Makeup Artists"
                    icon={<InterestsIcon />}
                    path="/"
                  />

                  {/* <IconChip
                    label="Model Agents/ Agenciess"
                    icon={<LocalFloristIcon />}
                    path="/"
                  /> */}
                </Box>
              </Typography>
            </Item>
            <Item>
              <Typography variant="h6" gutterBottom sx={{ color: "black" }}>
                Suggestions
                <Divider />
                <List
                  dense
                  sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "background.paper",
                  }}
                >
                  {[0, 1, 2, 3, 4].map((value) => {
                    const labelId = `checkbox-list-secondary-label-${value}`;
                    return (
                      <ListItem key={value} disablePadding>
                        <ListItemButton>
                          <ListItemAvatar>
                            <Avatar
                              alt={`Avatar n°${value + 1}`}
                              src={`/assets/${value + 1}.png`} // Adjusted path
                            />
                          </ListItemAvatar>
                          <ListItemText
                            id={labelId}
                            primary={`Person ${value + 1}`}
                          />
                          <IconButton aria-label="delete" size="small">
                            <PersonAddAlt1Icon fontSize="small" />
                          </IconButton>
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>
              </Typography>
            </Item>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Page;
