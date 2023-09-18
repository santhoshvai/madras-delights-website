import * as React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Product({ product }: { product: Product }) {
  return (
    <Box
      sx={{
        margin: "auto",
        maxWidth: "100%",
      }}
    >
      <Image
        src={require("../../public/" + product.image)}
        alt={product.name}
        style={{
          margin: "auto",
          display: "block",
          maxWidth: "100%",
          height: "auto",
        }}
        priority
      />

      <Typography variant="h5" sx={{ textAlign: "center" }}>
        {product.name}
      </Typography>
    </Box>
  );
}
