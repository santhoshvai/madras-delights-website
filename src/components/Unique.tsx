"use client";

import * as React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Uniqueness } from "@/data/types";

export default function Unique({
  uniqueness,
  imageSizes,
}: {
  uniqueness: Uniqueness;
  imageSizes: string;
}) {
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
          src={uniqueness.image}
          alt={uniqueness.description}
          sizes={imageSizes}
          style={{
            margin: "auto",
            display: "block",
            maxWidth: "100%",
            width: "auto",
          }}
          priority
        />
      </Box>
      <Typography variant="h6" sx={{ textAlign: "center" }}>
        {uniqueness.description}
      </Typography>
    </Box>
  );
}
