"use client";

import Link from "next/link";
import React from "react";
import { Product } from "../typings";
import ProductCard from "./Product";
import Grid from "@mui/material/Grid";
import Header from "./Header";

const fetchProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products/");
  const products: Product[] = await res.json();
  return products;
};

async function ProductList() {
  const products = await fetchProducts();

  return (
    <>
      <Header />
      <Grid container>
        {products.map((product) => (
          <Grid key={product.id} item xs={6} md={3} lg={3}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
export default ProductList;
