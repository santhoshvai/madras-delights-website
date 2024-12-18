import { Typography, Grid } from "@mui/material";

const OfflineStore = ({
  storeName,
  address,
  googleMapsLink,
  webStoreLink,
  isWhatsApp,
}: {
  storeName: string;
  address: string;
  googleMapsLink: string;
  webStoreLink?: string;
  isWhatsApp?: boolean;
}) => {
  return (
    <li>
      <Typography variant="body1" fontWeight={200}>
        {storeName}
      </Typography>
      <a href={googleMapsLink} target="_blank" rel="noopener noreferrer">
        {address}
      </a>
      <br />
      {!!webStoreLink && (
        <a href={webStoreLink} target="_blank" rel="noopener noreferrer">
          {isWhatsApp ? "WhatsApp" : "Web store"}
        </a>
      )}
    </li>
  );
};

const OnlineStore = ({
  storeName,
  link,
  isWhatsApp,
}: {
  storeName: string;
  link: string;
  isWhatsApp?: boolean;
}) => {
  return (
    <li>
      <Typography variant="body1" fontWeight={200}>
        {storeName}
      </Typography>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {isWhatsApp ? "WhatsApp" : "Web store"}
      </a>
    </li>
  );
};

const Stores = () => {
  return (
    <Grid
      container
      maxWidth={"md"}
      sx={{
        margin: "auto",
      }}
      direction="column"
    >
      <Grid>
        <Typography variant="h5" fontWeight={"bold"} sx={{ marginBottom: 4 }}>
          You can find our products in the following stores:
        </Typography>
      </Grid>
      <Grid>
        <Typography variant="h6" gutterBottom fontWeight={500}>
          Almere/Lelystad Region
        </Typography>
        <ul>
          <OfflineStore
            storeName="Anu Foods Almere (previously called Rurban Fresh)"
            address="Markerkant 12 06-09, 1314 AK Almere"
            googleMapsLink="https://maps.app.goo.gl/9jkz1JiPjsYwVygF7"
          />
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
            storeName="Lely Kirana - Lelystad region exclusive"
            link="https://chat.whatsapp.com/IB5eOs2X0zuK5WHkiGb0DO"
            isWhatsApp
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
            storeName="Taste of Asia Market"
            address="Schutterstraat 46, 1315 VJ Almere"
            googleMapsLink="https://maps.app.goo.gl/DDe4VaTP5b7tP9tA6"
          />
          <OfflineStore
            storeName="Toko Almere Poort"
            address="Europalaan 907, 1363 BM Almere"
            googleMapsLink="https://maps.app.goo.gl/TMQKQyMBGZ6dyoTi6"
          />
        </ul>
      </Grid>
      <Grid>
        <Typography variant="h6" gutterBottom fontWeight={400}>
          Weesp/Hilversum Region
        </Typography>
        <ul>
          <OfflineStore
            storeName="Wins Wereld Winkel"
            address="Leeuwenstraat 36, 1211 EV Hilversum"
            googleMapsLink="https://maps.app.goo.gl/KwvLPv3GhpUxH88c7"
          />
        </ul>
      </Grid>
      <Grid>
        <Typography variant="h6" gutterBottom fontWeight={400}>
          Utrecht Region
        </Typography>
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
      </Grid>
      <Grid>
        <Typography variant="h6" gutterBottom fontWeight={400}>
          Amsterdam/Amstelveen Region
        </Typography>
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
          <OfflineStore
            storeName="Spice Indian Supermarket"
            address="Karel Doormanweg 18, 1181 WE Amstelveen"
            googleMapsLink="https://maps.app.goo.gl/ZaUyULpM8TRseFoAA"
          />
        </ul>
      </Grid>
      <Grid>
        <Typography variant="h6" gutterBottom fontWeight={400}>
          The Hague and Rotterdam Region
        </Typography>
        <ul>
          <OnlineStore
            storeName="Amazing India (also ships throughout the Netherlands)"
            link="https://amazingindia.nl/product-category/aswins-chitale-snack/"
          />
        </ul>
      </Grid>
      <Grid>
        <Typography variant="h6" gutterBottom fontWeight={400}>
          Eindhoven Region
        </Typography>
        <ul>
          <OfflineStore
            storeName="Dbanyan (also ships throughout the Netherlands and Belgium)"
            address="Meerwater 15, 5658 LP, Eindhoven"
            googleMapsLink="https://maps.app.goo.gl/HxnMxqEhaBkfmeot8"
            webStoreLink={"https://dbanyan.nl/search?type=product&q=aswins"}
          />
          <OfflineStore
            storeName="Sensa Supermarkt"
            address="Bredalaan 71, 5652 JB Eindhoven"
            googleMapsLink="https://maps.app.goo.gl/hHztfQBsWNh6hqYS9"
          />
        </ul>
      </Grid>
      <Grid>
        <Typography variant="h6" gutterBottom fontWeight={400}>
          Arnhem Region
        </Typography>
        <ul>
          <OnlineStore
            storeName="Desi Basket Arnhem"
            link="https://api.whatsapp.com/send/?phone=31641561134"
            isWhatsApp
          />
        </ul>
      </Grid>
    </Grid>
  );
};

export default Stores;
