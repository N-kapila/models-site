import React from "react";
import PostPage from "./post-page";
import { Box, Grid } from "@mui/material";

const numberOfPosts = 6;
const postPages: React.ReactElement[] = [];

for (let i = 1; i <= numberOfPosts; i++) {
  postPages.push(<PostPage key={i} />);
}

function Page() {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={2}>
        {postPages.map((postPage, index) => (
          <Grid item xs={11} md={9} key={index}>
            {postPage}
          </Grid>
        ))}

        <Grid
          item
          md={3}
          sx={{ display: { xs: "none", sm: "none", md: "block" } }}
        >
          xs=4
        </Grid>
      </Grid>
    </Box>
  );
}

export default Page;
