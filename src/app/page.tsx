import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import products from "@/data/products";
import Product from "@/components/Product";
import uniqueness from "@/data/uniqueness";
import Unique from "@/components/Unique";
import { DESCRIPTION } from "@/data/constants";

export default function HomePage() {
  return (
    <Box sx={{ p: 2, margin: "auto", maxWidth: "100%" }}>
      <Grid container spacing={{ md: 2, lg: 3 }}>
        <Grid>
          {/* need h1 for SEO */}
          <Typography variant="h5" component="h1" gutterBottom fontWeight={400}>
            {DESCRIPTION}
          </Typography>
        </Grid>
        <br />
        <Grid xs={12}>
          <Typography variant="h4" gutterBottom>
            What makes Aswins sweets and snacks special?
          </Typography>
          <Grid
            container
            xs={12}
            spacing={{ xs: 2, md: 2, lg: 3 }}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {uniqueness.map((unique) => {
              return (
                <Grid xs={12} md={6} lg={4} key={unique.image}>
                  <Unique uniqueness={unique} />
                </Grid>
              );
            })}
          </Grid>
          <br />
        </Grid>
        <Grid xs={12}>
          <Typography variant="h4" gutterBottom>
            Our Products
          </Typography>
          <Grid
            container
            xs={12}
            spacing={{ xs: 1, md: 2, lg: 3 }}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {products.map((product) => {
              return (
                <Grid xs={6} md={4} lg={3} key={product.name}>
                  <Product product={product} />
                </Grid>
              );
            })}
          </Grid>
          <br />
        </Grid>
        <Grid xs={12}>
          <Typography variant="h4" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="h5" gutterBottom fontWeight={300}>
            Experience the magic of Aswin Sweets and Snacks with Madras
            Delights. To place an order or inquire about our product range, feel
            free to contact us at{" "}
            <a href="mailto:madrasdelights@gmail.com">
              madrasdelights@gmail.com
            </a>{" "}
            (or){" "}
            <a href="https://wa.me/31610310653">WhatsApp us at +31610310653</a>
          </Typography>
          <br />
          <br />
        </Grid>
      </Grid>
    </Box>
  );
}
