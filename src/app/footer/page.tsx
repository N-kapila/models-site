"use client";

import React from "react";
import { Container, Box, Typography, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";

const page: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 3,
        backgroundColor: "#000000",
        color: "#ffffff",
        zIndex: 0,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link href="/" passHref>
            <img
              src="/assets/logo5.png"
              alt="Logo"
              style={{
                height: "70px",
                width: "auto",
                cursor: "pointer",
              }}
            />
          </Link>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Link href="/" color="inherit">
              Home
            </Link>
            <Link href="/#" color="inherit">
              Terms & Conditions
            </Link>
            <Link href="/#" color="inherit">
              Terms of Service
            </Link>
            <Link href="/#" color="inherit">
              Privacy Policy
            </Link>
          </Box>
          <Box>
            <IconButton
              href="https://www.facebook.com"
              target="_blank"
              color="inherit"
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              href="https://www.twitter.com"
              target="_blank"
              color="inherit"
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com"
              target="_blank"
              color="inherit"
            >
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <Typography variant="body1">
            &copy; {new Date().getFullYear()} Vista Models Site. All Rights
            Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default page;
