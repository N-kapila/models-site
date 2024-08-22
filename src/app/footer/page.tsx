"use client";

import React from "react";
import { Container, Box, Typography, IconButton, Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const page: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 0,
        mt: 3,
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
          {/* Desktop View */}
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
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
                src="/assets/logo5.png"
                alt="Logo"
                style={{
                  height: "50px",
                  width: "auto",
                  cursor: "pointer",
                }}
              />
            </Link>
          </Box>

          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
            <Link
              href="/"
              color="inherit"
              sx={{
                textDecoration: "none",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Home
            </Link>
            <Link
              href="/#"
              color="inherit"
              sx={{
                textDecoration: "none",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Terms & Conditions
            </Link>
            <Link
              href="/#"
              color="inherit"
              sx={{
                textDecoration: "none",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Terms of Service
            </Link>
            <Link
              href="/#"
              color="inherit"
              sx={{
                textDecoration: "none",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Privacy Policy
            </Link>
          </Box>

          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
            }}
          >
            <IconButton
              href="https://www.facebook.com"
              target="_blank"
              sx={{
                color: "inherit",
                "&:hover": {
                  transform: "scale(1.2)",
                },
              }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              href="https://www.twitter.com"
              target="_blank"
              sx={{
                color: "inherit",
                "&:hover": {
                  transform: "scale(1.2)",
                },
              }}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com"
              target="_blank"
              sx={{
                color: "inherit",
                "&:hover": {
                  transform: "scale(1.2)",
                },
              }}
            >
              <LinkedInIcon />
            </IconButton>
          </Box>

          {/* Mobile View */}

          <Box
            sx={{
              display: { xs: "flex", sm: "none" },
            }}
          >
            <Link href="/">
              <img
                src="/assets/logo6.png"
                alt="Logo"
                style={{
                  height: "50px",
                  width: "auto",
                  cursor: "pointer",
                }}
              />
            </Link>
          </Box>

          <Box
            sx={{
              display: { xs: "flex", sm: "none" },
              fontSize: "13px",
              gap: 1,
              ml: 3,
            }}
          >
            <Link
              href="/"
              color="inherit"
              sx={{
                textDecoration: "none",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Home
            </Link>
            <Link
              href="/#"
              color="inherit"
              sx={{
                textDecoration: "none",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Terms & Conditions
            </Link>

            <Link
              href="/#"
              color="inherit"
              sx={{
                textDecoration: "none",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Privacy Policy
            </Link>
          </Box>

          <Box
            sx={{
              display: { xs: "flex", sm: "none" },
            }}
          >
            <IconButton
              href="https://www.facebook.com"
              target="_blank"
              sx={{
                color: "inherit",
                "&:hover": {
                  transform: "scale(1.2)",
                },
              }}
            >
              <FacebookIcon fontSize="small" />
            </IconButton>
            <IconButton
              href="https://www.twitter.com"
              target="_blank"
              sx={{
                color: "inherit",
                "&:hover": {
                  transform: "scale(1.2)",
                },
              }}
            >
              <TwitterIcon fontSize="small" />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com"
              target="_blank"
              sx={{
                color: "inherit",
                "&:hover": {
                  transform: "scale(1.2)",
                },
              }}
            >
              <LinkedInIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>

        {/* Dekstop View */}
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            justifyContent: "center",
            mt: 2,
          }}
        >
          <Typography variant="body1">
            &copy; {new Date().getFullYear()} Vista Models Site. All Rights
            Reserved.
          </Typography>
        </Box>

        {/* Mobile View */}
        <Box
          sx={{
            display: { xs: "flex", sm: "none" },
            justifyContent: "center",
            mt: 2,
          }}
        >
          <Typography variant="overline" display="block" gutterBottom>
            &copy; {new Date().getFullYear()} Vista Models Site. All Rights
            Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default page;
