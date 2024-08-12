"use client";

import React from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Paper,
  Grid,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
  Pagination,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { useMediaQuery, useTheme } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const page: React.FC = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));
  const isSm = useMediaQuery(theme.breakpoints.only("sm"));
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  const getCols = () => {
    if (isXs) return 1;
    if (isSm) return 2;
    if (isMdUp) return 3;
    return 3;
  };

  const getGap = () => {
    if (isXs) return 90;
    if (isSm) return 80;
    if (isMdUp) return 30;
    return 30;
  };

  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8} sx={{ order: { xs: 2, md: 1 } }}>
          <Item>
            <ImageList
              sx={{ width: "100%", height: "calc(100vh - 100px)", p: 2 }}
              cols={getCols()}
              rowHeight={164}
              gap={getGap()}
            >
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                    style={{ borderRadius: "10px" }}
                  />
                  <ImageListItemBar
                    sx={{ position: "absolute", bottom: 0, left: 0, right: 0 }}
                    title={item.title}
                    subtitle={item.author}
                    actionIcon={
                      <IconButton
                        sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                        aria-label={`info about ${item.title}`}
                      >
                        <InfoIcon />
                      </IconButton>
                    }
                  />
                </ImageListItem>
              ))}
            </ImageList>
            <Stack
              spacing={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                p: 2,
              }}
            >
              <Pagination count={10} color="primary" />
            </Stack>
          </Item>
        </Grid>
        <Grid item xs={12} md={4} sx={{ order: { xs: 1, md: 2 } }}>
          <Item>
            <Stack spacing={2} sx={{ mt: 3 }}>
              <Typography variant="h6" gutterBottom sx={{ color: "#000000" }}>
                Catagories
              </Typography>
              <Button variant="outlined" fullWidth>
                Catagory one
              </Button>
              <Button variant="outlined" fullWidth>
                Catagory Two
              </Button>
              <Button variant="outlined" fullWidth>
                Catagory Three
              </Button>
              <Button variant="outlined" fullWidth>
                Catagory Four
              </Button>
              <Button variant="outlined" fullWidth>
                Catagory Five
              </Button>
            </Stack>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default page;

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    author: "@bkristastucchio",
    rows: 2,
    cols: 3,
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    author: "@nolanissac",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    author: "@hjrc33",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    author: "@tjdragotta",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    author: "@silverdalex",
    rows: 2,
    cols: 3,
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
    author: "@shelleypauls",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
    author: "@peterlaster",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    author: "@southside_customs",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    author: "@nolanissac",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    author: "@hjrc33",
    cols: 2,
  },
];
