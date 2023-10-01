import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import products from "@/data/products";
import Product from "@/components/Product";

export default function HomePage() {
  return (
    <Box sx={{ p: 2, margin: "auto", maxWidth: "100%" }}>
      <Grid container spacing={{ md: 2, lg: 3 }}>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h5" gutterBottom fontWeight={300}>
            At Madras Delights, we take immense pride in being the distributor
            of Aswin Sweets and Snacks in the Netherlands.
          </Typography>
          <br />
        </Grid>
        <Grid xs={12}>
          <Typography variant="h4" gutterBottom>
            Our Products
          </Typography>
          <Grid container xs={12} spacing={{ xs: 2, md: 2, lg: 3 }}>
            {products.map((product) => {
              return (
                <Grid xs={4} md={3} lg={2} key={product.name}>
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
            (or) <a href="https://wa.me/31610310653">WhatsApp us</a>
          </Typography>
          <br />
          <br />
        </Grid>
      </Grid>
    </Box>
  );
}
