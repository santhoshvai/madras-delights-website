"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import products from "@/data/products";
import Product from "@/components/Product";
import uniqueness from "@/data/uniqueness";
import Unique from "@/components/Unique";
import { styled } from "@mui/material/styles";
import { DESCRIPTION } from "@/data/constants";
import { Facebook, Instagram } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import Button from "@mui/material/Button";

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

function CenteredTabs({
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
      <Grid xs={12} sx={{ p: 3 }}>
        {value === 0 && stores}
        {value === 1 && products}
        {value === 2 && contact}
      </Grid>
    </>
  );
}

export default function HomePage() {
  return (
    <Box sx={{ margin: "auto", maxWidth: "100%" }}>
      <Grid container spacing={{ md: 2, lg: 3 }}>
        <Grid sx={{ p: 3 }}>
          {/* need h1 for SEO */}
          <Typography variant="h5" component="h1" gutterBottom fontWeight={400}>
            {DESCRIPTION}
          </Typography>
        </Grid>
        <br />
        <CenteredTabs
          products={<Products />}
          stores={<Stores />}
          contact={<Contact />}
        />
        <Grid xs={12} sx={{ p: 3 }}>
          <Box
            sx={{
              display: "flex",
              gap: 4,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              href="https://www.instagram.com/madrasdelights/"
              variant="outlined"
              size="large"
              startIcon={<Instagram fontSize="large" />}
            >
              Follow on Instagram
            </Button>
            <Button
              href="https://www.facebook.com/madrasdelights/"
              variant="outlined"
              size="large"
              startIcon={<Facebook fontSize="large" />}
            >
              Follow on Facebook
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

const Products = () => {
  return (
    <>
      {/* <Typography variant="h4" gutterBottom>
        Our Products
      </Typography> */}
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
            <Grid xs={3} lg={2} key={product.name}>
              <Product product={product} />
            </Grid>
          );
        })}
      </Grid>
      <Grid xs={12} sx={{ p: 3 }}>
        <br />
        <Typography variant="h5" fontWeight={500} gutterBottom>
          What makes Aswins sweets and snacks special?
        </Typography>
        <br />
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
    </>
  );
};

const OfflineStore = ({
  storeName,
  address,
  googleMapsLink,
  webStoreLink,
}: {
  storeName: string;
  address: string;
  googleMapsLink: string;
  webStoreLink?: string;
}) => {
  return (
    <li>
      <Typography variant="h6" fontWeight={200}>
        {storeName}
      </Typography>
      <a href={googleMapsLink} target="_blank" rel="noopener noreferrer">
        {address}
      </a>
      <br />
      {!!webStoreLink && (
        <a href={webStoreLink} target="_blank" rel="noopener noreferrer">
          Web Store
        </a>
      )}
    </li>
  );
};

const OnlineStore = ({
  storeName,
  link,
}: {
  storeName: string;
  link: string;
}) => {
  return (
    <li>
      <Typography variant="h6" fontWeight={200}>
        {storeName}
      </Typography>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Web Store
      </a>
    </li>
  );
};

