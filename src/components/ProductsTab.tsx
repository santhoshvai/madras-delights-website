import products from "@/data/products";
import uniqueness from "@/data/uniqueness";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Product from "./Product";
import Unique from "./Unique";

const Products = () => {
  return (
    <>
      <Grid
        container
        spacing={{ xs: 1, md: 2, lg: 3 }}
        maxWidth={"md"} // max 900px
        sx={{
          justifyContent: "center",
          margin: "auto",
        }}
      >
        {products.map((product) => {
          return (
            <Grid xs={4} key={product.name}>
              <Product
                product={product}
                imageSizes="(max-width: 600px) 200px, 300px"
              />
              {/*
              - max width is 900px:
              The image takes 4 columns out of 12, so image width is 33.33% of the container width.
              aka container-width/3
              - when width is 600px:
               */}
            </Grid>
          );
        })}
      </Grid>
      <Grid
        container
        rowGap={4}
        sx={{
          paddingTop: 8,
          alignSelf: "center",
        }}
      >
        <Grid
          xs={12}
          md={6}
          sx={{
            paddingTop: 8,
            margin: "auto",
            textAlign: "center",
          }}
        >
          <Typography variant="h5" fontWeight={"bold"} gutterBottom>
            What makes Aswins sweets and snacks special?
          </Typography>
        </Grid>
        <Grid
          container
          // maxWidth={"lg"}
          spacing={{ xs: 2, md: 2, lg: 3 }}
          sx={{
            justifyContent: "center",
            margin: "auto",
          }}
        >
          {uniqueness.map((unique) => {
            return (
              <Grid xs={12} md={6} lg={4} key={unique.description}>
                <Unique
                  uniqueness={unique}
                  imageSizes="(max-width: 899px) 100vw, (max-width: 1199px) 50vw, 33vw"
                />
              </Grid>
            );
          })}
        </Grid>
        <br />
      </Grid>
    </>
  );
};

export default Products;
