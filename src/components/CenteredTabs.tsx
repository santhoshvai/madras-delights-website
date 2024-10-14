"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs
    {...props}
    centered
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    width: "100%",
    backgroundColor: "#fff",
  },
});

const StyledTab = styled((props: { label: string }) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  textTransform: "none",
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.pxToRem(16),
  "@media (min-width:600px)": {
    fontSize: theme.typography.pxToRem(20),
  },
  "@media (min-width:769px)": {
    fontSize: theme.typography.pxToRem(24),
  },
  marginRight: theme.spacing(2),
  color: "rgba(255, 255, 255, 0.7)",
  "&.Mui-selected": {
    color: "#fff",
  },
}));

export default function CenteredTabs({
  products,
  stores,
  contact,
}: {
  products: React.ReactNode;
  stores: React.ReactNode;
  contact: React.ReactNode;
}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: "100%", bgcolor: "rgba(164, 102, 69, 1)" }}>
        <StyledTabs value={value} onChange={handleChange}>
          <StyledTab label="Stores" />
          <StyledTab label="Our Products" />
          <StyledTab label="Contact Us" />
        </StyledTabs>
      </Box>
      <Grid container direction="column" padding={{ xs: 4, sm: 6 }}>
        {value === 0 && stores}
        {value === 1 && products}
        {value === 2 && contact}
      </Grid>
    </>
  );
}
