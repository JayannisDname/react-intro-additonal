import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Badge, Grid } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function DenseAppBar({ numCartItems }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "black" }}>
        <Toolbar variant="dense">
          <Grid container justify="space-between">
            <Typography variant="h6" color="inherit" component="div">
              WearMe
            </Typography>
            <ShoppingCartIcon></ShoppingCartIcon>
            <Badge badgeContent={numCartItems} color="primary"></Badge>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