const Stores = () => {
  return (
    <Grid xs={12} sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        You can find our products in the following stores:
      </Typography>
      <br />
      <Typography variant="h6" gutterBottom fontWeight={400}>
        Almere/Lelystad Region
      </Typography>
      <Typography variant="body1" fontWeight={200}>
        <ul>
          <OfflineStore
            storeName="Ganesh Food Centre"
            address="Edvard Munchweg 28 F, 1328 MA Almere"
            googleMapsLink="https://maps.app.goo.gl/D9q2pmZ6DsbJ5nF57"
          />
          <OnlineStore
            storeName="Laal Mirchi"
            link="https://www.laalmirchi.nl/search?q=aswins"
          />
          <OnlineStore
            storeName="Sara Foods"
            link="https://sarafoods.nl/#bbf4/fullscreen/m=and&q=aswins"
          />
          <OnlineStore
            storeName="Thanima Fresh (also ships to Weesp/Hilversum region)"
            link="https://thanimafresh.nl/search?type=product%2Carticle%2Cpage&options%5Bprefix%5D=last&q=aswins"
          />
          <OfflineStore
            storeName="Toko Almere Poort"
            address="Europalaan 907, 1363 BM Almere"
            googleMapsLink="https://maps.app.goo.gl/TMQKQyMBGZ6dyoTi6"
          />
        </ul>
      </Typography>
      <Typography variant="h5" gutterBottom fontWeight={400}>
        Weesp/Hilversum Region
      </Typography>
      <Typography variant="h6" gutterBottom fontWeight={200}>
        <ul>
          <OfflineStore
            storeName="Wins Wereld Winkel"
            address="Leeuwenstraat 36, 1211 EV Hilversum"
            googleMapsLink="https://maps.app.goo.gl/KwvLPv3GhpUxH88c7"
          />
        </ul>
      </Typography>
      <Typography variant="h5" gutterBottom fontWeight={400}>
        Utrecht Region
      </Typography>
      <Typography variant="h6" gutterBottom fontWeight={200}>
        <ul>
          <OfflineStore
            storeName="India Markt Maarssen"
            address="Maarssenbroeksedijk 6, 3606 AN Maarssen"
            googleMapsLink="https://maps.app.goo.gl/2NE8ZQNB51XQrBpQ9"
          />
          <OfflineStore
            storeName="Nirmala Stores B.V."
            address="Steynlaan 66, 3701 EH Zeist"
            googleMapsLink="https://maps.app.goo.gl/87z7j1jRioKLRqfE6"
          />
          <OfflineStore
            storeName="PANJAB SUPERMARKET"
            address="Muntplein 10, 3437 AN Nieuwegein"
            googleMapsLink="https://maps.app.goo.gl/wkMLnwaD98u6hdT19"
          />
          <OfflineStore
            storeName="SUVAI Restaurant"
            address="Van Eysingalaan 388, 3527 VW Utrecht"
            googleMapsLink="https://maps.app.goo.gl/5fjWLDKjQhdGog7z8"
          />
        </ul>
      </Typography>
      <Typography variant="h5" gutterBottom fontWeight={400}>
        Amsterdam/Amstelveen Region
      </Typography>
      <Typography variant="h6" gutterBottom fontWeight={200}>
        <ul>
          <OnlineStore
            storeName="Grocery Hub (also ships throughout the Netherlands and Europe)"
            link="https://groceryhub.nl/search?q=aswins&options%5Bprefix%5D=last"
          />
          <OfflineStore
            storeName="Kashmir Food Store Indian Supermarket"
            address="Lindenlaan 376, 1185 NM Amstelveen"
            googleMapsLink="https://maps.app.goo.gl/C9SQqmtjQXWaCrPc7"
          />
        </ul>
      </Typography>
      <Typography variant="h5" gutterBottom fontWeight={400}>
        The Hague and Rotterdam Region
      </Typography>
      <Typography variant="h6" gutterBottom fontWeight={200}>
        <ul>
          <OnlineStore
            storeName="Amazing India (also ships throughout the Netherlands)"
            link="https://amazingindia.nl/product-category/aswins-chitale-snack/"
          />
        </ul>
      </Typography>
      <Typography variant="h5" gutterBottom fontWeight={400}>
        Eindhoven Region
      </Typography>
      <Typography variant="h6" gutterBottom fontWeight={200}>
        <ul>
          <OfflineStore
            storeName="Dbanyan (also ships throughout the Netherlands and Belgium)"
            address="Meerwater 15, 5658 LP, Eindhoven"
            googleMapsLink="https://maps.app.goo.gl/HxnMxqEhaBkfmeot8"
            webStoreLink={"https://dbanyan.nl/search?type=product&q=aswins"}
          />
        </ul>
      </Typography>
      <Typography variant="h5" gutterBottom fontWeight={400}>
        Arnhem Region
      </Typography>
      <Typography variant="h6" gutterBottom fontWeight={200}>
        <ul>
          <li>
            <Typography variant="h6" fontWeight={200}>
              Desi Basket
            </Typography>
          </li>
        </ul>
      </Typography>
    </Grid>
  );
};

const Contact = () => {
  return (
    <Grid xs={12} sx={{ p: 3 }}>
      {/* <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography> */}
      <Typography variant="h5" gutterBottom>
        Wholesale and Retail Inquiries
      </Typography>
      <Typography variant="h6" gutterBottom fontWeight={200}>
        Interested in stocking our snacks in your store or buying in bulk? We're
        here to help! For wholesale or retail inquiries, please contact us at:{" "}
        <a href="mailto:madrasdelights@gmail.com">madrasdelights@gmail.com</a>{" "}
        (or) <a href="https://wa.me/31610310653">WhatsApp us at +31610310653</a>
      </Typography>
      <br />
      <Typography variant="h5" gutterBottom>
        Bulk Orders for Parties, Functions, and Corporate Events
      </Typography>
      <Typography variant="h6" gutterBottom fontWeight={200}>
        Planning a party, function, or corporate event? We offer bulk snack
        orders tailored to your needs! Whether it's for a festive celebration, a
        corporate meeting, or any special occasion, we're here to provide
        delicious snacks your guests will love. Contact us today for more
        details on bulk orders and customization options!
      </Typography>
    </Grid>
  );
};
