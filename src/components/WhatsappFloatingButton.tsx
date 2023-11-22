"use client";

import * as React from "react";
import Box from "@mui/material/Box";

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
        <img
          alt="Chat on WhatsApp"
          src="WhatsAppButtonGreenLarge.svg"
          width={207}
          height={48}
        />
      </a>
    </Box>
  );
}
