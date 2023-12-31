"use client";

import * as React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Product({ product }: { product: Product }) {
  const [hover, setHover] = React.useState(false);
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
          src={require("../../public/" + product.image)}
          alt={product.name}
          height={663}
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
          style={{
            margin: "auto",
            display: "block",
            maxWidth: "100%",
            height: "auto",
            transition: "transform .5s ease",
            transform: hover ? "scale(2.8)" : "scale(1.8)",
          }}
          priority
        />
      </Box>
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        {product.name}
      </Typography>
    </Box>
  );
}
