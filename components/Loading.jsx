import { Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
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
        <Typography
          variant="h2"
          m={4}
          color="#fff"
          component={motion.div}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
        >
          Loading ...
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Loading;
