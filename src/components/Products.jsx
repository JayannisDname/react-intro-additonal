import { Grid } from "@mui/material";
import React from "react";
import WearMe from "./WearMe";

const Products = ({ products, onCart, onRemoveCart, cartItems }) => {
  return (
    <Grid container spacing={5}>
      {products.map((product) => (
        <Grid item md={2} xs={12} key={product.id}>
          <WearMe
            cartItem={cartItems.find((item) => item.product.id === product.id)}
            onCart={onCart}
            onRemoveCart={onRemoveCart}
            product={product}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Products;
