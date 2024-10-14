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
        maxWidth={"md"}
        sx={{
          justifyContent: "center",
          alignSelf: "center",
        }}
      >
        {products.map((product) => {
          return (
            <Grid xs={4} md={3} key={product.name}>
              <Product product={product} />
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
          //   backgroundColor: "#f5f5f5",
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
          //   maxWidth={"md"}
          spacing={{ xs: 2, md: 2, lg: 3 }}
          sx={{
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

export default Products;
