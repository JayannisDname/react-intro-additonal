import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  Button,
  Box,
  Grid,
} from "@mui/material";
import React from "react";

const WearMe = ({ product, onCart, onRemoveCart, cartItem }) => {
  const functionCart = () => {
    return cartItem ? (
      <Grid container spacing={3} direction="row">
        <Grid item xs={4}>
          <Button
            variant="contained"
            fullWidth
            onClick={() => onCart(product)}
            sx={{
              width: "100%",
              maxWidth: "20px",
              height: "20px",
              width: "20px",
            }}
            style={{
              backgroundColor: "black",
              color: "white",
            }}
          >
            +
          </Button>
        </Grid>
        <Grid item xs={2} sx={{ textAlign: "center" }}>
          <Typography variant="h8" ml={1.5}>
            {cartItem.quantity}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="contained"
            fullWidth
            onClick={() => onRemoveCart(product)}
            sx={{
              width: "100%",
              maxWidth: "20px",
              height: "20px",
              width: "20px",
            }}
            style={{
              backgroundColor: "black",
              color: "white",
            }}
          >
            -
          </Button>
        </Grid>
      </Grid>
    ) : (
      <Box>
        <Button
          variant="contained"
          onClick={() => onCart(product)}
          style={{
            justifyContent: "center",
            backgroundColor: "black",
            color: "white",
          }}
        >
          Add to Cart
        </Button>
      </Box>
    );
  };

  return (
    <Card
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardContent>
        <Typography
          variant="caption"
          align="center"
          sx={{ fontWeight: "bold" }}
        >
          {product.category}
        </Typography>
      </CardContent>
      <CardMedia component="img" height="100" image={product.image} />
      <CardHeader
        title={product.title}
        titleTypographyProps={{ variant: "content" }}
        style={{ textAlign: "center" }}
        subheader={`₱ ${product.price}`}
        sx={{ fontWeight: "bold" }}
      />
      <CardActions>{functionCart()}</CardActions>
    </Card>
  );
};

export default WearMe;
