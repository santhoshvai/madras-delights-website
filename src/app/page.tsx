import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
// import Image from "next/image";
import Image from "next/image";
import MediaCard from "@/components/MediaCard";

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
            Welcome to Madras Delights - Your Authorized Distributor of Aswin
            Sweets & Snacks in Europe!
          </Typography>
          <Typography variant="h4" gutterBottom fontWeight={300}>
            At Madras Delights, we take immense pride in being the exclusive
            authorized distributor of Aswin Sweets & Snacks across the European
            region. Our commitment to delivering authentic and high-quality
            products is unwavering, making us your trusted source for a
            delectable range of treats from the heart of India.
          </Typography>
        </Grid>
        <Grid md={12} lg={6}>
          <Image
            src="/aswin_banner.png"
            alt="Ashwin banner"
            style={{
              margin: "auto",
              display: "block",
              maxWidth: "100%",
              height: "auto",
            }}
            width={659}
            height={480}
            priority
          />
        </Grid>
        <Grid xs={12}>
          <Typography variant="h4" gutterBottom>
            About Aswin Sweets & Snacks
          </Typography>
          <Typography variant="body1" gutterBottom>
            At Aswins Sweets, every bite is a celebration of our ethnic Indian
            flavors and rich heritage. Our delicious delights are crafted with
            love, following cherished and traditional recipes that tell the epic
            stories of Indian flavors.
          </Typography>
        </Grid>
        <Grid xs={12}>
          <Typography variant="h4" gutterBottom>
            Our Journey
          </Typography>
          <Typography variant="body1" gutterBottom>
            Our story began in 2004, and today, Aswins Sweets stands as a
            beloved and trusted name in homes across Tamil Nadu, boasting 30
            outlets and counting. Amidst a sea of brands, we've proven ourselves
            as a harbinger of pride, standing the test of time and securing a
            sweet spot in people's hearts with our Indian snacks and savories.
            Under the visionary leadership of our founder, K.R.V. Ganesan, we
            continue to reach new heights, driven by inventive ideas and
            unwavering dedication.
          </Typography>
        </Grid>
        <Grid xs={12}>
          <Typography variant="h4" gutterBottom>
            Why Choose Us?
          </Typography>
          <Typography variant="body1" gutterBottom>
            At Aswins Sweets, we are committed to crafting the finest and
            healthiest Indian snacks, a testament to our rich culinary heritage.
            We believe that life's little joys should be celebrated daily with a
            touch of indulgence. Our exclusive range of delicacies is made with
            locally sourced, pure ingredients and authentic age-old recipes that
            meet the highest safety standards.
          </Typography>
        </Grid>
        <Grid xs={12}>
          <Typography variant="h4" gutterBottom>
            What Sets Us Apart
          </Typography>
          <Grid container xs={12} spacing={{ md: 2, lg: 3 }}>
            {[
              "- We use only organic, cold-pressed groundnut oil, ensuring our oil is never reused. Every mouth-watering sweet carries our love.",
              "- All our sweets and snacks are produced in our sprawling 5-acre Aswins factory located on the Chennai-Trichy highway.",
              "- We use only pounded flour, ground at our mill, to create our bites, as we are dedicated to providing the best diet snacks.",
              "- Our team of 1500 strong, predominantly comprising women, support each other's growth and success.",
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
          <Typography variant="body1" gutterBottom>
            When you unwrap your sweet boxes from Aswins Sweets, remember that
            they were lovingly crafted by us and intended to touch your heart.
          </Typography>
        </Grid>
        <Grid xs={12}>
          <Typography variant="h4" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body1" gutterBottom>
            Experience the magic of Aswin Sweets & Snacks with Madras Delights.
            To place an order or inquire about our product range, feel free to
            contact us at madrasdelights@gmail.com (or) Whatsapp us
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
