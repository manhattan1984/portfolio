import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <Grid
      container
      justifyContent="space-between"
      sx={{
        height: "100vh",
        bgcolor: "primary.main",
      }}
    >
      <Grid item>
        <Typography variant="h2" m={4} color="#fff">
          Michael Greatness
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h2" m={4} color="#fff">
          Loading ...
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Loading;
