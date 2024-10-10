"use client";

import * as React from "react";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const getScale = (hover: boolean, product: Product) => {
  let scale = hover ? 2.4 : 1.4;
  if (product.imageScale) {
    scale = hover ? product.imageScale.hover : product.imageScale.normal;
  }
  return "scale(" + scale + ")";
};

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: theme.typography.pxToRem(16),
    border: "1px solid #dadde9",
  },
}));

export default function Product({ product }: { product: Product }) {
  const [hover, setHover] = React.useState(false);
  return (
    <LightTooltip title={product.description}>
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
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          {product.name}
        </Typography>
      </Box>
    </LightTooltip>
  );
}
