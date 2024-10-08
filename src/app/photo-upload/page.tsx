"use client";

import React from "react";
import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import LabeledTextField from "../components/TextField";
import dynamic from "next/dynamic";
import LocationSelect from "../components/LocationSelect";
import Layout from "../components/Layout";

// Dynamically import the ClientDropzone component
const ClientDropzone = dynamic(() => import("./ClientDropzone"), {
  ssr: false,
});

const Page: React.FC = () => {
  return (
    <Layout>
      <Box
        sx={{
          width: "100%",
          p: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontSize: {
              xs: "1.5rem", // Adjust font size for xs screens
              sm: "2rem", // Adjust font size for sm screens if needed
              md: "3rem", // Default size for md and above if needed
            },
          }}
        >
          Create Gallery or Album
        </Typography>

        <Card sx={{ width: "80%" }}>
          <CardContent>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <LabeledTextField
                label="Title"
                textFieldProps={{
                  placeholder:
                    "Add a title to your gallery. E.g : My first photo shoot",
                }}
              />

              <LabeledTextField
                label="Write a caption"
                textFieldProps={{
                  placeholder: "Enter Caption",
                  multiline: true,
                  rows: 4,
                }}
              />

              <Typography variant="subtitle2" gutterBottom>
                Add Location
              </Typography>
              <LocationSelect />

              <Typography variant="subtitle2" gutterBottom>
                Upload Photos
              </Typography>

              <ClientDropzone />
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                p: 5,
              }}
            >
              <Button variant="contained" fullWidth>
                POST
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Layout>
  );
};

export default Page;
