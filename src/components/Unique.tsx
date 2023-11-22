"use client";

import * as React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Unique({ uniqueness }: { uniqueness: Uniqueness }) {
  return (
    <Box
      sx={{
        margin: "auto",
        maxWidth: "100%",
      }}
    >
      <Box
        sx={{
          overflow: "hidden",
          borderRadius: "10px",
        }}
      >
        <Image
          src={require("../../public/" + uniqueness.image)}
          alt={uniqueness.image}
          height={195}
          style={{
            margin: "auto",
            display: "block",
            maxWidth: "100%",
            height: "auto",
          }}
          priority
        />
      </Box>
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        {uniqueness.description}
      </Typography>
    </Box>
  );
}
