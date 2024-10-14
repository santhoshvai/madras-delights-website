"use client";

import Grid from "@mui/material/Unstable_Grid2";
import { Facebook, Instagram } from "@mui/icons-material";
import Button from "@mui/material/Button";

export default function ContactButtonsGridContainer() {
  return (
    <Grid
      container
      sx={{
        justifyContent: "center",
        gap: 4,
        paddingBottom: 4,
      }}
    >
      <Grid>
        <Button
          href="https://www.instagram.com/madrasdelights/"
          variant="outlined"
          size="large"
          startIcon={<Instagram fontSize="large" />}
        >
          Follow on Instagram
        </Button>
      </Grid>
      <Grid>
        <Button
          href="https://www.facebook.com/madrasdelights/"
          variant="outlined"
          size="large"
          startIcon={<Facebook fontSize="large" />}
        >
          Follow on Facebook
        </Button>
      </Grid>
    </Grid>
  );
}
