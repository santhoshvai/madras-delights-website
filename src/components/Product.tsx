"use client";

import * as React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const getScale = (hover: boolean, product: Product) => {
  let scale = hover ? 2.8 : 1.8;
  if (product.imageScale) {
    scale = hover ? product.imageScale.hover : product.imageScale.normal;
  }
  return "scale(" + scale + ")";
};

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
          src={`/${product.image}`}
          alt={product.name}
          width={442}
          height={663}
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
          style={{
            margin: "auto",
            display: "block",
            maxWidth: "100%",
            height: "auto",
            transition: "transform .5s ease",
            transform: getScale(hover, product),
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
