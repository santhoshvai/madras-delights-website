import * as React from "react";
import Image from "next/image";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import SvgIcon from "@mui/material/SvgIcon";

export default function NavBar() {
  return (
    <Box
      sx={{
        display: "flex",
        flexGrow: 1,
        justifyContent: "center",
      }}
    >
      <Image
        src={require("../../public/logo-nobackground.svg")}
        alt="madras delights logo"
        priority
        width={256}
        height={256}
      />
      {/* <AppBar
        position="static"
        style={{
          backgroundColor: "#000",
        }}
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}></Box>
          <Button color="inherit">Our Products</Button>
          <Button color="inherit">Contact Us</Button>
        </Toolbar>
      </AppBar> */}
    </Box>
  );
}
