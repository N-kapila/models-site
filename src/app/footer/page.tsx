"use client";

import React from "react";
import { Container, Box, Typography, Link, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const page: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: "#000000",
        color: "#ffffff",
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
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#ffffff",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          <Box>
            <Link href="/" color="inherit" sx={{ mx: 1 }}>
              Home
            </Link>
            <Link href="/terms" color="inherit" sx={{ mx: 1 }}>
              Terms & Conditions
            </Link>
            <Link href="/service" color="inherit" sx={{ mx: 1 }}>
              Terms of Service
            </Link>
            <Link href="/privacy" color="inherit" sx={{ mx: 1 }}>
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
