import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";

const ContactTab = () => {
  return (
    <Grid container direction="column" spacing={2}>
      <Grid
        xs={12}
        md={6}
        sx={{
          margin: "auto",
        }}
      >
        <Grid>
          <Typography variant="h5" gutterBottom>
            Wholesale and Retail Inquiries
          </Typography>
        </Grid>
        <Grid>
          <Typography variant="h6" gutterBottom fontWeight={200}>
            Interested in stocking our snacks in your store or buying in bulk?
            We're here to help! For wholesale or retail inquiries, please
            contact us at:{" "}
            <a href="mailto:madrasdelights@gmail.com">
              madrasdelights@gmail.com
            </a>{" "}
            (or){" "}
            <a href="https://wa.me/31610310653">WhatsApp us at +31610310653</a>
          </Typography>
        </Grid>
      </Grid>
      <Grid
        xs={12}
        md={6}
        sx={{
          margin: "auto",
        }}
      >
        <Grid>
          <Typography variant="h5" gutterBottom>
            Bulk Orders for Parties, Functions, and Corporate Events
          </Typography>
        </Grid>
        <Grid>
          <Typography
            variant="h6"
            component={"p"}
            gutterBottom
            fontWeight={200}
          >
            Planning a party, function, or corporate event? We offer bulk snack
            orders tailored to your needs! Whether it's for a festive
            celebration, a corporate meeting, or any special occasion, we're
            here to provide delicious snacks your guests will love. Contact us
            today for more details on bulk orders and customization options!
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ContactTab;
