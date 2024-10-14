import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import { DESCRIPTION } from "@/data/constants";
import ContactButtonsGridContainer from "@/components/ContactButtonsGridContainer";
import CenteredTabs from "@/components/CenteredTabs";
import ContactTab from "@/components/ContactTab";
import StoresTab from "@/components/StoresTab";
import ProductsTab from "@/components/ProductsTab";

export default function HomePage() {
  return (
    <Box sx={{ margin: "auto", maxWidth: "100%" }}>
      <Grid xs={12} container rowSpacing={{ md: 2, lg: 3 }}>
        <Grid
          xs={12}
          paddingLeft={{ xs: 4, md: 8 }}
          paddingRight={{ xs: 4, md: 8 }}
          paddingBottom={{ xs: 2, md: 4 }}
          paddingTop={{ md: 4 }}
          sx={{
            margin: "auto",
          }}
        >
          {/* need h1 for SEO */}
          <Typography variant="h5" component="h1" gutterBottom fontWeight={400}>
            {DESCRIPTION}
          </Typography>
        </Grid>
        <Grid xs={12}>
          <CenteredTabs
            products={<ProductsTab />}
            stores={<StoresTab />}
            contact={<ContactTab />}
          />
        </Grid>
        <Grid xs={12}>
          <ContactButtonsGridContainer />
        </Grid>
      </Grid>
    </Box>
  );
}
