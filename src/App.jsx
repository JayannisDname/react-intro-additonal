import React from "react";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import { CssBaseline, Container } from "@mui/material";
import { useState } from "react";
import { PRODUCTS_DATA } from "./data/products";

const App = () => {
  const [products, setProducts] = useState(PRODUCTS_DATA);
  const [cartItems, setCartItems] = useState([]);

  const addedCart = (product) => {
    const cartItem = cartItems.find((item) => item.product.id === product.id);

    if (cartItem) {
      setCartItems(
        cartItems.map((item) => {
          if (item.product.id === product.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        })
      );
    } else {
      setCartItems([...cartItems, { product, quantity: 1 }]);
    }
  };

  const removeCart = (product) => {
    const cartItem = cartItems.find((item) => item.product.id === product.id);

    if (cartItem.quantity === 1) {
      setCartItems(
        cartItems.filter((cartItem) => cartItem.product.id !== product.id)
      );
    } else {
      setCartItems(
        cartItems.map((item) => {
          if (item.product.id === product.id) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }
          return item;
        })
      );
    }
  };

  return (
    <>
      <CssBaseline />
      <NavBar numCartItems={cartItems.length} />
      <Container sx={{ marginTop: 5 }}>
        <Products
          cartItems={cartItems}
          onCart={addedCart}
          onRemoveCart={removeCart}
          products={products}
        ></Products>
      </Container>
    </>
  );
};

export default App;
