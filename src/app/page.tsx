import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import products from "@/data/products";
import Product from "@/components/Product";

export default function HomePage() {
  return (
    <Box sx={{ p: 2, margin: "auto", maxWidth: "100%" }}>
      <Grid container spacing={{ md: 2, lg: 3 }}>
        <Grid
          md={12}
          lg={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h3" gutterBottom>
            Welcome to Madras Delights - Your Distributor of Aswin Sweets &
            Snacks in the Netherlands!
          </Typography>
          <Typography variant="h4" gutterBottom fontWeight={300}>
            At Madras Delights, we take immense pride in being the distributor
            of Aswin Sweets & Snacks in the Netherlands. Our commitment to
            delivering authentic and high-quality products is unwavering, making
            us your trusted source for a delectable range of treats from the
            heart of India.
          </Typography>
        </Grid>
        <Grid md={12} lg={6}>
          <Image
            src={require("../../public/aswin_banner.png")}
            alt="Ashwin banner"
            style={{
              margin: "auto",
              display: "block",
              maxWidth: "100%",
              height: "auto",
            }}
            priority
          />
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
        </Grid>
        <Grid xs={12}>
          <Typography variant="h4" gutterBottom>
            About Aswin Sweets & Snacks
          </Typography>
          <Typography variant="body1" gutterBottom>
            Aswins Sweets stands as a beloved and trusted name in homes across
            Tamil Nadu, boasting 30 outlets and counting. Amidst a sea of
            brands, they have proven themselves as a harbinger of pride,
            standing the test of time and securing a sweet spot in people's
            hearts with Indian snacks and savories.
          </Typography>
        </Grid>
        <Grid xs={12}>
          <Typography variant="h4" gutterBottom>
            Why Choose Aswins?
          </Typography>
          <Typography variant="body1" gutterBottom>
            Aswins Sweets are committed to crafting the finest and healthiest
            Indian snacks, a testament to India's rich culinary heritage. Their
            exclusive range of delicacies is made with locally sourced, pure
            ingredients and authentic age-old recipes that meet the highest
            safety standards.
          </Typography>
        </Grid>
        <Grid xs={12}>
          <Typography variant="h4" gutterBottom>
            What Sets Aswins Apart
          </Typography>
          <Grid container xs={12} spacing={{ md: 2, lg: 3 }}>
            {[
              "- They use only organic, cold-pressed groundnut oil, ensuring the oil is never reused.",
              "- All their sweets and snacks are produced in a sprawling 5-acre Aswins factory located on the Chennai-Trichy highway.",
              "- They use pounded flour, ground at their own mill, to create their bites, as they are dedicated to providing the best diet snacks.",
              "- Their team of 1500 strong, predominantly comprising women, support each other's growth and success.",
            ].map((text) => {
              return (
                <Grid xs={12} md={6} lg={4} xl={3} key={text}>
                  <Typography variant="body1" gutterBottom>
                    {text}
                  </Typography>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Grid xs={12}>
          <Typography variant="h4" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body1" gutterBottom>
            Experience the magic of Aswin Sweets & Snacks with Madras Delights.
            To place an order or inquire about our product range, feel free to
            contact us at{" "}
            <a href="mailto:madrasdelights@gmail.com">
              madrasdelights@gmail.com
            </a>{" "}
            (or) Whatsapp us
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
