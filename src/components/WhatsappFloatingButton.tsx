"use client";

import * as React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function WhatsappFloatingButton() {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: "30px",
        right: "15px",
        cursor: "pointer",
        zIndex: 99999999,
      }}
    >
      <a aria-label="Chat on WhatsApp" href="https://wa.me/31610310653">
        {" "}
        <img alt="Chat on WhatsApp" src="WhatsAppButtonGreenLarge.svg" />
      </a>
    </Box>
  );
}
