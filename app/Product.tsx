"use client";

import { Product } from "@/typings";
import * as React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Rating from "@mui/material/Rating";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <>
      <Paper elevation={4} sx={{ maxWidth: 345, marginTop: "60px" }}>
        <div>
          <img style={{ height: "250px", width: "100%" }} src={product.image} />
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography
            sx={{ height: 130, overflow: "scroll" }}
            variant="body2"
            color="text.secondary"
          >
            {product.description}
          </Typography>
        </CardContent>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px",
          }}
        >
          <div>
            <span>
              Price : <del>{product.price + product.price / 2}</del>{" "}
              <ins>{product.price}</ins>
            </span>
          </div>

          <div>
            <Rating name="read-only" value={product.rating.rate} readOnly />
          </div>
        </div>
      </Paper>
    </>
  );
};

export default ProductCard;
